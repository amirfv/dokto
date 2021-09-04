const { Schema, model } = require("mongoose");
const { ObjectId } = Schema;

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      length: 100,
    },
    description: {
      type: String,
      required: true,
      length: 2000,
    },
    addedBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Service = model("service", serviceSchema);
module.exports = Service;
