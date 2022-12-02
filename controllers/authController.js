const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

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
const login = async (req, res) => {
  try {
  } catch (error) {}
};
module.exports = { register, login };
