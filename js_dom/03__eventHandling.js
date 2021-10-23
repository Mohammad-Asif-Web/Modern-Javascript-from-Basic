                     // 1. Common DOM Event
// i. HTML Event Attribute -- If we want, we can directly access event handling in our html element as attribute. now we want to add a click event attribute to 'box 4 list item' in our document. by clicking the 'li' element we will see a alert box something is written.


// ii. HTML Function call -- we can display this alert by function call. we have to create a separate function in javascript. this function will be call by onclick.
function showAlert(){
   alert('alert by function call')
}
                  //different types of events
// a. onchange -- this event will happen when something will be changed in your element. basically, this happens in form input fields when user changes their input value.
// b. onclick -- this event will happen by clicking the elements.
// c. onmouseover -- This event will only happen if you place the empty pointer over your desired element.
// d. onmouseout -- this event will happent if you place out the pointer over your disired element.
// e. onkeydown -- this event will happent if you press any keyboard key.
// f. onload -- This event occurs when the browser finishes loading your elemen



// iii. With HTML DOM --  we will create a event in 'box1' without touching the html element.
const clickMeBtn = document.getElementById('btn-click-me');
console.dir(clickMeBtn); // if we open this from browser console, we will see many methods and properties with events with 'on' words.
clickMeBtn.onclick = function () {
   console.log('box1 button clicked'); // By clicking 'click me' this will print the letter into our console.
}

                     // 2. Event Listener
//this method is very usefull. we can add unlimited event by this method. addEventListener() this takes two parameters
// yourElement.addEventListener(typeOfEvent, handler). now we will use this event with box1.
const box1 = document.querySelector('#box1');
box1.addEventListener('click', function(){
   console.log('Clicked on Box 1');
})
// here also we can use 'load, focus, blur, submit, resize, cut, copy, keydown, keypress, keyup'


                     // 3. Event Modify
// If we click on the 'box 1' the two events will work at same time. this is by default behaviour, we can modify it.

// i. Bubble Up -- In 'box 1', if we click on 'button' this both will run and this is called Bubble Up. Our click event transfered from 'button' to 'box 1' by Bubble Up. That's why this runs the event. Now if we want, we can stop this behaviour.
clickMeBtn.onclick = function (event) {
   event.stopPropagation(); // stopPropagation() stops the Bubble Up
   console.log('box1 button clicked');
};

                  // ii. Default Behaviour -- 
// In 'box4' there is some link. By clicking this link, this will take you to desire website. This is browser Default behaviour. We can modify this behaviour by a special method called 'preventDefault()'.
const link = document.getElementById('link');
link.addEventListener('click', function(event){
   event.preventDefault();
});


                  // 4. Native DOM Event
// Basically, we create an event and this event works. But if we want we can run this event by code.
clickMeBtn.click(); // As soon as you enter this code, you will see that a click event has takn place on the button. this happened by click handler which is attached in previous. As like more events -- focus, blur, submit can be run.


                  // 5. Event Delagation
var box4 = document.getElementById('box4');
box4.addEventListener('click', function(event){
   if(event.target.tagName === 'LI'){
      console.log("List Item Clicked");
   }
});
// const ul = document.querySelector('#box4 ul');
// const li = document.createElement('li');
// li.innerText = 'this is new LI';
// ul.prepend(li);
// let liStyle = {
//    background: 'green',
//    color: '#fff',
//    border: '1px solid #fff',
//    fontSize: '1rem',
//    display: 'inline-block',
//    padding: '5px 20px'
// };
// Object.assign(li.style, liStyle)
//The pattern of capturing and handling bubble-up events in this way is basically called event delegation.


                     // 6. Form Event
const inputs = document.querySelectorAll('input');
console.log(inputs);
const submitBtn = document.querySelector('button[type="submit"]');
console.log(submitBtn);

// i. Input Field change Event -- Now this change event will happen if we type something in our first input field and click elsewhere, and at the same time we will see the desired result in the console:
inputs[0].addEventListener('change', function(){
   console.log('changed inputs');
})
// We can take the input field value from here and also we can update real time data.
inputs[0].addEventListener('change', function(event){
   console.log(event.target.value);
})
                  
// ii. Form Submit Event --   If you click on the submit button in our form, you will see that the browser has reloaded, this is the default behavior of the browser. We can easily prevent that by default behavior in the way we showed a little earlier.
submitBtn.addEventListener('click', function(event){
   event.preventDefault();
});

// For example, if I want the user to submit a form leaving the input field blank, I will show an alert.
submitBtn.addEventListener('click', function(event){
   event.preventDefault();
   if(inputs[0].value === '' || inputs[1].value === ''){
      alert('Input field can not be empty')
   } 
})
// Now if we want to do something more interesting, like if we have both fields, we want to show the data inside
submitBtn.addEventListener('click', function(event){
   event.preventDefault();
   if(inputs[0].value === '' || inputs[1].value === ''){
      alert('Input field can not be empty')
   } else{
      console.log(`Your name: ${inputs[0].value}, Your Email: ${inputs[1].value}`);
   }
})


                     // 7. Key-Board Event
//When we press a key, three kinds of events can happen.

// i. keydown Event -- The key has been pressed but the system has not yet registered. 'Keydown' is used to handle it. Now we have to apply the keyboard events on our document as it will be on top of the whole document. Everything else is the same as before
document.addEventListener('keydown', function(){
   console.log('Key Down Event is ');
})

// ii. keypress Event --This event occurs as soon as the keystroke is registered in the system. Everything else is the same as before
 document.addEventListener('keypress', function(){
    console.log('Key Press Event');
 })

 // iii. keyup Event -- This event occurs when the key is pressed
 document.addEventListener('keyup', function(){
    console.log('Key Up Event');
 })

 //For example, if we want to know exactly which key has been pressed, we can access it and show it with the help of that event parameter:
document.addEventListener('keydown', function(event){
   console.log('key Down Pressed: ' + event.key);
}) // this way, we can access other handlers

// here, we have use 'event' as handler parameter, but if we open it, we can see what methods we can access by this 'event'
document.addEventListener('keyup', function(event){
   console.dir(event);
})


                     // 8. Mouse Event
// Mouse have same special events as key board events.

// i. mouseover -- this event occurs when mouse over any element. now we can do this with box 1 button
clickMeBtn.addEventListener('mouseover', function(){
   console.log('On Mouse Over Using addEventListener');
})

// ii. mouseout -- this event occurs when we mouse out from any element. now we will add this event to same button.
clickMeBtn.addEventListener('mouseout', function(){
   console.log('On Mouse Out');
})


                  // 9. Browser Event
// i. Event after Browser Fully Loaded -- We may want that the contents of our page be shown to the user as soon as it is fully loaded, and a loader be displayed during loading. In such a situation this load event is quite useful. This event will happen as soon as everything in our document is loaded. And we will apply this event on the 'window'
window.addEventListener('load', function(){
   console.log('this is load event output');
})

// ii. only MarkUp is loaded -- sometimes we need to take an action after MarkUp is loaded. So in this situation 'DOMContentLoaded' event is quite useful. Since this is a matter of our document, I will apply the event on the document
document.addEventListener('DOMContentLoaded', function(){
   console.log('DOMContentLoaded event after Markup Ready');
})

// iii. Event after loading a certain element -- In box2 has two image valid and unvalid. first we will select those image.
var img1 = document.querySelector('img[alt=valid-img]');
var img2 = document.querySelector('img[alt=invalid-img]');
// a. After loading the element -- if we want to take any action after loading the img1 element.
img1.addEventListener('load', function() { console.log('Image 1 Has Successfully Loaded!'); });
// b. If the element can not be loaded -- The image did not load due to incorrect source in our second image. Now another error type event could happen in such a situation, and we can take action on that too:
img2.addEventListener('error', function(){
   console.log('Image Can no be Loaded');
})


                  // 10. Old Browser Problem
// If the web application is 8, 7 or older than it, the browser does not support 'addEventListener' event. here we have to used 'attachEvent' instead of 'addEventlistener'. The DEMO is below:
yourElement.attachEvent('onclick', function(){
   // here write you code what you want to do
});
// the event name will start with'on' prefix
// the 'attachEvent' must have to use






// var a, b, c, d, e, f;
// a = 'learn';
// b = 'about';
// c = 'string';
// d = 'variable';
// e = 'in';
// f = 'javascript';

// result = `${c[3]} ${a[0] + b[2] + d[0] + d[7]} ${b[3]}`
// console.log(result);