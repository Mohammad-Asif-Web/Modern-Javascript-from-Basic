class newClass{
    constructor(name, age, place){
        this.name = name,
        this.age = age,
        this.place = place
        console.log(`your name is ${name} and you are ${age} years old`)
    }
}
const obj = new newClass('asif', 27, "bangladesh");
console.log(obj.name);
console.log(obj.age);
//  Creating new function inside Class
newClass.prototype.currentAge = function(dob){
    console.log(`you born in ${dob - this.age}`);
}
const objResult = obj.currentAge(2021);
console.log(newClass.prototype);
//  Creating another new function inside Class
newClass.prototype.address = function(){
    console.log(`${this.name} live in ${this.place}`);
}
obj.address();







