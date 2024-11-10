This project is a basic API for managing employee data, built using Node.js, Express, and MongoDB. It allows users to add new employee records and view existing employee records.

**Project Overview**
The API provides two main endpoints:

GET /api/employees - Retrieves a list of all employees.
POST /api/add_employee - Adds a new employee record to the database.
Setup and Installation

**Clone the Repository:**
git clone <repository-url>

**Navigate to the Project Directory:**
cd employee-management-api

**Install Dependencies:**
npm install
Start MongoDB:
Ensure MongoDB is running locally on mongodb://127.0.0.1:27017 or update the connection URI in employees_list.js.

**Run the Server:**
node employees_list.js
The server will start on http://localhost:3000.

**Code Explanation**
Schema Definition (employee.js): Defines the structure for employee data with fields for name, age, location, and email.

**API and Database Connection (employees_list.js):**

Connects to MongoDB.
Sets up Express routes for retrieving and adding employee data.
Includes middleware for JSON parsing and CORS.

**What I Learned** 
Setting up a REST API with Express.
Using Mongoose to define and interact with MongoDB.
Handling basic CRUD operations in a Node.js application.
API Usage
Use Postman or another API client to test the following routes:

GET /api/employees - Returns a list of all employees.
POST /api/add_employee - Accepts JSON data to create a new employee.
Example POST request data:

{
    "name": "John Doe",
    "age": 30,
    "location": "New York",
    "email": "johndoe@example.com"
}
