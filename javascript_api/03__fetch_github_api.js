console.clear
const body = document.body
const h1 = document.createElement('h1');
const button = document.createElement('button');
const p = document.createElement('p');
body.prepend(button, h1, p);
h1.innerText = 'Github Users'
button.innerText = 'Get data';

// background style
const stl = {
    background : '#f06292',
    color: '#f8bbd0',
    fontWeight: '800',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
Object.assign(body.style, stl)

button.addEventListener('click', getData)

function getData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users', true)
    xhr.onload = function () {
        if(this.status == 200){
            const datas = JSON.parse(this.responseText);

            var output = '';
            for (const i in datas) {
                output += `
                
                <div style="background: #ec407a; display: flex; padding: 10px; gap: 10px; margin-top:10px;">
                <img src="${datas[i].avatar_url}" width="70" height="70">
                <ul style="list-style: none">
                <li>User ID: ${datas[i].id}</li>
                <li>User password: ${datas[i].login}</li>
                <li>User url: ${datas[i].url}
                </ul>
                </div>
            `
            }
            p.innerHTML = output
            button.style.display = 'none'
            console.log(datas);
        } 
        if(this.status == 404){
            console.log(`404: Not Found`);
        }
    }
    xhr.onerror = function(){
        console.log(`error is here`);
    }

    xhr.send();
}



