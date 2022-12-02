const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, require: true },
    desc: { type: String, require: true },
    imageUrl: { type: String, require: true },
    imageUrl: { type: String, require: true },
    views: { type: Number, default: 0 },
    tags: { type: [String], default: [] },
    likes: { type: [String], default: [] },
    dislikes: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
