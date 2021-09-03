const Symptom = require("../models/symptom");
const ErrorResponse = require("../utils/errorResponse");
const { validateSymptomInput } = require("../utils/validation");

exports.create = async (req, res, next) => {
  console.log("CREATE SYMPTOM =>", req.user, req.body);
  const { name, description } = req.body;

  const validate = validateSymptomInput(req.body);
  if (validate.error) return next(new ErrorResponse(validate.message, 400));

  try {
    const newSymptom = new Symptom({ name, description, addedBy: req.user });
    const symptom = await newSymptom.save();
    res.status(201).json({ message: "Symptom created", data: symptom });
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse("Something went wrong", 500));
  }
};
