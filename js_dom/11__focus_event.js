const body = document.body
const input = document.createElement('input');
const input2 = document.createElement('input')
body.prepend(input, input2);

const inputs = document.querySelectorAll('input')
Array.from(inputs).map((arr) =>{
    let obj = {
        display: 'block',
        margin: '15px',
        padding: '10px'
    }
    Object.assign(arr.style, obj)
})


input.addEventListener('focus', (event) =>{
     input.style.background = 'tomato'
     input.style.padding = '10px'
    //  console.log(input.value = event.target.value.toUpperCase() );
})
input.addEventListener('blur', () =>{
    input.style.background = ''
    input.style.padding = '10px'
})

input2.addEventListener('blur', (event) =>{
    console.log(event.target.value);
    input2.value = event.target.value.toUpperCase();
})





