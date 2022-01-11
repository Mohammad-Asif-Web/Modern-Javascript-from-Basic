const body = document.body
const button = document.createElement('button');
const p = document.createElement('p');
body.prepend(button);
body.append(p);
button.innerText = 'Get data';
p.innerText = ' '

// button.addEventListener('click', createRequest);
function createRequest (method, url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = function () {
      let datas = JSON.parse(this.response)
      // p.innerText = datas
      console.log(datas);
    }
    xhr.onerror = () =>{
      console.log(`error is here`);
    }

    xhr.send(JSON.stringify(data))

}

function sendData(){
  createRequest('POST', 'https://jsonplaceholder.typicode.com/posts/',{
      title: 'New title',
      body: 'something new',
      userId: 1,
    });
}
sendData();

