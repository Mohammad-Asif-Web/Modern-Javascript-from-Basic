/* 
//Example no.1 -- input relation with change event

const body = document.body;
const label = document.createElement('label');
label.innerText = "Name:"
label.style.fontSize = '1.3rem'
const input = document.createElement('input');

body.prepend(label);
label.append(input);

label.setAttribute('for', 'name');
input.setAttribute('type', 'text');
input.setAttribute('name', 'name');

input.addEventListener('change', function(event){
    console.log(event.target.value);
})*/



/*
//Example no. 2 -- get the value of checked item in console.
const body = document.body
const div = document.createElement('div');
const h2 = document.createElement('h2');
const label1 = document.createElement('label');
const label2 = document.createElement('label');
const input1 = document.createElement('input');
const input2 = document.createElement('input');

h2.innerText = 'Programming Language';
label1.innerText = 'C'
label2.innerText = 'Java'

body.prepend(div)
div.prepend(h2);
div.append(label1);
div.append(label2);


label1.prepend(input1);
label2.prepend(input2);

label1.setAttribute('for', 'program');
label2.setAttribute('for', 'java');

input1.setAttribute('type', 'checkbox')
input1.setAttribute('name', 'program')
input1.setAttribute('id', '')
input1.setAttribute('value', 'c')

input2.setAttribute('type', 'checkbox')
input2.setAttribute('name', 'program')
input2.setAttribute('id', '')
input2.setAttribute('value', 'java')

const inputs = document.querySelectorAll('input[name=program]');
// console.log(inputs);

Array.from(inputs).map((program) =>{
    program.addEventListener('change', function(event){
        if(event.target.checked){
            console.log(event.target.value);
        }
    })
})
*/


//Example no.3 -- get the value of select element in console.
const body = document.body
const label = document.createElement('label');
const select = document.createElement('select');
const option1 = document.createElement('option')
const option2 = document.createElement('option')
const option3 = document.createElement('option')
const option4 = document.createElement('option')
const option5 = document.createElement('option');

label.setAttribute('for', 'department');
label.innerText = 'Department:'

select.setAttribute('name', 'department')
select.setAttribute('id', 'department');

option1.setAttribute('value', 'cse');
option1.innerText = 'CSE';

option2.setAttribute('value', 'ece');
option2.innerText = 'ECE'

option3.setAttribute('value', 'bba');
option3.innerText = 'BBA'

option4.setAttribute('value', 'llb');
option4.innerText = "LLB"

option5.setAttribute('value', 'IT');
option5.innerText = "IT"

select.append(option1);
select.append(option2);
select.append(option3);
select.append(option4);
select.append(option5);

body.prepend(label);
body.append(select);

select.addEventListener('change', handler);

function handler(event) {
    console.log(event.target.value);
}




