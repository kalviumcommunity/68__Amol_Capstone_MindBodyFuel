const express = require("express");
const Workout = require("../models/Workout");
const router = express.Router();

// Add a new workout entry
router.post("/add", async (req, res) => {
    const { userId, exercises } = req.body;
    try {
        const newWorkout = new Workout({
            userId,
            exercises
        });
        await newWorkout.save();
        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Get user's workout data
router.get("/:userId", async (req, res) => {
    try {
        const workouts = await Workout.find({ userId: req.params.userId }).sort({ date: -1 });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ error: "Error fetching workout data" });
    }
});

module.exports = router;
