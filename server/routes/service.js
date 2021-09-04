const router = require("express").Router();
const { create, findAll, findOne, update, remove } = require("../controllers/service");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.post("/", isAuthenticated, isAdmin, create);
router.get("/", findAll);
router.get("/:serviceId", findOne);
router.put("/:serviceId", isAuthenticated, isAdmin, update);
router.delete("/:serviceId", isAuthenticated, isAdmin, remove);

module.exports = router;
