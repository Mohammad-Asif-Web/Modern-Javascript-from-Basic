document.write("<h1>Task no. 3--  Student Letter Grading Program</h1>");



var marks = parseInt(prompt("Enter your subject Marks: "));

if(marks<100 && marks>=90){
    document.write("Your Marks is " + marks + " and you got A+ Grade");
}
else if(marks<90 && marks>=80){
    document.write("Your Marks is " + marks + " and you got A Grade");
}
else if(marks<80 && marks>=70){
    document.write("Your Marks is " + marks + " and you got A- Grade");
}
else if(marks<70 && marks>=60){
    document.write("Your Marks is " + marks + " and you got B+ Grade");
}
else if(marks<60 && marks>=50){
    document.write("Your Marks is " + marks + " and you got B Grade");
}
else if(marks<50 && marks>=40){
    document.write("Your Marks is " + marks + " and you got C Grade");
}
else if(marks<40 && marks>=33){
    document.write("Your Marks is " + marks + " and you got D Grade");
}
else {
    document.write("Your Marks is " + marks + " and You are Fail");
}

