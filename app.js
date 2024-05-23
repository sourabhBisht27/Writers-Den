require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const blogRoutes = require("./routes/blog.route");
const userRoutes = require("./routes/user.route");
const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch((error) => {
    console.log("Error connecting to DB", error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/", blogRoutes);
app.use("/api/v1/", userRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is listening on port: ${process.env.PORT}`);
});
