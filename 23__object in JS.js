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
document.write("Write <br><code> asif['fullname']</code><br>then the code will execute")

















































