document.write("<h1>Tutorial no. 21 -- Loop in Array</h1>");

//  loop method no. 1
var arrName = ["Asif", "Sakib", "rehan", "ratul", "rizvi"];

for(var i = 0; i < arrName.length; i++){
    document.write("<br>Name: " + arrName[i]);
}

// loop method no. 2
//sum of total value by loop
document.write("<br><br>sum of total value by loop")
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
var sum = 0;
for(var i = 0; i < 9; i++ ){
    document.write(num[i]);
    sum = sum + num[i];
}
document.write("<br>the total sum is: " + sum);

// loop method no. 3
document.write("<br><br>Sum of integer inputs by get inputs from user")
//  taking integer inputs from user and sum of this inputs.
var num = new Array();
for(var i = 0; i < 5; i++){
    num[i] = parseFloat(prompt("Enter number: "))
}

var sum = 0;
for(i = 0; i < 5; i++){
    document.write(num[i]);
    sum = sum + num[i];
}

document.write("<br>the total number is: " + sum);

//Taking input names from users
document.write("<br><br>Taking input names from users")
var num = new Array();
for(var i = 0; i < 5; i++){
    num[i] = prompt("Enter Names: ");
    
}

for(i = 0; i < 5; i++){
    document.write("<br>Names: " + num[i]);
}

















