const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/user.controller");
const { verifyJWT } = require("../middlewares/auth.middleware");

// console.log(registerUser, loginUser, verifyJWT);
router.post("/register", registerUser);
router.post("/login", loginUser);

// secured routes(only accessible to logged-in user)
router.post("/logout", verifyJWT, logoutUser);

module.exports = router;
