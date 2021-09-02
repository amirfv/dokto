const { validateAdminInput } = require("../utils/validation");
const Admin = require("../models/admin");
const ErrorResponse = require("../utils/errorResponse");

exports.create = async (req, res, next) => {
  console.log("CREATE ADMIN =>", req.user);
  const { email, firstName, lastName, phone, dob } = req.body;

  const validate = validateAdminInput(req.body);
  if (validate.error) return next(new ErrorResponse(validate.message, 400));

  try {
    const newAdmin = new Admin({
      _id: req.user,
      email,
      firstName,
      lastName,
      phone,
      dob,
    });
    const admin = await newAdmin.save();
    res.cookie("role", admin.role);
    res.status(201).json({ message: "Admin created", data: admin });
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse("Something went wrong", 500));
  }
};

exports.findAll = async (req, res) => {
  console.log("FIND ALL ADMIN");
  try {
    const allAdmin = await Admin.find({});
    res.status(200).json({ message: "All admin", data: allAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json();
  }
};

exports.findOne = async (req, res) => {
  const { userId } = req.params;
  try {
    const findAdmin = await Admin.find({ _id: userId });
    res.status(200).json({ message: "Found admin", data: findAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json();
  }
};

exports.update = async (req, res) => {
  const { userId } = req.params;
  try {
    await Admin.findByIdAndUpdate(userId, req.body);
    const updatedAdmin = await Admin.findById(userId);
    res.status(201).json({ message: "Update admin", data: updatedAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json();
  }
};

exports.remove = async (req, res) => {
  const { userId } = req.params;
  try {
    const removedAdmin = await Admin.findByIdAndDelete(userId);
    res.status(200).json({ message: "Remove admin", data: removedAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json();
  }
};
