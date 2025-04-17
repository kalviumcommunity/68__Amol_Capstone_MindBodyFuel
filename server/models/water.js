const mongoose = require("mongoose");

const waterSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", // Assumes a User model exists, change as needed
    },
    intake: {
        type: Number, // Intake in liters (or milliliters depending on your requirements)
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Water = mongoose.model("Water", waterSchema);

module.exports = Water;
