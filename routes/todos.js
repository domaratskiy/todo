const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", async (req, res) => {
  try {
    const tasks = await Todo.find();
    res.render("index", { tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  const post = new Todo({
    title,
    completed: false,
  });

  try {
    await post.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const task = await Todo.findById(req.params.id);
    task.completed = !task.completed;
    await task.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/delete", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.body.id);
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
