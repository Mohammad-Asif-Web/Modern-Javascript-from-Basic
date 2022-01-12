console.clear();


// const local = require("./local.json");

function fetchData(){
    const xml = new XMLHttpRequest();
    xml.open('GET', 'local.json', true)

    xml.onload = function(){
        if(this.status == 200){
            const data = JSON.parse(this.responseText);
            console.log(data);
        }
        // if(this.status == 404){
        //     console.log(`404: Not Found`);
        // }
    }
    xml.send();
}

fetchData();


