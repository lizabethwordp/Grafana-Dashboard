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

// function getRandomIndicesSel(arr) {
//     // get random index value
//     const randomIndicesSel = Math.floor(Math.random() * 49);
//     // get random item
//     const indices = arr[randomIndicesSel];
//     return indices;
// }
// const indicesList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// const p = getRandomIndicesSel(indicesList);

function generate () {
    function getRandomIndicesSel(arr) {
        // get random index value
        const randomIndicesSel = Math.floor(Math.random() * 49);
        // get random item
        const indices = arr[randomIndicesSel];
        return indices;
    }
    const indicesList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    const p = getRandomIndicesSel(indicesList);
    
    for(let i=p; i<200; i++){
    //  ID = ;
    //  FirstName = faker.name.firstName();
    //  LastName = faker.name.lastName();
    //  JobTitle = faker.name.jobTitle();

     function getRandomResponse(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
        // get random item
        const item = arr[randomIndex];
        return item;
    }
    const responses = [[00,'Successfully verified'], [01,'Database is not available'], [00,'Successfully verified'], [02,'Reserved'], [00,'Successfully verified'], [03,'Reserved'], [00,'Successfully verified'], [04,'Reserved'], [00,'Successfully verified'], [05,'Wrong input parameters'], [00,'Successfully verified'], [06,'Not enough Fingers'], [00,'Successfully verified'], [07,'Input data corrupt'], [00,'Successfully verified'], [08,'Input data invalid'], [00,'Successfully verified'], [09,'BVN Expired'], [00,'Successfully verified'], [10,'BVN does not exist'], [00,'Successfully verified'], [11,'BVN Watchlisted'], [00,'Successfully verified'], [12,'Operation Timeout'], [00,'Successfully verified'], [21,'Internal server error'], [00,'Successfully verified'],];
    const res = getRandomResponse(responses);
    const responseCode = res[0];
    const response = res[1];

    function getRandomDevice(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
        // get random item
        const item = arr[randomIndex];
        return item;
    }
    const devices = [[0,'None'], [1,'ATM'], [2,'Web'], [3,'POS'], [4,'Kiosk'], [5,'Phone'], [6,'Camera Device'], [7,'Reserved']];
    const device = getRandomDevice(devices);
    const deviceCode = device[0];
    const deviceName = device[1];

    function getRandomBank(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
        // get random item
        const item = arr[randomIndex];
        return item;
        
    }
    const banks = [[23,'CITIBANK'], [76,'SKYE BANK'], [70,'FIDELITY BANK'], [44,'ACCESS BANK'], [30,'HERITAGE BANK'], [57,'GTBANK'], [215,'UNITY BANK'], [301,'JAIZ BANK'], [11,'FIRST BANK'], [33,'UBA BANK'], [32,'UNION BANK'], [221,'STANBIC IBTC'], [232,'STERLING BANK'], [67,'STANDARD CHARTERED'], [50,'ECOBANK'], [214,'FCMB'], [72,'KEYSTONE BANK'], [501,'FSDH'], [57,'ZENITH BANK'], [35,'WEMA BANK'], [101,'PROVIDUS BANK'], [1,'CBN'], [100,'SUNTRUST BANK'], [502,'RAND'], [560, 'FBN Merchant']];
    const bank = getRandomBank(banks);
    const bankCode = bank[0];
    const bc = bankCode.toString()
    const bankName = bank[1];

    const dateObject = new Date();
    const date = (`0${dateObject.getDate()}`).slice(-2);
    const month = (`0${dateObject.getMonth() + 1}`).slice(-2);
    const year = dateObject.getFullYear();
    const y = year.toString()
    const hours = dateObject.getHours();
    const h = hours.toString()
    const minutes = dateObject.getMinutes();
    const m = minutes.toString()
    const seconds = dateObject.getSeconds();
    const s = seconds.toString()
    // console.log(`${year}-${month}-${date}`);
    // console.log(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);
    // let timestamp = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    // console.log(dateObject)
    // let timestamps = year-month-date-hours:minutes:seconds;

    const rand = faker.datatype.number({ min: 1000, max: 9999})
    const r = rand.toString()
    function referenceCode() {
        var b = bc.concat(y,month,date,h,m,s,r);
        var c = BigInt(b)
        return c;
    }
    const referenceNum = referenceCode()
    // console.log(referenceNum)

    function addSeconds(sdate, seconds) {
        sdate.setSeconds(sdate.getSeconds() + seconds);
      
        return sdate;
      }
    
      function getRandomSecond(arr) {
        // get random index value
        const randomSecondsSel = Math.floor(Math.random() * 49);
        // get random item
        const seconds = arr[randomSecondsSel];
        return seconds;
    }
    const secondsList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    const q = getRandomSecond(secondsList);
    // console.log(q)
      
      const sdate = new Date();
    //   console.log(sdate)
      
      const newTime = addSeconds(sdate, q);
      
      // 2022-05-15T00:10:00.000Z
    //   console.log(newTime);

 let sql = "INSERT INTO grafdisplay VALUES ?";
 let values=[[0,referenceNum,responseCode, response, dateObject, dateObject, deviceCode, deviceName, bankCode, bankName, newTime]]



connection.query(sql,[values],(err,result)=>{
            if(err){
            console.log(err)
            } else {
            console.log('PUSHED! '+result)
            }
});
}}

setInterval(generate, 30000)

