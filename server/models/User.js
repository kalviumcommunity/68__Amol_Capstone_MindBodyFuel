const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    height: { type: Number }, // in cm
    weight: { type: Number }, // in kg
    role: { type: String, enum: ["free", "premium"], default: "free" }, // NEW: User role
    subscriptionStatus: { type: String, enum: ["active", "inactive"], default: "inactive" }, // NEW: Subscription status
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
