//  Spread Operator Syntax (...) -- 
const sum = [1, 2, 3, 4];
const func = (a, b, c, d) => a + b + c + d;
console.log(func(...sum));
console.log(sum.unshift('10'));
console.log(sum);
// It is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition.
const numStore = [10, 20, 30, 40];
const newStore = 50;
const store = [...numStore, newStore];
console.log(store);

//Rest Parameter Syntax --
// Rest parameter looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.
//Spread in function call replace apply()
function myFunc(x, y, z){
    return x + y + z;
 };
let args =  [0, 1, 2];
let result = myFunc.apply(null, args);
console.log(result);
//Now in Spread operator
let myFunc6 = (x, y, z) => x + y+ z;
console.log(myFunc6(...args));

// concat() method replace spread operator
let arr1 = [0, 1, 2, 3];
let arr2 = [4, 5, 6, 7];
const conResult = [...arr1, ...arr2];
console.log(conResult);
//Same work as unshift() method
const unshiftResult = [...arr2, ...arr1];
console.log(unshiftResult);

//  Spread in object literals
let obj1 = {
    names : 'bird',
    color : 'white'
}
let obj2 = {
    names : 'animal',
    color : 'yellow'
}
const cloneObj = {...obj1,...obj2};
console.log(cloneObj);












