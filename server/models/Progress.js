//progress schema

const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    weight: { type: Number, required: true }, // in kg
    bodyFatPercentage: { type: Number },
    goal: { type: String },
    date: { type: Date, default: Date.now },
});

const Progress = mongoose.model("Progress", progressSchema);
module.exports = Progress;
