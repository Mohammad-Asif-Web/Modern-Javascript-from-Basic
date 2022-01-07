console.clear();

const getData = ()=>{
    const xhr = new XMLHttpRequest
    console.log(xhr);
    // we need to tell the browser which method we're opening like 'get', 'post', 'delete', 'patch'
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    // then we have to send the request 
    xhr.send();
    // now we can see the result in Network in chrome devTool
    // go to network, then reload the browser, then check the posts in name section and the posts status will be 200
    // now click on the posts, then posts will be displayed in response section
};



getData();