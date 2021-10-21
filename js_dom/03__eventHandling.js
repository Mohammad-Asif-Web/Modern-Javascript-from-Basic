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
clickMeBtn.click(); // As soon as you enter this code, you will see that a click event has taken place on the button. this happened by click handler which is attached in previous. As like more events -- focus, blur, submit can be run.


                  // 5. Event Delagation



                  


