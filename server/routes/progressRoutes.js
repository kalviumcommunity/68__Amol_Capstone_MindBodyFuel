const express = require("express");
const { body, validationResult } = require("express-validator");
const Diet = require("../models/Diet");
const router = express.Router();

// Add a new diet entry
router.post("/add", [
    // Validate input data
    body("userId").isMongoId().withMessage("Invalid user ID"),
    body("meals")
        .isArray({ min: 1 })
        .withMessage("Meals should be an array and contain at least one meal"),
    body("totalCalories")
        .isNumeric()
        .withMessage("Total calories should be a number")
        .custom((value) => value > 0)
        .withMessage("Total calories must be greater than zero"),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, meals, totalCalories } = req.body;
    try {
        // Check if the user already has a diet entry for the day (optional check)
        const existingDiet = await Diet.findOne({ userId, date: new Date().toISOString().split('T')[0] }); // Assuming you're storing date in 'YYYY-MM-DD' format
        if (existingDiet) {
            return res.status(400).json({ error: "Diet entry already exists for today" });
        }

        // Create new diet entry
        const newDiet = new Diet({
            userId,
            meals,
            totalCalories,
            date: new Date().toISOString().split('T')[0], // Add the current date for easy filtering
        });

        await newDiet.save();
        res.status(201).json(newDiet);
    } catch (error) {
        console.error("Error adding diet:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// Get user's diet data
router.get("/:userId", async (req, res) => {
    try {
        const diet = await Diet.find({ userId: req.params.userId }).sort({ date: -1 });
        res.status(200).json(diet);
    } catch (error) {
        console.error("Error fetching diet data:", error);
        res.status(500).json({ error: "Error fetching diet data" });
    }
});

module.exports = router;
