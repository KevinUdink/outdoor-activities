const mongoose = require("mongoose");
const requiredMsg = "{PATH} is required";
const minLengthMsg = "{PATH} must be at least {MINLENGTH} characters";

const ActivitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, requiredMsg],
      minlength: [3, minLengthMsg],
    },
    category: {
      type: String,
      required: [true, requiredMsg],
      minlength: [3, minLengthMsg],
    },
    description: {
      type: String,
      required: [true, requiredMsg],
      minlength: [3, minLengthMsg],
    },
    lat: {
      type: Number,
      required: [true, requiredMsg],
    },
    lon: {
      type: Number,
      required: [true, requiredMsg],
    },
    url: {
      type: String,
      default: "",
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    // image: {
    //   type: File,
    // }
  },
  { timestamps: true }
);

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
