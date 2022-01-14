console.clear();
//making html section
const body = document.body
// text HTML section
const textBtn = document.createElement('button');
const textOutput = document.createElement('p')
textBtn.innerText = 'Get Text'
// JSON HTML section
const jsonBtn = document.createElement('button');
const jsonOutput = document.createElement('p')
jsonBtn.innerText = 'Get JSON data'
body.prepend(textBtn,textOutput, jsonBtn,jsonOutput)

// Get Text function
textBtn.addEventListener('click', fetchText)
function fetchText(){
    fetch('../JSON/text.txt')
    .then(res => {
        if(!res.ok){
            const error = `Error on ${res.status}`
            throw new Error(error)
        }
        return res.text()
    })
    .then(data => {
        textOutput.innerHTML = data
    })
    .catch(err => console.log(err))
}

// Get JSON data function
jsonBtn.addEventListener('click', fetchJson)
function fetchJson(){
    fetch('../JSON/simpleText.json')
    .then(res => {
        if(!res.ok){
            const error = `Error on ${res.status}`
            throw new Error(error)
        }
        return res.json()
    })
    .then(data =>{
        let output = `<h2>JSON Users</h2>`
        data.forEach(function(user){
            output += `
            <ul>
            <li>Id: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Age: ${user.age}</li>
            <li>Email: ${user.email}</li>
            </ul>
            `
        })
        jsonOutput.innerHTML = output
        
        console.log(data);
    })
    .catch(err => console.log(err))
}