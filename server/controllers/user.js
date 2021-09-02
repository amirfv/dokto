const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Admin = require("../models/admin");
const { validateRegister, validateLogin } = require("../utils/validation");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { email, password } = req.body;

  const validate = validateRegister(req.body);
  if (validate.error) return next(new ErrorResponse(validate.message, 400));

  const user = await User.findOne({ email });
  if (user) return next(new ErrorResponse("An account with this email already exists.", 400));

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  const newUser = new User({ email, passwordHash });
  const savedAuth = await newUser.save();

  const token = jwt.sign({ user: savedAuth._id }, process.env.JWT_SECRET);
  res.cookie("t", token, { httpOnly: true, secure: true, sameSite: "none" });
  res.status(201).json({ message: "OK", token: token });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  const validate = validateLogin(req.body);
  if (validate.error) return next(new ErrorResponse(validate.message, 400));

  const user = await User.findOne({ email });
  if (!user) return next(new ErrorResponse("Wrong email or password!", 400));

  let findRole = await Admin.findOne({ _id: user._id });

  const passwordCorrect = await bcrypt.compare(password, user.passwordHash);
  if (!passwordCorrect) return next(new ErrorResponse("Wrong email or password!", 400));

  const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET);
  res.cookie("role", findRole.role);
  res.cookie("t", token, { httpOnly: true, secure: true, sameSite: "none" });
  res.status(200).json({ message: "OK", token: token, user: user._id });
};

exports.logout = async (req, res) => {
  res.cookie("t", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Successfully logout..." });
};

exports.isLoggedIn = async (req, res) => {
  try {
    const token = req.cookies.t || req.body.token;
    if (!token) return res.status(401).json({ error: true, message: "Unauthorized" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ error: false, message: "Authenticated", user: verified.user });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: true, message: "Unauthorized" });
  }
};
