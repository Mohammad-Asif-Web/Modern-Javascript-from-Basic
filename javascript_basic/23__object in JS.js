document.write("<h1>Tutorial no. 23 -- Javascript Objects</h1>");

//  object declaration method no. 1. this method is not easy and used.
document.write("object declaration method no. 1. this method is not easy and used.<br>")
var rahim = new Object();
    rahim.fullName = "md rahim ",
    rahim.age = 29,
    rahim.address = " dhaka"

console.log(rahim); //go to console to see this output
document.write(rahim.fullName + rahim.age + rahim.address);
document.write("<br><br>");
//object declaration method no. 2. This method is easy and used.
document.write("object declaration method no. 2. This method is easy and used very much<br>")
var asif = {
    fullName: "muhammad asif",
    age: 26,
    place: "sutrapur",
    job: "web developer"
}
console.log(asif);
document.write("name: " + asif.fullName + "<br>Age: " + asif.age + "<br> address: " + asif.place + "<br> job: " + asif.job)
document.write("<br><br>");

// How to access the object
document.write("how to access the object");
document.write("<ul><li> dot notation</li></ul>")
document.write("just use this <br><code> asif.fullName</code><br>then the code will execute")
document.write("<ul><li> bracket notation</li></ul>");
document.write("Write <br><code> asif['fullname']</code><br>then the code will execute<br><br>");

//  Add new item inside object
document.write("Add new item inside object<br>");
asif.zipcode = 1200
document.write("name: " + asif.fullName + "<br>Age: " + asif.age + "<br> address: " + asif.place + "<br> job: " + asif.job + "<br> zipcode: " + asif.zipcode);
document.write("<br><br>");
// console.log(asif);

// Changing an existing item in object
document.write("Change an existing item in object<br>");
asif.place = "R, M, Das, Road, Sutrapur"
console.log(asif);
document.write("<br>");

//  Save function in object
document.write("Save function in object<br>")
asif.msg = function(){
    document.write("Hello, asif")
}
asif.msg();

asif.myvar = function(a, b){
    var result = a + b;
    return result
}

console.log(asif.myvar(5, 5));
document.write("<br><br>");

//  Creating array inside object
document.write("Creating array inside object<br>")
var student = {
    name: "asif",
    subject: ["English", "physics", "math"],
    roll: 1540,
    course: ["computer", "electronics", "civil"]
}
document.write(student.subject[1]);
document.write("<br>");
document.write(student.course[0])
document.write("<br><br>");

//  creating object inside arrayy
document.write("creating object inside arrayy<br>")

var arrObj = ['Zonayed', 
    {name: 'Rafiq', 
    age: 21, 
    job: 'Student'
    }, 
    'Bangladesh'];
console.log(arrObj);
console.log(arrObj[1]);

































