// Example No.1 -- Type any word and that will display to browser
const body = document.body
const p = document.createElement('p');
p.innerText = 'Type any word'
let pStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    background: '#000',
    color: '#fff',
    width: '100%',
    height: '50px',
}
Object.assign(p.style, pStyle)

body.prepend(p);

document.addEventListener('keypress', function(event){
    let text = event.key;
    p.innerText = 'You have pressed - ' + text;
    p.style.color = 'green'
})

// Example no.2 -- textArea
const textarea = document.createElement('textarea');
const span = document.createElement('span')
// span.innerText = 'this is text'
body.append(textarea);
body.append(span);
let textStyle = {
    marginTop: '50px',
    resize: 'none',
    width: '200px',
    height: '100px',
    border: '1px solid #eee',
    borderRadius: '5px'
}
Object.assign(textarea.style, textStyle)
let spanStyle = {
    display: 'block',
    color: 'green',
    fontStyle: 'italic',
    fontWeight: '600'
}
Object.assign(span.style, spanStyle)
let count = 0;
textarea.addEventListener('keypress', function(event){
    count++;
    // let text = event.key
    span.innerText = 'you have pressed ' + count + ' words';
})

