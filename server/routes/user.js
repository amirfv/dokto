const router = require("express").Router();
const { login, register, logout, isLoggedIn } = require("../controllers/user");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", isAuthenticated, isAdmin, logout);
router.post("/loggedin", isLoggedIn);

module.exports = router;
