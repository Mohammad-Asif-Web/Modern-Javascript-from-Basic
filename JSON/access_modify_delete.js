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

// delete simpleText data
const delOne = delete data.friends[0].name //name "muhammad asif" deleted
console.log(`delOne value: ${delOne}`);
console.log(data);

// delete student data
const delStd = delete stData.student[0].languages //languages deleted
console.log(`language: ${delStd}`);
console.log(stData);

// modify simpleText data
const modText = data.friends[1].name = "brendan Eich" //data changes to John Doe from brendan Eich
console.log(data);

// modify student data
const modStd = stData.student[0].cgpa = 4.84 // cgpa modified to 3.44 from 4.84
console.log(stData);
