const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const User = require("../models/User"); // Import your User model

const router = express.Router();

// Registration route
router.post("/", [
    // Email validation
    body("email")
        .isEmail()
        .withMessage("Please provide a valid email address")
        .normalizeEmail(),

    // Password validation
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters")
        .matches(/\d/)
        .withMessage("Password must contain at least one number")
        .matches(/[a-zA-Z]/)
        .withMessage("Password must contain at least one letter")
        .matches(/[\W_]/)
        .withMessage("Password must contain at least one special character"),

    // Name validation
    body("name")
        .notEmpty()
        .withMessage("Name is required")
        .trim(),

    // Confirm password validation
    body("confirmPassword")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Passwords do not match");
            }
            return true;
        }),

    // Optional: Add more validations if needed
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Handle user creation logic...
    try {
        const { email, password, name } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email is already taken" });
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const user = new User({
            email,
            password: hashedPassword,
            name
        });

        // Save the user
        await user.save();

        res.status(201).json({
            message: "User successfully created",
            // Optionally, return the created user or any necessary details
        });
    } catch (err) {
        console.error("Error creating user:", err);

        // Specific error handling for duplicate email
        if (err.code === 11000) {
            return res.status(400).json({ error: "Email is already in use" });
        }

        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
