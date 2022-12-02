const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      require: true,
    },
    desc: { type: String, require: true },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
