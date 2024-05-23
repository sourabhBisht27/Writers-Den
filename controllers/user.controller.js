const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    // 22:38
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while creating access and refresh tokens"
    );
  }
};

exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return ApiError(400, "field can't be empty!");
    }

    let user = await User.findOne({ email });
    // if (user) return res.status(400).json({ message: "User already exists!" });
    if (user) {
      throw new ApiError(409, "User already exists!");
    }

    user = new User({ name, email, password });
    await user.save();

    // checking if user is created or not
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(500, "Error registering new user!");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User Registered Succesfully!"));
  } catch (err) {
    // res.status(500).json({ message: "Server error", error: err.message });
    throw new ApiError(500, err.message);
  }
});

exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new ApiError(400, "email or password is required!");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(400, "User does not exist!");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid user credentials!");
    }

    // generating tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    // now cookies will be modified by the server only
    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInUser,
            accessToken,
            refreshToken,
          },
          "User logged In Succesfully!"
        )
      );
  } catch (err) {
    // res.status(500).json({ message: "Server error", error: err.message });
    throw new ApiError(500, "Server error");
  }
});

exports.logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out!"));
});
