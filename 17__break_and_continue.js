document.write("<h1>Tutorial no. 17 -- break and continue </h1>");


var i = 0;

for(i; i<100; i++){

    if(i == 10){
        break;  //this condition is matched, that's why the loop is breaked.
    }
    document.write("<br>" + i);

}
document.write("<br><br>");

document.write("Continue statement")
document.write("<br><br>");
var j = 0;

for(j; j<100; j++){

    if(j == 10){
        continue  //this loop doesn't print 10, cz this is condition is matched with 10, and after the loop is continued till 100;
    }
    document.write(" " + j);

}

document.write("<br><br>");

document.write("the odd number by continue statement. this number is divisible by 2.");
document.write("<br>");

var k = 0;

for(k; k<100; k++){

    if(k % 2 == 0){
        continue;
    }
    document.write(" " + k);

}

document.write("<br><br>");

document.write("the even number by continue statement. this number is divisible by 2.");
document.write("<br>");

var m = 0;

for(m; m<100; m++){

    if(m % 2 !== 0){
        continue;
    }
    document.write(" " + m);

}

















