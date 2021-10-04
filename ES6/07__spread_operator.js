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


















