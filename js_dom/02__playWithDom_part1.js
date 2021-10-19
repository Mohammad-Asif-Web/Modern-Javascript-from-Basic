        //  DOM MANIPULATION
        //  Properties & Methods

// parentElement 
// Children
// classList
// getAtrribute()
// innerText
// innerHTML
// nextSibling
// previousSibling
// setAttribute()
// style
// textColor


                        //createElement()
const newElement = document.createElement('li');
// now we can see, which methods and properties we can implement into this 'li'. 
console.dir(newElement);
// adding text to 'li' element
newElement.innerText = 'Item Five'
console.log(newElement);

// now selecting an Element from index.
const ul = document.querySelector('#box4 ul');
console.log(ul);

                        //append and append child
// append means add the element to last.
// appentchild takes only one element, but append takes multiple element like appent(newElement, other, another, etc);
// we will add the newElement('li') at last into box4 element.
ul.appendChild(newElement)

                        //prepend






// insertBefore()
// insertAdjacentElement()
// prepend()
// removeChild()
// remove()
// value









































//      javascript color text design
console.log('%cThis is javascript color text', "color: green");
