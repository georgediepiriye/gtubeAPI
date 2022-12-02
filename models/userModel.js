const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    image: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/001/840/618/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
    },
    subscribers: { type: Number, default: 0 },
    subscribedUsers: { type: [String] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
