const express = require("express");
const {
  addNewGoal,
  getAllGoals,
  ongoingGoals,
  completedGoals,
  getEachGoal,
  deleteGoal,
  updateProgress,
} = require("../controller/goalController");

const router = express.Router();

router.post("/", addNewGoal);
router.get("/all", getAllGoals);
router.get("/ongoing", ongoingGoals);
router.get("/completed", completedGoals);
router.get("/each/:id", getEachGoal);
router.delete("/delete/:id", deleteGoal);
router.patch("/progress/:id", updateProgress);

module.exports = router;
