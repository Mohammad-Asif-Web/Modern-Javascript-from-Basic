document.write("<h1>Tutorial No. 26 -- Template Literals</h1>");


console.log(`string line one
string line two
`)
document.write(`string line one\n
string line two`);


const name = "asif"
const age = "25"
const job = "software Engineer"
const city = "Dhaka"
const likes = "10"
function hello(){
    return "HI, Muhammad Asif"
}

let html;

// with template string (es6)
html = `<ul>
    <li>Name : ${name}</li>
    <li>Age : ${age}</li>
    <li>job : ${job}</li>
    <li>city : ${city}</li>
    <li>Likes : ${likes}k</li>
    <li>Fuction : ${hello()}</li>
</ul>`

document.body.innerHTML = html;













