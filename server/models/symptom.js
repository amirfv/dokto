const { Schema, model } = require("mongoose");
const { ObjectId } = Schema;

const symptomSchema = new Schema(
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

const Symptom = model("symptom", symptomSchema);
module.exports = Symptom;
