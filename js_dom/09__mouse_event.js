// mouseover and mouseleave click events
const body = document.body
const btn = document.createElement('button');
const p = document.createElement('p');

body.prepend(btn);
btn.innerText = 'I am button'
body.append(p);

let btnStyle = {
    fontSize: '2rem',
    background: 'firebrick',
    color: 'aqua',
    border: '3px solid red',
    padding: '10px 20px',
    margin: '20px'
}

Object.assign(btn.style, btnStyle)
btn.addEventListener('mouseover', function(){
    // event.preventDefault();
    console.log('mouseover');
    p.innerText = 'This is a text'
    p.style.color = 'red'
    p.style.fontSize = '2rem'
    p.style.margin = '10px'
})

btn.addEventListener('mouseleave', function(){
    p.innerText = ''
    console.log('mouse leave from button');
})

// mouse click event
const button1 = document.createElement('button');
const button2 = document.createElement('button')
button1.innerText = 'Button 2'
button2.innerText = 'Button 3'
body.append(button1);
body.append(button2);
Object.assign(button1.style, btnStyle);
Object.assign(button2.style, btnStyle);

const btnArr = document.querySelectorAll('button');

Array.from(btnArr).map((btn) =>{
    btn.addEventListener('click', (event) =>{
        console.log(event.target.innerText);
        console.log(`this is ${event.type} event`);
        console.log(`Time Stamp is ${event.timeStamp}`);
    })
})

// mousemove event
const div = document.createElement('div');
body.append(div);
div.innerText = 'Mouse move here'
let divStyle = {
    width: '200px', 
    height: '100px',
    color: '#fff',
    background: 'tomato',
    textAlign: 'center',
    marginLeft: '20px',
    padding: '33px'
}
Object.assign(div.style, divStyle);
div.addEventListener('mousemove', (event) =>{
    // clientX and clientY display the value comparing the window with current element
    let clientX = event.clientX
    let clientY = event.clientY
    console.log(`ClientX is ${clientX}, ClientY is ${clientY}`);

    // offsetX and offsetY display the value of current div width and height
    let offX = event.offsetX
    let offY = event.offsetY
    console.log(`offsetX: ${offX}, offsetY: ${offY}`);
})


// mousedown/mouseup/dblclick events
const btn4 = document.createElement('button');
body.append(btn4);
btn4.innerText = 'up/down/dblclick'
Object.assign(btn4.style, btnStyle)

btn4.addEventListener('mousedown', function(){
    console.log('mouse holding');
})

btn4.addEventListener('mouseup', function(){
    console.log('mouse hold out');
})

btn4.addEventListener('dblclick', function(){
    console.log('mouse is double clicked');
})








































