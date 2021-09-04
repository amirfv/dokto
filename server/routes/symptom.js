const router = require("express").Router();
const { create, findAll, findOne, update, remove } = require("../controllers/symptom");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.post("/", isAuthenticated, isAdmin, create);
router.get("/", findAll);
router.get("/:symptomId", findOne);
router.put("/:symptomId", isAuthenticated, isAdmin, update);
router.delete("/:symptomId", isAuthenticated, isAdmin, remove);

module.exports = router;
