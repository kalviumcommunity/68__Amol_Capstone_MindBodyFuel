const express = require("express");
const razorpay = require("razorpay"); // Ensure you have razorpay npm package installed
const router = express.Router();

// Initialize Razorpay instance (make sure to replace with your credentials)
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Store these credentials in .env for security
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create an order
router.post("/create-order", async (req, res) => {
    try {
        const { amount, currency } = req.body;

        // Validate amount
        if (!amount || amount <= 0) {
            return res.status(400).json({ error: "Invalid amount" });
        }

        // Set up order options for Razorpay
        const options = {
            amount: amount * 100,  // Razorpay expects amount in smallest unit (paise for INR)
            currency: currency || "INR",  // Default to INR if currency is not provided
            receipt: `receipt_${Date.now()}`,  // Unique receipt identifier
            payment_capture: 1  // 1 means auto-capture, 0 means manual capture
        };

        // Create the order via Razorpay API
        const order = await razorpayInstance.orders.create(options);
        
        // Return the order details
        res.json({
            id: order.id,
            currency: order.currency,
            amount: order.amount,
            receipt: order.receipt
        });
    } catch (error) {
        console.error("❌ Razorpay API Error:", error);
        res.status(500).json({ error: "Failed to create order" });
    }
});

module.exports = router;
