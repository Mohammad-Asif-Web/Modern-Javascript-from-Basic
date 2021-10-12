//  'document' keyword is very important in DOM. Because every items are included inside this and if we select any item first we need to writh 'document' keyword.


                            //  'document.querySelector()' -- 
//In this selector, exactly we can select the element as css selects. we can do this same thing in javascript. But this method will only select the first element.
//  For ID select --
document.querySelector('#box1')
//  For CLASS select --
document.querySelector('.box');
//  For TAG select -- as this will select Wrapper
document.querySelector('div');
//  For ATTRIBUTES select --
document.querySelector('[data-atr="box3"]');
//  For Pseudo-Class select --
document.querySelector('li:first-child');


                            //  'document.querySelectorAll()' --
// we can select the multiple element by this method. from the above all method of querySelector can be apply, it will select multiple all class, all Id, all Tag, all Attribute. But it wil return the element as NodeList.


                            //  1. Select By ID -- 
// if we look at our html document, every boxes are selected by 'id' like box1, box2, box3, box4
//  'document.getElementById() -- specially, this is used for select only ID, as there is written Id. remember, here don't need to include #(hash) symbol because it is Id selector.
let box2 = document.getElementById('box2');
// box2.innerHTML='this is box2';


                         //  2. Select by Class- --
//  we have a common class in all box. this selector only select the first element between all of the elements. It's react like Array, but its not Array. It's returns 'HTML Collection'. So we can convert it to Array.
var boxClass = document.getElementsByClassName('box');
var boxList = Array.from(boxClass); // the Array converted. now we can access this by index number and can be used by loop


                        //  3. Select by TagName
//  Our document have 'div h4 p ul' tag. we can select this tag by this mehtod
document.getElementsByTagName('h4').innerHTML="asif"


                        //  Select by Children
//  We can select the child elements by his parent element. now we will select the  h4 and p child element from the box3.
var parentElement = document.querySelector('#box3');
console.dir(parentElement);
//now we will see in the console there is property called 'children' between this "div". we can access this property by this method --
console.dir(parentElement.children);
//So there is a prototype called 'HTMLCollection' which look likes Array but not Array.
//here also we can select childNodes
console.dir(parentElement.childNodes);  //But this is a NodeList


                        //  Select by Parent
//  At the same way, we can select the parent element from the child element. there is a class name 'box3-paragraph' in box3. now we can select the parent element from this.
//Fist we have to select our actual paragraph
var box3p = document.querySelector('.box3-paragraph');
console.dir(box3p);
var box3Parent = box3p.parentNode;
console.log(box3Parent);    //From here we can see the ID, Class and attribute of parent div


                        //  Select Child from Parent
//  here we will select h4 tag in box3 div
// to select for only one element
var box3h = document.querySelector('#box3 h4')
console.log(box3h);
//  to select multiple elements
var box34 = document.querySelectorAll('#box3 h4, #box4 li');
console.log(box34); //it will return as nodelist. we can convert it to array and used as method


                        // Exclude Select/বাদ দিয়ে সিলেক্ট
//  if we want to select all div by excluding only on div, we can do --
var exclude = document.querySelectorAll('.box:not(#box3)');
console.log(exclude);



