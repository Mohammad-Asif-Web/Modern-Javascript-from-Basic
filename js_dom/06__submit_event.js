const body = document.body
const form = document.createElement('form');

const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div')

const label1 = document.createElement('label')
const label2 = document.createElement('label')
const label3 = document.createElement('label');

const input1 = document.createElement('input')
const input2 = document.createElement('input')
const input3 = document.createElement('input');

const submit = document.createElement('input')

body.prepend(form)

// form.append(div1)
// form.append(div2)
// form.append(div3)
form.append(div1, div2, div3, div4)

// div1.append(label1);
// div1.append(input1);
div1.append(label1, input1)
div2.append(label2, input2)
div3.append(label3, input3);
div4.append(submit);

label1.innerText = 'Name : '
label2.innerText = "Email : "
label3.innerText = "Password: "

form.setAttribute("action", " ");
label1.setAttribute('for', 'name');
label2.setAttribute('for', 'email');
label3.setAttribute('for', 'password');

input1.setAttribute('type', 'text')
input1.setAttribute('id', 'name')
input1.setAttribute('name', 'name')
input1.setAttribute('required', '')
input1.setAttribute('autofocus', '')

input2.setAttribute('type', 'email')
input2.setAttribute('id', 'email')
input2.setAttribute('name', 'email')
input2.setAttribute('required', '')
input2.setAttribute('size', '30')

input3.setAttribute('type', 'password')
input3.setAttribute('id', 'password')
input3.setAttribute('name', 'password')
input3.setAttribute('required', '')
input3.setAttribute('minlength', '4')
input3.setAttribute('maxlength', '8')

submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'signup')


// selecting the inputs from html
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', formHandler);
function formHandler(event) {
    event.preventDefault();
    // console.log(names.value);
    // console.log(email.value);
    // console.log(password.value);
    // In real backend project we send form values in object.
    const info = {
        names : name.value,
        email : email.value,
        password : password.value
    }
    console.log(info);

    // when we submit the form, the form inputs are not clear in the form. so we will use this method to clear the form input data after submit the form.
    name.value = '';
    email.value = '';
    password.value = '';
    
}



















