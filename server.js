const express = require('express')
const app = express();
const mongoose = require('./Config/db')
const cors = require('cors')
const axios = require('axios');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('mongoo connected');
    
});

app.listen(process.env.PORT || 3001, () => {
    console.log('hello');

})

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});



app.use(express.json())

app.use(cors())



app.use('/', require('./Routes/index'))

























// app.get('/user/:id', (request, response) => {
//     console.log('GET =>', request.param._id);
//     // response.send({ name: 'talha', age: 50 })
// })


// fetch('/Get').then((res) => {
    //     res.json().then(resp => {
//         console.log(resp)
//     })
// })


// fetch('/Post', {
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name: 'wasi', email: 'talha@gmail.com', age: 23 }), // data can be `string` or {object}!
// }).then(res => res.json())
//     .then(response => console.log('Success:', JSON.stringify(response)))
//     .catch(error => console.error('Error:', error));








// db.getCollection('employees').insertMany([{
//     "_id" : 1.0,
//     "emp_fname" : "Jason",
//     "emp_dept" : "Technology",
//     "emp_band" : "C1",
//     "emp_specs" : [ 
//         "Java", 
//         "AngularJs", 
//         "MongoDb"
//     ],
//     "father_info" : {
//         "name" : "John"
//     },
//     "test" : "abcd",
//     "address" : [ 
//         {
//             "house_no" : 145.0,
//             "flat_no" : 35.0
//         }, 
//         {
//             "house_no" : 123.0,
//             "flat_no" : 32.0
//         }
//     ]
// },


// {
//     "_id" : 3.0,
//     "emp_fname" : "Daniel",
//     "emp_dept" : "Technology",
//     "emp_band" : "C2",
//     "emp_specs" : [ 
//         "Java", 
//         "AngularJs"
//     ],
//     "address" : [ 
//         {
//             "house_no" : 45.0,
//             "flat_no" : 35.0
//         }, 
//         {
//             "house_no" : 113.0,
//             "flat_no" : 32.0
//         }
//     ]
// },


// {
//     "_id" : 4.0,
//     "emp_fname" : "April",
//     "emp_dept" : "Technology",
//     "emp_band" : "C1",
//     "emp_specs" : [ 
//         "AngularJs", 
//         "MongoDb"
//     ],
//     "address" : [ 
//         {
//             "house_no" : 5.0,
//             "flat_no" : 35.0
//         }, 
//         {
//             "house_no" : 153.0,
//             "flat_no" : 32.0
//         }
//     ]
// },


// {
//     "_id" : 5.0,
//     "emp_fname" : "Ed",
//     "emp_dept" : "Finance",
//     "emp_band" : "C1",
//     "emp_specs" : [ 
//         "Accounting", 
//         "Payroll"
//     ],
//     "address" : [ 
//         {
//             "house_no" : 14.0,
//             "flat_no" : 35.0
//         }, 
//         {
//             "house_no" : 123.0,
//             "flat_no" : 32.0
//         }
//     ]
// },

// {
//     "_id" : 6.0,
//     "emp_fname" : "Susan",
//     "emp_dept" : "HR",
//     "emp_band" : "C0",
//     "emp_specs" : [ 
//         "Personality Development", 
//         "Employee Concern"
//     ],
//     "address" : [ 
//         {
//             "house_no" : 1.0,
//             "flat_no" : 35.0
//         }, 
//         {
//             "house_no" : 12.0,
//             "flat_no" : 32.0
//         }
//     ]
// },


// {
//     "_id" : 7.0,
//     "emp_fname" : "Marie",
//     "emp_dept" : "HR",
//     "emp_band" : "C2",
//     "emp_specs" : [ 
//         "Employee Safety"
//     ],
//     "address" : [ 
//         {
//             "house_no" : 245.0,
//             "flat_no" : 35.0
//         }, 
//         {
//             "house_no" : 13.0,
//             "flat_no" : 32.0
//         }
//     ]
// },


// {
//     "_id" : 8.0,
//     "emp_fname" : "Jeff",
//     "emp_dept" : "COO",
//     "emp_band" : "C5",
//     "emp_specs" : [ 
//         "Delivery Leader", 
//         "Employee Safety"
//     ],
//     "address" : [ 
//         {
//             "house_no" : 345.0,
//             "flat_no" : 35.0
//         }, 
//         {
//             "house_no" : 3.0,
//             "flat_no" : 32.0
//         }
//     ]
// },


// {
//     "_id" : 9.0,
//     "emp_fname" : "John",
//     "emp_dept" : "CEO",
//     "emp_band" : "C8",
//     "emp_specs" : [ 
//         "Global Delivery Leader"
//     ],
//     "address" : [ 
//         {
//             "house_no" : 445.0,
//             "flat_no" : 35.0
//         }, 
//         {
//             "house_no" : 23.0,
//             "flat_no" : 32.0
//         }
//     ]
// },


// {
//     "_id" : 2.0,
//     "emp_fname" : "Charlotte",
//     "emp_dept" : "Finance",
//     "emp_band" : "C0",
//     "emp_specs" : [ 
//         "Accounting"
//     ],
//     "father_info" : {
//         "name" : "Chochlatey"
//     },
//     "test" : "xyz",
//     "address" : [ 
//         {
//             "house_no" : 155.0,
//             "flat_no" : 35.0
//         }, 
//         {
//             "house_no" : 133.0,
//             "flat_no" : 32.0
//         }
//     ]
// }])