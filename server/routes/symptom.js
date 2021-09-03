const router = require("express").Router();
const { create } = require("../controllers/symptom");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.post("/", isAuthenticated, isAdmin, create);

module.exports = router;
