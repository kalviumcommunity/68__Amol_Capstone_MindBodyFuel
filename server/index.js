const express = require("express");
require("dotenv").config()
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routes
const waterRoutes = require("./routes/waterRoutes");
const nutritionRoutes = require("./routes/nutritionRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");
const dietRoutes = require("./routes/dietRoutes");
const progressRoutes = require("./routes/progressRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use Routes
app.use("/api/water", waterRoutes);
app.use("/api/nutrition", nutritionRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/diet", dietRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/workout", workoutRoutes);

// Basic test route
app.get("/", (req, res) => {
    res.send("Mind Body Fuel API is running...");
});

// MongoDB connection over here
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch(err => {
    console.error("MongoDB connection error: ", err);
    process.exit(1); // Terminate process if MongoDB connection fails
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Error: ", err);
    res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
