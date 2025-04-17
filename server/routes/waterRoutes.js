const express = require("express");
const Water = require("../models/water"); // Ensure the correct file path
const router = express.Router();

// Add a new water intake entry
router.post("/add", async (req, res) => {
    const { userId, intake } = req.body;
    
    // Validate inputs
    if (!userId || !intake) {
        return res.status(400).json({ error: "User ID and water intake are required." });
    }

    try {
        const newWater = new Water({ userId, intake });
        await newWater.save();
        res.status(201).json(newWater);
    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(500).json({ error: "Server error while saving water intake" });
    }
});

// Get user's water intake data
router.get("/:userId", async (req, res) => {
    try {
        const waterData = await Water.find({ userId: req.params.userId }).sort({ date: -1 });
        if (!waterData || waterData.length === 0) {
            return res.status(404).json({ error: "No water data found for this user." });
        }
        res.status(200).json(waterData);
    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(500).json({ error: "Error fetching water data" });
    }
});

module.exports = router;
