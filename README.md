# 68__Amol_Capstone_MindBodyFuel
🧠💪 Mind Body Fuel
Mind Body Fuel is a full-stack health and fitness web application designed to help users take control of their physical well-being. The platform provides an all-in-one solution for tracking workouts, monitoring diet and nutrition, staying hydrated, and measuring progress — all in one personalized dashboard.

🔥 Features
User Authentication: Secure registration and login system with JWT-based authentication.

Workout Tracker: Log daily workouts with exercise details, muscle groups, and duration.

Nutrition Tracker: Track macro-nutrients like proteins, carbs, fats, and total calories.

Water Intake Tracker: Monitor daily hydration levels and set personal goals.

Diet Logging: Add meals and calories to keep an eye on your food intake.

Progress Monitoring: View historical progress across different health parameters.

AI Meal Suggestions (Optional): Use Gemini AI API to suggest meals or answer health queries.

Custom Payment Gateway: Supports PayPal, manual bank transfers, and a custom payment solution for accessing premium features.

Subscription Tiers: Users can access limited features for free or upgrade to a premium plan.

🛠️ Tech Stack
Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT (JSON Web Token)

AI Integration: Google Gemini API (for meal suggestions or guidance)

Payment Integration: Custom implementation with PayPal and bank transfers

Others: Axios, dotenv, express-validator, bcrypt, etc.

📂 Folder Structure Overview
bash
Copy
Edit
/backend
  ├── models/
  ├── routes/
  ├── controllers/ (if any)
  └── server.js
/frontend
  ├── components/
  ├── pages/
  ├── services/
  └── App.js
🧪 How to Use
Clone the repository

Set up .env files for both backend and frontend

Run npm install in both frontend and backend

Start backend server: npm run dev

Start frontend: npm start

