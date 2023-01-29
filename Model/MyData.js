const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const myDataSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    selector: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("mydata", myDataSchema);
