document.write("<h1>Tutorial No. 28 -- Closures explained in Javascript</h1>");

//Closures is by default behavior of javascript. 

function closuresDemo(x){
    // var x = 10;
    return function(y){
        // var y = 20;
        return function(z){
            // var z = 20;
            console.log("sum: " + (x + y + z));
        }
    }
}

// closuresDemo()()(); //Here uses three brackets. first bracket calls closuresDemo function. Second bracket calls second child function and third bracket calls third child function. Directly we can set a name to child functions but its not need here.

var aVar = closuresDemo(10);  //  storing functions to variable
var child = aVar(20);
var total = child(20)
console.log(total); //this wil show the same result.

//we can see the result by passing the arguments from parent to child
function aParentFunc(a){
    return function(b){
        console.log("sum: " + (a * b));
    }
}
// aParentFunc(10)(5);

//If you don't want to use double brackets. then first call parent function and store it to a variable. after that, to this variable call child function.
var aParentVar = aParentFunc(10);
var totalSum = aParentVar(5);
console.log(totalSum);















