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

### GET API Explanation
This GET API is used to retrieve the water intake data of a specific user.

When a GET request is made to the route /api/water/:userId, the server extracts the userId from the URL and uses it to find all the water intake entries stored in the database for that user. The entries are sorted in descending order based on the date, which means the most recent data will appear first.

If no data is found for the given user ID, the API responds with a 404 status and a message saying “No water data found for this user.” This helps in informing the client that no records are available.

If records are found, the API returns them with a 200 status along with the full list of water intake entries for that user in JSON format.

In case any error occurs during the process, like a database connection issue, the API catches that error and responds with a 500 status and a message saying “Error fetching water data.” This ensures proper error handling.

This GET API is helpful for users to view their past water intake history, track their hydration patterns, and analyze their daily habits.

### POST API

The POST /login API endpoint allows users to log into the application by submitting their email and password in the request body. This endpoint performs a secure check by first verifying if a user with the provided email exists in the database. If the user is found, the submitted password is compared with the hashed password stored in the database using the bcrypt library. If both the email and password are valid, a JSON Web Token (JWT) is generated using the user's ID and email as payload, signed with a secret key stored in the environment variables (JWT_SECRET). The token is configured to expire in one day and is returned to the client. This token can then be used to authenticate future requests to protected routes, enabling secure and stateless user sessions.



The database schema for this project is designed using MongoDB and follows a document-oriented structure to efficiently store and manage user-specific data. The primary schema is the User Schema, which includes fields like name, email, password (securely hashed), age, gender, and timestamps for creation and updates. In addition to the user data, the project includes other schemas such as Workout Tracker, Nutrition Tracker, and Water Intake Tracker, each of which references the user through a userId field to maintain relationships. These schemas store relevant details like workout types, duration, calories burned, meal information, food items, calorie intake, and daily water consumption. This modular schema design ensures that user activities and health data are logically separated yet easily linked, providing a scalable and organized backend structure for the application.
