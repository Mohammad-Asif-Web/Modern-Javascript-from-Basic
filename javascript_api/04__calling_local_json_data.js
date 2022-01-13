console.clear
const body = document.body
const h1 = document.createElement('h1');
const button = document.createElement('button');
const p = document.createElement('p');
body.prepend(button, h1, p);
h1.innerText = 'Local JSON Data'
button.innerText = 'Get data';

button.addEventListener('click', fetchData)

function fetchData(){
    const xml = new XMLHttpRequest();
    xml.open('GET', '../JSON/local.json', true)

    xml.onload = function(){
        if(this.status == 200){
            const data = JSON.parse(this.responseText);
            var output = '';
            for (const i in data) {
                output += `
                <ul style="margin-top: 10px; list-style: none;padding: 10px">
                <li>Id: ${data[i].id}</li>
                <li>Name: ${data[i].name}</li>
                <li>Age: ${data[i].age}</li>
                <li>Student: ${data[i].student}</li>
                <li>Country: ${data[i].country}</li>
                </ul>
                `    
            }
            
            p.innerHTML = output
            console.log(this.responseText);
        }
        if(this.status == 404){
            const error = `404: Not Found`
            p.innerText = error
            console.log(error);
        }
    
    }
    xml.onerror = function(){
        console.log(`error is here`);
    }
    xml.send();
}




