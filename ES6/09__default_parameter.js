// Syntax --- function fnName(param1 = defaultValue1, ..., paramN = defaultValueN) { ... }

//  In ES5 -- default parameter used as a ternary operator
function defaultParam(name, age){
    name ? name = name : name ="asif";
    age ? age = age : age = "25"
    console.log('My name is ' + name + ", I'm " + age + 'years old');
};
defaultParam()  //If we call this function without arguments, it will displayed a default value which is set to function parameter in ternary operator
// defaultParam("muhammad", 22);   //But if we call the function with arguments it will displayed the arguments value in function.

//  Now if we do this same this in ES6
const defaultParam6 = (names = "asif hussain", age = 22) =>{
    console.log(`my name is ${names} and I'm ${age} years old`);
};
// defaultParam6(); // Calling without arguments
defaultParam6('Muhammad asif', 27); //calling with arguments


//  default parameter with function constructor
//  In ES5
function func5(name, age){
    name ? name = name : name = "asif Khan";
    age ? age = age : age = 18;
    this.name = name;
    this.age = age;
}
var obj = new func5();
console.log(obj.name);
console.log(obj.age);
//with arguments
var obj2 = new func5("muhammad asif", 23);
console.log(obj2.name);
console.log(obj2.age);

//  Now if we do the same thing ES6
function func6(name = 'asif', age = 21){
    this.name = name;
    this.age = age;
}
var obj2 = new func6();
console.log(obj2.name);

// undefined value default parameter
function f(x = 1, y){
    return [x, y];
}
console.log(f());
console.log(f(2));

//  default with push method
var append = function(value, array = []){
    array.push(value);
    return array;
};
let arr = [0, 1, 2, 3, 4];
console.log(append(2));
console.log(append(arr));
console.log(append(3));




















