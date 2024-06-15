const faker = require('faker');
// function getRandomDevice(arr) {
//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     console.log(randomIndex);
//     // get random item
//     const item = arr[randomIndex];
//     console.log(item);
//     return item;
// }
// const devices = [[0,'None'], [1,'ATM'], [2,'Web'], [3,'POS'], [4,'Kiosk'], [5,'Phone'], [6,'Camera Device'], [7,'Reserved']];
// const dev = getRandomDevice(devices);
// const device = dev[0];
// const deviceName = dev[1];
// console.log(dev)
// console.log(device);
// console.log(deviceName);

// function getRandomBank(arr) {
//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     // get random item
//     const item = arr[randomIndex];
//     return item;
// }
// const banks = [[00023,'CITIBANK'], [00076,'SKYE BANK'], [00070,'FIDELITY BANK'], [00044,'ACCESS BANK'], [00030,'HERITAGE BANK'], [00058,'GTBANK'], [00215,'UNITY BANK'], [00301,'JAIZ BANK'], [00011,'FIRST BANK'], [00033,'UBA BANK'], [00032,'UNION BANK'], [00221,'STANBIC IBTC'], [00232,'STERLING BANK'], [00068,'STANDARD CHARTERED'], [00050,'ECOBANK'], [00214,'FCMB'], [00082,'KEYSTONE BANK'], [00501,'FSDH'], [00057,'ZENITH BANK'], [00035,'WEMA BANK'], [00101,'PROVIDUS BANK'], [00001,'CBN'], [00100,'SUNTRUST BANK'], [00502,'RAND'], [00560, 'FBN Merchant']];
// const bank = getRandomBank(banks);
// const bankCode = bank[0];
// const bankName = bank[1];
// console.log(bank);
// console.log(bankCode);
// console.log(bankName);

// const rand = faker.datatype.number({ min: 1000, max: 9999})
// console.log(rand)

// function getRandomIndicesSel(arr) {
//     // get random index value
//     const randomIndicesSel = Math.floor(Math.random() * 49);
//     // get random item
//     const indices = arr[randomIndicesSel];
//     return indices;
// }
// const indicesList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// const p = getRandomIndicesSel(indicesList);
// console.log(p)

// function addMinutes(date, minutes) {
//     date.setMinutes(date.getMinutes() + minutes);
  
//     return date;
//   }
  
//   const date = new Date('2022-05-15T00:00:00.000Z');
//   console.log(date)
  
//   const newDate = addMinutes(date, 10);
  
//   // 2022-05-15T00:10:00.000Z
//   console.log(newDate);

//   function addSeconds(date, seconds) {
//     date.setSeconds(date.getSeconds() + seconds);
  
//     return date;
//   }

//   function getRandomSecond(arr) {
//     // get random index value
//     const randomSecondsSel = Math.floor(Math.random() * 49);
//     // get random item
//     const seconds = arr[randomSecondsSel];
//     return seconds;
// }
// const secondsList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// const q = getRandomSecond(secondsList);
// console.log(q)
  
//   const date = new Date();
//   console.log(date)
  
//   const newTime = addSeconds(date, q);
  
//   // 2022-05-15T00:10:00.000Z
//   console.log(newTime);

// function addSeconds(sdate, seconds) {
//     sdate.setSeconds(sdate.getSeconds() + seconds);
  
//     return sdate;
//   }

//   function getRandomSecond(arr) {
//     // get random index value
//     const randomSecondsSel = Math.floor(Math.random() * 49);
//     // get random item
//     const seconds = arr[randomSecondsSel];
//     return seconds;
// }
// const secondsList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// const q = getRandomSecond(secondsList);
// console.log(q)
  
//   const sdate = new Date();
//   console.log(sdate)
  
//   const newTime = addSeconds(sdate, q);
  
//   // 2022-05-15T00:10:00.000Z
//   console.log(newTime);

// function getRandomIndicesSel(arr) {
//   // get random index value
//   const randomIndicesSel = Math.floor(Math.random() * 16);
//   console.log("randomIndicesSel: " + randomIndicesSel)
//   // get random item
//   const indices = arr[randomIndicesSel];
//   console.log("indices: " + indices)
//   return indices;
// }
// // const indicesList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// const indicesList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

// const p = getRandomIndicesSel(indicesList);
// console.log("p:" + p)

function generate () {
  
  function getRandomIndicesSel(arr) {
    // get random index value
    const randomIndicesSel = Math.floor(Math.random() * 16);
    console.log("randomIndicesSel: " + randomIndicesSel)
    // get random item
    const indices = arr[randomIndicesSel];
    console.log("indices: " + indices)
    return indices;
  }
  // const indicesList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
  const indicesList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  
  const p = getRandomIndicesSel(indicesList);
  console.log("p:" + p)

  for(let i=p; i<20; i++){
function getRandomBank(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(randomIndex)
    // get random item
    const item = arr[randomIndex];
    console.log(item + "item")
    return item;
    
}
const banks = [[23,'CITIBANK'], [76,'SKYE BANK'], [70,'FIDELITY BANK'], [44,'ACCESS BANK'], [30,'HERITAGE BANK'], [57,'GTBANK'], [215,'UNITY BANK'], [301,'JAIZ BANK'], [11,'FIRST BANK'], [33,'UBA BANK'], [32,'UNION BANK'], [221,'STANBIC IBTC'], [232,'STERLING BANK'], [67,'STANDARD CHARTERED'], [50,'ECOBANK'], [214,'FCMB'], [72,'KEYSTONE BANK'], [501,'FSDH'], [57,'ZENITH BANK'], [35,'WEMA BANK'], [101,'PROVIDUS BANK'], [1,'CBN'], [100,'SUNTRUST BANK'], [502,'RAND'], [560, 'FBN Merchant']];
const bank = getRandomBank(banks);
const bankCode = bank[0];
const bankName = bank[1];
console.log(bankCode)
console.log(bankName)
console.log(bank)
}}
setInterval(generate, 3000)


// function getRandomIndicesSel(arr) {
//   // get random index value
//   const randomIndicesSel = Math.floor(Math.random() * 49);
//   // get random item
//   const indices = arr[randomIndicesSel];
//   return indices;
// }
// const indicesList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// const p = getRandomIndicesSel(indicesList);

// function generate () {for(let i=p; i<200; i++){
//   function getRandomBank(arr) {
//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     // get random item
//     const item = arr[randomIndex];
//     return item;
    
// }
// const banks = [[23,'CITIBANK'], [76,'SKYE BANK'], [70,'FIDELITY BANK'], [44,'ACCESS BANK'], [30,'HERITAGE BANK'], [57,'GTBANK'], [215,'UNITY BANK'], [301,'JAIZ BANK'], [11,'FIRST BANK'], [33,'UBA BANK'], [32,'UNION BANK'], [221,'STANBIC IBTC'], [232,'STERLING BANK'], [67,'STANDARD CHARTERED'], [50,'ECOBANK'], [214,'FCMB'], [72,'KEYSTONE BANK'], [501,'FSDH'], [57,'ZENITH BANK'], [35,'WEMA BANK'], [101,'PROVIDUS BANK'], [1,'CBN'], [100,'SUNTRUST BANK'], [502,'RAND'], [560, 'FBN Merchant']];
// const bank = getRandomBank(banks);
// const bankCode = bank[0];
// const bankName = bank[1];
// console.log(bankCode)
// console.log(bankName)
// console.log(bank)
// }}

// setInterval(generate, 30000)

// const rand = faker.datatype.number({ min: 1000, max: 9999})
// function referenceCode() {
//   const rand = faker.datatype.number({ min: 1000, max: 9999})
//     var b = rand+"1122"
//     var c = +b
//     console.log(typeof(c))
//     console.log(c)
//     return c;
// }
// setInterval(referenceCode, 3000)

// // console.log(c)