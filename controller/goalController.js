const GoalStructure = require("../models/Goal");

// CONTROLLER TO CREATE A NEW GOAL
const addNewGoal = async (req, res) => {
  const { title, description, progress } = req.body;

  const goal = await GoalStructure.create({ title, description, progress });

  res.status(201).json(goal);
};

// CONTROLLER TO GET ALL EXISTING GOALS
const getAllGoals = async (req, res) => {
  const goals = await GoalStructure.find();

  res.status(200).json(goals);
};

// CONTROLLER TO GET ONGOING GOALS
const ongoingGoals = async (req, res) => {
  const goingGoals = await GoalStructure.find({ progress: { $lt: 100 } });

  res.status(200).json(goingGoals);
};

// CONTROLLER TO GET COMPLETED GOALS
const completedGoals = async (req, res) => {
  const completeGoals = await GoalStructure.find({ progress: 100 });

  res.status(200).json(completeGoals);
};

// CONTROLLER TO GET A PARTICULAR GOAL BY ITS ID
const getEachGoal = async (req, res) => {
  const eachGoal = await GoalStructure.findById(req.params.id);

  res.status(200).json(eachGoal);
};
// CONTROLLER TO DELETE A PARTICULAR GOAL BY IT'S ID
const deleteGoal = async (req, res) => {
  const deletedGoal = await GoalStructure.findByIdAndDelete(req.params.id);

  res.status(204).json({ message: "This Goal has been Deleted Successfully" });
};

// CONTROLLER TO EDIT/PATCH or PUT THE PROGRESS OF A PATICULAR GOAL BY ITS ID
const updateProgress = async (req, res) => {
  const { progress } = req.body;

  const progressUpdate = await GoalStructure.findByIdAndUpdate(
    req.params.id,
    { progress },
    { new: true }
  );

  res.status(200).json(progressUpdate);
};

module.exports = {
  addNewGoal,
  getAllGoals,
  ongoingGoals,
  completedGoals,
  getEachGoal,
  deleteGoal,
  updateProgress,
};
