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




---

## 🗓️ Weekly Development Schedule

### **Week 1: Core Setup & User Features**
| Day        | Tasks |
|------------|-------|
| Monday     | Project cleanup & folder structure setup |
| Tuesday    | Backend setup (Express, MongoDB, `.env`) |
| Wednesday  | User model & registration with validation |
| Thursday   | Login with JWT authentication |
| Friday     | Add user roles and subscription support |
| Saturday   | Test user APIs using Postman/frontend |
| Sunday     | Buffer, bug fixing, or catching up |

### **Week 2: Main Trackers**
| Day        | Tasks |
|------------|-------|
| Monday     | Water Tracker (backend + frontend) |
| Tuesday    | Nutrition Tracker (backend + frontend) |
| Wednesday  | Workout Tracker (backend + frontend) |
| Thursday   | Connect Trackers to Dashboard |
| Friday     | Progress Tracking View |
| Saturday   | Styling and error handling |
| Sunday     | Buffer, polish, and review |

### **Week 3: AI & Payment**
| Day        | Tasks |
|------------|-------|
| Monday     | Integrate Gemini AI prompt route |
| Tuesday    | Build frontend chat assistant UI |
| Wednesday  | Set up basic payment route |
| Thursday   | Add manual transfer and PayPal option |
| Friday     | Handle access control for premium features |
| Saturday   | Review security & deploy backend |
| Sunday     | Final buffer and polish

---

## 📌 How to Run the Project

```bash
# Backend
cd server
npm install
npm run dev

# Frontend
cd client
npm install
npm start

