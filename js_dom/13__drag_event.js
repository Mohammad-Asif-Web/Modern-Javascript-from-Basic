const body = document.body;
const p = document.createElement('p');
const input = document.createElement('div');
body.prepend(p);
body.prepend(input);
p.innerText = 'This is Draggable Text'
p.setAttribute('draggable', 'true');
p.setAttribute('id', 'para')
let inObj = {
    margin: '20px',
    width: '300px',
    height: '100px',
    background: 'coral',
    borderRadius: '8px',
}
let pStyle = {
    margin: '20px',
    fontSize: '1.3rem',
    color: 'firebrick',
    fontWeight: '600'
}
Object.assign(input.style, inObj);
Object.assign(p.style, pStyle);

p.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('Text', e.target.id);
    console.log('dragStart occurs');
})

input.addEventListener('dragover', (e)=>{
    e.preventDefault();
    console.log('dragover fired');
})

input.addEventListener('drop', (e)=>{
   let id = e.dataTransfer.getData('Text');
   input.append(document.getElementById(id));
   console.log('drop event fired');
})
