const body = document.body
const button = document.createElement('button');
const p = document.createElement('p');
body.prepend(button);
body.append(p);
button.innerText = 'Get data';
p.innerText = ' '

console.clear();
// external json data from codepen 'https://codepen.io/nakome/pen/DnEvr'
// fake api data 'https://jsonplaceholder.typicode.com/posts/'
button.addEventListener('click', getData)
function getData(){
    const xhr = new XMLHttpRequest()
    // console.log(xhr);
    // we need to tell the browser which method we're opening like 'get', 'post', 'Put', 'patch', 'delete'
    // the open method takes 3 parameters
    // xhr.open("method name", "src/file path, true/false")
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/', true);
   xhr.onload = function() {
       if(this.status == 200){
           const datas = JSON.parse(this.responseText);
           for (const i in datas) {
                    p.innerHTML += `
                    <ul style="background: lightblue; margin: 10px 0; padding: 5px 20px; color: firebrick;">
                    <li>Id: ${datas[i].id}</li>
                    <li>Title: ${datas[i].title}</li>
                    <li>Body: ${datas[i].body}</li>
                    </ul>
                    `     
               }
               console.log(datas);
       } else{
        p.innerText = `404: Not Found`
       }
   }
   xhr.onerror = function(){
       const error = `404: Not Found`
       console.log(error);
   }
   xhr.send();

    // then we have to send the request 
    
    // now we can see the result in Network in chrome devTool
    // go to network, then reload the browser, then check the posts in name section and the posts status will be 200
    // now click on the posts, then posts will be displayed in response section
};