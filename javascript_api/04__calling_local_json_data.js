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
    xml.open('GET', '../JSON/locl.json', true)

    xml.onload = function(){
        if(this.status == 200){
            try {
                const data = this.responseText;
                p.innerText = data
                console.log(this.responseText);
            } catch (e){
                console.warn(`An Error Occured`);
            }
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



