//  In ES5--- here we can't use other array methods like forEach, map, filter, reduce
function arguments5(){
    for(var i = 1; i < arguments.length; i++){
        console.log('arguments passed: ' + arguments[i]);
    }
};
arguments5('bangladesh', 'pakistan', 'turkey');
//  In ES6--- here we can use any arguments as we wish
function arguments6(...anyName){
    for(var i = 0; i<anyName.length; i++){
        console.log("Arguments passed: " + anyName[i]);
    }
}
arguments6("Saudi arabia", "palestine", "egypt");
arguments6("cricket", "football", "kabadi");
//  Rest parameter also words on arrow function ---
const args = (...any) =>{
    for(let i = 0; i<any.length; i++){
        console.log(`args passed : ${any[i]}`);
    }
}
args("I love Bangladesh", "myself asif")
//  Even we can use here Array Methods like -- forEach, map, filter, reduce
const argMap = (...x) => {
   return x.map(args => `arguments passed : ${args}`);
}

console.log(argMap("bangladesh"));
//  reduce method
const argReduce = (...x) => {
    return x.reduce((prev, curr) => {
        return prev + curr
    })
}
console.log(argReduce(1, 2, 3, 4));

// rest parameter uses for extra define and undefined parameters
const rest = (names, age, ...others) =>{
    console.log(`your name is ${names} and you are ${age} years old`);
    others.map(x => console.log(`Argument passed : ${x}`))
};
rest('asif', 25, "web developer", "UI/UX Designer");














