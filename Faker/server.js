const mysql = require('mysql');
const faker = require('faker');
const express = require('express');
const app = express();
app.use(express.json)

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'dummy_data',
    user: 'Grafana',
    password: 'grafanauseR1!'
});

connection.connect(function (err) {
    if(err){
        console.log("error occurred while connecting");
    }
    else{
        console.log("connection created with Mysql successfully");
    }
 });

let FirstName
let LastName 
let JobTitle
let ID

function getRandomError(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}
const errors = ['Successfully verified', 'Database is not available', 'Reserved', 'Reserved', 'Reserved', 'Wrong input parameters', 'Not enough Fingers', 'Input data corrupt', 'Input data invalid', 'BVN Expired', 'BVN does not exist', 'BVN Watchlisted', 'Operation Timeout'];
const result = getRandomError(errors);
console.log(result);

// let x = () => {for(let i=0; i<50; i++){
//     const firstName = faker.name.firstName()
//     const lastName = faker.name.lastName()
//     const jobTitle = faker.name.jobTitle()}}
//     // (console.log(firstName, lastName, jobTitle))
function generate () {for(let i=0; i<50; i++){
     ID = i++;
     FirstName = faker.name.firstName();
     LastName = faker.name.lastName();
     JobTitle = faker.name.jobTitle();

 let sql = "INSERT INTO dummy_grafana_table VALUES ?";
 let values=[[ID, FirstName, LastName, JobTitle]]



connection.query(sql,[values],(err,result)=>{
            if(err){
            console.log(err)
            } else {
            console.log('PUSHED! '+result)
            }
});
}}

setInterval(generate, 1500)

// app.post('/post',(req,res)=>{
//     const FirstName = faker.name.firstName();
//     const LastName = faker.name.lastName();
//     const JobTitle = faker.name.jobTitle();

//     customer = 


        
//         // connection.query("insert into dummy_grafana_table() VALUES(?,?,?)",[firstName,lastName,jobTitle],(err,result)=>{
//         //     if(err){
//         //         console.log(err)
//         //     } else {
//         //         console.log('PUSHED!')
//         //     }
//         // });

//     connection.query("INSERT INTO dummy_grafana_table VALUES(?,?,?)",[FirstName,LastName,JobTitle],(err,result)=>{
//         if(err){
//             console.log(err)
//         } else {
//             console.log('PUSHED! '+result)
//         }
//     });
// })

// fetch('http://localhost:4400/post', {
//     method: 'POST',
//     headers: {
//         // Accept: 'application/json',
//         // 'Content-Type': 'application/json',
//     },
//     body: {FirstName, LastName, JobTitle},
//     })

// app.listen(4400,(err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log('on port')
//     }
// })