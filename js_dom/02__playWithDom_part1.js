console.log('%cPlay with JS DOM', 'color: green');
                //  DOM MANIPULATION Properties & Methods


        // getAtrribute(), setAttribute(), removeAttribute()
const boxOne = document.querySelector('#box1');
const boxOneId = boxOne.getAttribute('id');
console.log(boxOneId);
const boxOneAttr = boxOne.getAttribute('data-extra');
console.log(boxOneAttr);

// setAttribute()
boxOne.setAttribute('class', 'oldClass'); //but this will change the default class. It replace the class old to new.
boxOne.setAttribute('class', boxOne.getAttribute('class') + ' something') //this method will add extra class to element without change

//removeAttribute()
boxOne.removeAttribute('data-atr');


                // href, src
const a = document.querySelector('#box1 a');
console.log(a.href);
//now we can change this url name by different way
a.href = 'https://asianpolyglotview.com/wp-content/uploads/2021/02/Green-solution.jpg';
a.innerText = 'this is nature photo'
// src
const imgTag = document.querySelector('#box1 img');
console.log(imgTag.src);
imgTag.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyYHXxnuJNcT6ztSHMJqRJEBY9JZ9hP09rMAokzeR1gFAl7LTE4WpxQ_LmPasLvbaW-A&usqp=CAU';
console.log(imgTag.src); // changed the image source


                // parentElement, Children
// easily we can find the parent element from an element.
const box4li = document.querySelector('#box4 ul li');
const liParent = box4li.parentElement;
console.log(liParent); // console displays the 'ul'
const ulParent = liParent.parentElement;
console.log(ulParent); //console display the parent div
const divParent = ulParent.parentElement;
console.log(divParent); //console displays the boxes div
const boxesParent = divParent.parentElement
console.log(boxesParent); // console displays the wrapper div
const wrapperParent = boxesParent.parentElement;
console.log(wrapperParent); // console displays the body
const bodyParent = wrapperParent.parentElement;
console.log(bodyParent); // console displays the main html. this way we can easily find out a parent element from any elements.

// Children -- In this method we can find out the children element from a parent element. we can start from 'boxesParent' which is the 'wrapper' of the div.
console.log( boxesParent);
const boxes = boxesParent.children;
console.log(boxes[0]);
const box3Child = boxes[0].children[2];
console.log(box3Child);




// innerText -- overrides the text. the entire text will be change by this method.
//innerHTML,  -- overrides the only html tags. it create new html tag like p, img, h1, span and also changes the text
//textContent  -- it changes the all content of an element.

// classList -- this method add a new class to the element, remove the class from element and used as toggle class
// nextSibling, previousSibling -- sibling means same element like al 'li' elements are siblings for 'li' to 'li'. It can select next and previous elements.
// add(), remove()

// style -- style the html contents, tags
//value -- used as value



                        //createElement()
// this method creates a new HTML element like 'div, li, a, img, p, h1-h6 and every types of HTML elements'.
const newElement = document.createElement('li');
// now we can see, which methods and properties we can implement into this 'li'. 
console.dir(newElement);
// adding text to 'li' element
newElement.innerText = 'Item Four'
console.log(newElement);

// now selecting an Element from index.
const ul = document.querySelector('#box4 ul');
console.log(ul);


                        //append and append child
// append means add the element to last.
// appentchild takes only one element, but append takes multiple element like appent(newElement, other, another, etc);
// we will add the newElement('li') at last into box4 element.
ul.appendChild(newElement)


                        //prepend()
// prepend means add the elements at the first side. this takes multiple and single element.
const div3 = document.querySelector('#box3');

const p = document.createElement('p');
p.innerText = 'this is para of box 3'
div3.prepend(p);


                        // insertBefore()
//we can insert an element to a specific place by this method.
//Selecting the all list items
const lists = document.querySelectorAll('li');
//Crealing new 'li' element for box4
const li3 = document.createElement('li');
li3.innerText = 'this is li item 3 into box4'
// Before we have already selected 'ul' element, and 'ul' is parent element of all 'li' element. now we can implement by ul.
ul.insertBefore(li3, lists[2]);
console.log(ul);


const body = document.body
const wrapper = document.querySelector('.wrapper');
const img = document.createElement('img');
img.src = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg';

body.insertBefore(img, wrapper);
let imgStyle = {
        textAlign: 'center',
        width: '500px',
        height: '200px',
}
let bodyStyle = {
        textAlign: 'center'
}

Object.assign(img.style, imgStyle);
Object.assign(body.style, bodyStyle)


                        // insertAdjacentElement()
// it has four positions -- beforebegin, afterbegin, beforeend, afterend
const newBox = document.createElement('div');
newBox.classList.add('box');
const newBoxh1 = document.createElement('h1');
newBoxh1.innerText = 'this is newBox heading';
newBox.append(newBoxh1);
let boxStyle = {
        background: 'blue',
        textAlign: 'center'
}
Object.assign(newBox.style, boxStyle);
const box1 = document.querySelector('#box1');
box1.insertAdjacentElement('beforebegin', newBox)

const newBoxP = document.createElement('p');
newBoxP.innerText = "this is simple dummy text"

newBoxh1.insertAdjacentElement('afterend', newBoxP)


                        // removeChild()
                        // remove()
//removeChild() and remove() mehtods used to delete the specific element. uncomment the element below
// newBoxP.remove();
// const box3P = document.querySelector('#box3 p');
// box3P.remove();