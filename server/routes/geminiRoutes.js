const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Route to generate AI-based responses
router.post("/generate", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
            return res.status(400).json({ error: "Prompt is required and should be a non-empty string." });
        }

        // Request AI response from Gemini API
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: prompt }] }]
            },
            {
                headers: { "Content-Type": "application/json" }
            }
        );

        // Extract the AI-generated response text
        const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

        res.json({ response: aiResponse });
    } catch (error) {
        console.error("❌ Gemini API Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Something went wrong with AI generation." });
    }
});

module.exports = router;
