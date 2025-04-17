const express = require("express");
const Nutrition = require("../models/Nutrition");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Add a new nutrition entry
router.post(
  "/add",
  [
    body("userId").notEmpty().withMessage("User ID is required"),
    body("protein").isNumeric().withMessage("Protein should be a numeric value"),
    body("carbs").isNumeric().withMessage("Carbs should be a numeric value"),
    body("fats").isNumeric().withMessage("Fats should be a numeric value"),
    body("totalCalories").isNumeric().withMessage("Total Calories should be a numeric value"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { userId, protein, carbs, fats, totalCalories } = req.body;

    try {
      const newNutrition = new Nutrition({
        userId,
        protein,
        carbs,
        fats,
        totalCalories,
      });
      await newNutrition.save();
      res.status(201).json(newNutrition);
    } catch (error) {
      console.error("Error saving nutrition data:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

// Get user's nutrition data
router.get("/:userId", async (req, res) => {
  try {
    const nutritionData = await Nutrition.find({ userId: req.params.userId }).sort({ date: -1 });
    if (nutritionData.length === 0) {
      return res.status(404).json({ error: "No nutrition data found for this user" });
    }
    res.status(200).json(nutritionData);
  } catch (error) {
    console.error("Error fetching nutrition data:", error);
    res.status(500).json({ error: "Error fetching nutrition data" });
  }
});

module.exports = router;
