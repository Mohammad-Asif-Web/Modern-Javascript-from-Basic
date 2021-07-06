document.write("<h1>Task no. 6 -- Write a program that will print sum of all the number that are divisible by 3 and 5 from 1-100</h1>");


var i = 1;
var sum = 0;

while(i<=100){

    if(i%3 == 0 && i%5 == 0){
        document.write("<br>" + i);
        sum = sum + i;
    }
    i= i + 1;

}
document.write("<br>")
document.write("The total number is: " + sum);



















