const bcrypt = require("bcryptjs");
const { createError } = require("../error");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//register
const register = async (req, res, next) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    const user = new User({ ...req.body, password: hash });
    await user.save();
    return res.status(200).json({
      status: true,
      msg: "User created successfully!",
      user,
    });
  } catch (err) {
    next(err);
  }
};

//login
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "User not found!"));
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong credentials!"));
    const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, {
      expiresIn: "1h",
    });
    const { password, ...others } = user._doc;
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (error) {
    next(error);
  }
};
module.exports = { register, login };
