const data = require("./simpleText.json");
const stData = require("./students.json");
console.log(data);

// data access from json
// simpleText file
const dataOne = data.friends[0].name
console.log(dataOne);
const dataTwo = data.friends[1].age
console.log(dataTwo);
// student file
const stdOne = stData.student[0].languages
const stdTwo = stData.student[0].friends[0].name
console.log(`languages = ${stdOne}`);
console.log(`name : ${stdTwo}`);

// data modify from json
// const modOne = data.friends[1].name = "sergio ramos"
// console.log(modOne);
// console.log(data);

const stdNew = stData.student[1].friends[1]
console.log(stdNew);
// console.log(stData);

