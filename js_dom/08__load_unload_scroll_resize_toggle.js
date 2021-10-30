// load event -- when the browser is loaded then the event occurs
window.addEventListener('load', function(){
    console.log('load');
})

// unload event -- if we reload the browser then this event happens.
window.addEventListener('unload', function(){
    console.log('unload');
})

// resize event -- this event happens when scroll is up/down.
const body = document.body;
let bodyStyle = {
    height: '150vh'
};
Object.assign(body.style, bodyStyle)
window.addEventListener('scroll', function(){
    console.log('scroll');
});

window.addEventListener('resize', function(){
    let width = outerWidth;
    let height = outerHeight;

    console.log(`width : ${width}, height: ${height}`);
})

// toggle event -- Basically this event occurs for details html element. 
const detail = document.createElement('details')
const summary = document.createElement('summary');
const p = document.createElement('p');
body.prepend(detail);
detail.append(summary);
detail.append(p);
summary.innerText = 'Muhammad Asif'
p.innerText = 'lorem ipsum dolor sit ammet sign'

detail.addEventListener('toggle', function(event){
    console.log('toggle occurs');

    // the 'open' property occurs as a boolean value 'true' or 'false'. If the target event is open it will display true else it will returned as false.
    console.log(event.target.open);
})












