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

exports.findAll = async (req, res, next) => {
  console.log("FIND ALL SYMPTOMS");
  try {
    const allSymptom = await Symptom.find({});
    res.status(200).json({ message: "All symptom", data: allSymptom });
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse("Something went wrong", 500));
  }
};

exports.findOne = async (req, res, next) => {
  console.log("FIND ONE SYMPTOM", req.params.symptomId);
  const { symptomId } = req.params;
  try {
    const symptom = await Symptom.findById(symptomId);
    res.status(200).json({ message: "Found symptom", data: symptom });
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse("Something went wrong", 500));
  }
};

exports.update = async (req, res, next) => {
  console.log("UPDATE SYMPTOM", req.params.symptomId);
  const { symptomId } = req.params;
  try {
    await Symptom.findByIdAndUpdate(symptomId, req.body);
    const updatedSymptom = await Symptom.findById(symptomId);
    res.status(201).json({ message: "Update symptom", data: updatedSymptom });
  } catch (error) {
    console.error(error);
    res.status(500).json();
  }
};

exports.remove = async (req, res) => {
  const { symptomId } = req.params;
  try {
    const removedSymptom = await Symptom.findByIdAndDelete(symptomId);
    res.status(200).json({ message: "Remove symptom", data: removedSymptom });
  } catch (error) {
    console.error(error);
    res.status(500).json();
  }
};
