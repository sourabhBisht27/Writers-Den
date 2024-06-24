const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");

// user next whenever writing middlewares
const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    // gathering token
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    // verifying token
    if (!token) {
      throw new ApiError(401, "Unauthorized request!");
    }

    // decode token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    // verify user
    if (!user) {
      throw new ApiError(401, "Invalid Access Token!");
    }

    req.user = user;
    next();
  } catch (err) {
    throw new ApiError(401, err?.message || "Invalid Access Token");
  }
});

module.exports = { verifyJWT };
