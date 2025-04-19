// diet schema
//connected to nutriton
const mongoose = require("mongoose");

const dietSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    meals: [
        {
            name: { type: String, required: true },
            calories: { type: Number, required: true }
        }
    ],
    totalCalories: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

const Diet = mongoose.model("Diet", dietSchema);
module.exports = Diet;
