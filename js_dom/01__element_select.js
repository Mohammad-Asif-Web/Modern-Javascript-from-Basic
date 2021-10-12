//  'document' keyword is very important in DOM. Because every items are included inside this and if we select any item first we need to writh 'document' keyword.


                            //  'document.querySelector()' -- 
//In this selector, exactly we can select the element as css selects. we can do this same thing in javascript. But this method will only select the first element.
//  For ID select --
document.querySelector('#box1').innerHTML="asif"
//  For CLASS select --
document.querySelector('.box').innerHTML = "Hussain"
//  For TAG select -- as this will select Wrapper
document.querySelector('div');
//  For ATTRIBUTES select --
document.querySelector('[data-atr="box3"]');


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
//






















