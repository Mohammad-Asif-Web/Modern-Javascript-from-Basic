const body = document.body
const input = document.createElement('input');
const p = document.createElement('p')
body.prepend(input);
body.append(p)
let obj = {
    margin: '20px',
    padding: '20px'
}
Object.assign(input.style, obj);

input.addEventListener('copy', (event) =>{
    p.innerText = `You have copied '${event.target.value}'`
})
input.addEventListener('cut', (event) =>{
    p.innerText = `You have cut '${event.target.value}'`
})
input.addEventListener('paste', (event) =>{
    p.innerText = `You have pasted '${event.target.value}'`
})




















