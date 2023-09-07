const router = require("express").Router();
const todoController = require("./todo.controller");

router.post("/", async (req, res, next) => {
  try {
    const result = await todoController.create(req.body);
    res.json({ data: result, msg: "Successful" });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await todoController.readAllData();
    res.json({ data: result, msg: "Successful" });
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.readOneData(id);
    res.json({ data: result, msg: "Successful" });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const result = await todoController.editData(id, { title });
    res.json({ data: result, msg: "Successfully edited" });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.deleteData(id);
    res.json({ data: result, msg: "Successful" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
