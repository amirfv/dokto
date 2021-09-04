const Service = require("../models/service");
const ErrorResponse = require("../utils/errorResponse");
const { validateServiceInput } = require("../utils/validation");

exports.create = async (req, res, next) => {
  console.log("SERVICE CREATE =>", req.user, req.body);
  const { name, description } = req.body;

  const validate = validateServiceInput(req.body);
  if (validate.error) return next(new ErrorResponse(validate.message, 400));

  try {
    const newService = new Service({ name, description, addedBy: req.user });
    const service = await newService.save();
    res.status(201).json({ message: "Service created", data: service });
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse("Something went wrong", 500));
  }
};

exports.findAll = async (req, res, next) => {
  console.log("FIND ALL SERVICE");
  try {
    const allService = await Service.find({});
    res.status(200).json({ message: "All service", data: allService });
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse("Something went wrong", 500));
  }
};

exports.findOne = async (req, res, next) => {
  console.log("FIND ONE SERVICE", req.params.serviceId);
  const { serviceId } = req.params;
  try {
    const service = await Service.findById(serviceId);
    res.status(200).json({ message: "Found service", data: service });
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse("Something went wrong", 500));
  }
};

exports.update = async (req, res, next) => {
  console.log("UPDATE SERVICE", req.params.serviceId);
  const { serviceId } = req.params;
  try {
    await Service.findByIdAndUpdate(serviceId, req.body);
    const updatedService = await Service.findById(serviceId);
    res.status(201).json({ message: "Update service", data: updatedService });
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse("Something went wrong", 500));
  }
};

exports.remove = async (req, res, next) => {
  const { serviceId } = req.params;
  try {
    const removedService = await Service.findByIdAndDelete(serviceId);
    res.status(200).json({ message: "Remove service", data: removedService });
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse("Something went wrong", 500));
  }
};
