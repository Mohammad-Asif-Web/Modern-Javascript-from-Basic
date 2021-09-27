const nodeList = document.querySelectorAll(".box-content");
console.log(nodeList);

// nodeList is a object type
const type = typeof nodeList;
console.log(type);

// converting from nodelist to array in traditional way-- this one is Array, now we can use it as array property.
const nodeToArr = Array.prototype.slice.call(nodeList);
console.log(nodeToArr); 

for(let i = 0; i<nodeToArr.length; i++){
    if(nodeToArr[i] === 3) break;
    console.log('number printed: ' + nodeToArr[i]);
}

//  But very easily we can complete this solution by ES6. 
const nodeToArr6 = Array.from(nodeList);
console.dir(nodeToArr6);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//now we want to do a operation till 5. we want to break it. 
//  In es5 loop
for(var i = 0; i>numbers.length; i++){
    if(numbers[i] === 5) break;
    console.log('Number Printed: ' + numbers[i]);
};











