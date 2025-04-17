const express = require("express");
const Diet = require("../models/Diet");
const router = express.Router();

// Add a new diet entry
router.post("/add", async (req, res) => {
    const { userId, meals, totalCalories } = req.body;

    // Input validation
    if (!userId || !meals || !totalCalories) {
        return res.status(400).json({ error: "All fields (userId, meals, totalCalories) are required." });
    }

    try {
        const newDiet = new Diet({
            userId,
            meals,
            totalCalories
        });

        await newDiet.save();
        res.status(201).json(newDiet);
    } catch (error) {
        console.error("❌ Error saving diet entry:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// Get user's diet data
router.get("/:userId", async (req, res) => {
    const { userId } = req.params;

    // Validate that userId is provided
    if (!userId) {
        return res.status(400).json({ error: "UserId is required" });
    }

    try {
        const diet = await Diet.find({ userId }).sort({ date: -1 });

        if (diet.length === 0) {
            return res.status(404).json({ message: "No diet data found for this user" });
        }

        res.status(200).json(diet);
    } catch (error) {
        console.error("❌ Error fetching diet data:", error);
        res.status(500).json({ error: "Error fetching diet data" });
    }
});

module.exports = router;
