/*  keyboard event methods
1. charCode
2. code
3. key
4. keyCode
5. shiftKey
6. ctrlKey
7. altKey   */

const body = document.body
const txt = document.createElement('textarea')
body.prepend(txt);

txt.setAttribute('cols', '20');
txt.setAttribute('rows', '7');
txt.setAttribute('placeholder', 'Write your text')
let style = {
    background: '#000',
    color: 'gold',
    resize: 'none',
    outline: 'none',
    padding: '8px',
    border: '5px solid tomato',
    borderRadius: '8px',
    margin: '10px',
    fontSize: '1.5rem',
    boxShadow: '0px 0px 30px 3px gold'
};
Object.assign(txt.style, style)
const valueText = document.createElement('span');
const code = document.createElement('span');
const keyCode = document.createElement('span')
body.append(valueText, code, keyCode)
// p.innerText = 'this is text'
let pStyle = {
    display: 'block',
    marginLeft: '20px',
    marginTop: '20px',
    color: 'green',
    fontSize: '1.2rem',
    fontWeight: '600'
}
const allText = [valueText, code, keyCode]
allText.map((arr) =>{
    Object.assign(arr.style, pStyle);
})
// Object.assign(all.style, pStyle);
// Object.assign(code.style, pStyle);
// Object.assign(keyCode.style, pStyle);

txt.addEventListener('keyup', (event) =>{
    valueText.innerText = event.target.value
    code.innerText = 'you pressed ' + event.code
    keyCode.innerText = event.key + ' keycode value is ' + event.keyCode;
});

txt.addEventListener('keydown', (event) =>{
    if(event.repeat){
        alert('do not repeat words');
        console.log('keydown occurs');
    }
})
txt.addEventListener('keypress', () =>{
    console.log('keypress occurs');
})