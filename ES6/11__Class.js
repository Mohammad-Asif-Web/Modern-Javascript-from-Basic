//  class declarations--- The Class has two components - class declarations and class expressions like function
//  class Hoising -- An important difference between function declarations and class declarations is functions are hoisted and class are not. You first need to declare you class.

//  class expression
let rectangle = class{
    constructor(width, height){
        this.width = width;
        this.height = height;
        
    }
    react = function(){
        return `The Rectangle Area is ${this.width * this.height}`
    }
};
const area = new rectangle(20, 30);
console.log(area.react());

//  Prototype methods -- getter and setter
class square{
    constructor(width, height, place){
        this.width = width;
        this.height = height;
        this.place = place;
    }
    //Getter
    get area(){
        return this.calcArea();
    }
    //Method
    calcArea(){
        return this.width * this.height;
    }
    //Setting setter method
    set placeName(place){
        this.place = place;
    }
}
//  getter output
const squareResult = new square(20, 20);
console.log(squareResult.area);
//  setter output has been set to dhaka -- inside the class, we can set a value from outside with this method.
squareResult.placeName = 'Dhaka'
console.log(squareResult.place);


//  Static methods and properties
const Point = class{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static displayName = 'this is  point';
    static distance(a, b) {
        let num1 = a + b;
        let num2 = a * b;
        let numResult = num1 + num2;
        return numResult;
    }
}
//   this will displayed undefined, because static method doesn't called by new variable.
let pointResult = new Point(5, 5);
console.log(pointResult.displayName);
console.log(pointResult.distance);
//  to see the output of static method, here don't need to assign static value to a new variable, directly we can call the static method by class name.
console.log(Point.displayName);
console.log(Point.distance(5, 5));


//  class declaration
class newClass{
    constructor(name, age, place){
        this.name = name;
        this.age = age;
        this.place = place;
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
//  Class prototype function method
console.log(newClass.prototype);
//  Creating another new function inside Class
newClass.prototype.address = function(){
    console.log(`${this.name} live in ${this.place}`);
}
obj.address();


//  es5 Inheritance conversation by es6 'extends' and 'super()' methods
//  Teacher as a parent Class
class Teacher{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}
//  Calling Teacher class by 'extends' and super() Method
//  Student as a child Class
class Student extends Teacher{
    constructor(name, age, job, color){
        super(name, age);
        this.job = job;
        this.color = color;
    }
}
const teacher = new Teacher('Runa mam', 40);
console.log(teacher.name);
console.log(teacher.age);
Teacher.prototype.eat = function(){
    return `${this.name} likes Mango`
}
console.log(teacher.eat());
//  this will return undefined, cz Teacher is parent Class, Student is child Class and only parent class can be inherited from child class. so the parent class value will displayed undefined into child class.
console.log(teacher.job);
console.log(teacher.color);


const student = new Student('Muhammad', 24, 'web', 'green');
console.log(student.name);
console.log(student.age);
Student.prototype.play = function(){
    console.log(`${this.name} likes to play Football`);
}
console.log(student.play());
console.log(student.job);
console.log(student.color);





















