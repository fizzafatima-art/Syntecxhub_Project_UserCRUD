# Syntecxhub Backend Internship - Project 1: User CRUD API

Welcome to my submission for 
**Project 1 (User CRUD API)** as part of the Syntecxhub Backend Development Internship. This project is a fully functional RESTful API built using **Node.js**, **Express.js**, and **MongoDB/Mongoose** to perform Create, Read, Update, and Delete operations on a "User" resource with proper input validation and HTTP status codes.

---

## 🚀 Features

- **Create User (POST):** Validates and saves a new user to MongoDB.
- **Read All Users (GET):** Fetches all registered users.
- **Read Single User (GET):** Fetches details of a specific user using their unique MongoDB ID.
- **Update User (PUT):** Updates user details while re-validating the data.
- **Delete User (DELETE):** Removes a user from the database.
- **Data Validation:** Uses `validator` library and Mongoose schema features to ensure proper email formats and custom constraints (e.g., minimum age limit).
- **Environment Safety:** Uses `.env` to protect database credentials.

---

## 🛠️ Tech Stack Used

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Cloud) / MongoDB Local
- **ODM (Object Data Modeling):** Mongoose
- **Validation:** Validator npm package
- **Development Tool:** Nodemon (for auto-restarting the server)

---

## 📂 Project Structure

```text
syntecxhub-backend-internship/
├── config/
│   └── db.js            # Database connection logic
├── controllers/
│   └── userController.js # CRUD business logic
├── models/
│   └── userModel.js     # User Mongoose schema & validation
├── routes/
│   └── userRoutes.js    # Express routing for API endpoints
├── .env                 # Environment variables (Hidden/Secret)
├── .gitignore           # Ignores node_modules & .env
├── package.json         # Project metadata and dependencies
└── server.js            # Main entry point of the server