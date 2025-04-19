//for nutrtion
const mongoose = require("mongoose");

const nutritionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    protein: { type: Number, required: true }, // in grams
    carbs: { type: Number, required: true },   // in grams
    fats: { type: Number, required: true },    // in grams
    totalCalories: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

const Nutrition = mongoose.model("Nutrition", nutritionSchema);
module.exports = Nutrition;
