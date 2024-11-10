const mongoose = require ('mongoose');
const Employees = require('./employee');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// connect with MongoDB
const uri = ('mongodb://localhost:27017')
mongoose.connect(uri, {'dbName':'employeeDB'})

// Setup Middleware
app.use('*', bodyParser.json());

// GET endpoint
app.get('/api/employees', async(req, res)=>{
    const documents = await Employees.find();
    res.json(documents)
});

// POST Endpoint
app.post('/api/add_employee', async (req, res) => {
    console.log(req);
    const data = req.body;
    const emp = new Employees({
        "emp_name": data['name'],
        "age":data['age'],
        "location": data['location'],
        "email" : data['email'],
    });

    // SAVE the data to employeeDB;
    await emp.save()
    res.json({message: "Employee added successfully"});
});

// Start server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost/${port}`);
})