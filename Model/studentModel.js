const mongoose = require("mongoose");

const studetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    university: {
      type: String,
      trim: true,
      required: true,
    },
    subjects: [String],
    rating: Number,
  },
  {
    timestamps: true,
  }
);

const Studentmodel = mongoose.model("students", studetSchema)

module.exports = Studentmodel