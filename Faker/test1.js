const faker = require('faker');

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
    console.log(bc)
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
    console.log(r)
    console.log(+r)
    function referenceCode() {
        // bankCode.toString()
        console.log("bankCode:" + typeof(bc))
        console.log(bc)
        console.log("year:" + typeof(y))
        console.log(y)
        console.log("month:" + typeof(month))
        console.log(month)
        console.log("date:" + typeof(date))
        console.log(date)
        console.log("hours:" + typeof(h))
        console.log(h)
        console.log("minutes:" + typeof(m))
        console.log(m)
        console.log("seconds:" + typeof(s))
        console.log(s)
        console.log("rand:" + typeof(r))
        console.log(r)
        var b = bc.concat(y,month,date,h,m,s,r);
        var c = BigInt(b)
        console.log("b:" + typeof(b))
        console.log("c:" + typeof(c))
        console.log(b)
        // console.log(+b)
        console.log("c:" + c)
        return c;
    }
    const referenceNum = referenceCode()
    // console.log(referenceNum)