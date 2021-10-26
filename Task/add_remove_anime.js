const body = document.body;
const section = document.createElement("section");
const div1 = document.createElement("button");
const div2 = document.createElement("button");
const div3 = document.createElement("button");

body.prepend(section);

let sectionStyle = {
  width: "100%",
  height: "150px",
  background: "firebrick",
  textAlign: "center",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-evenly",
};
Object.assign(section.style, sectionStyle);

section.prepend(div1);
section.prepend(div2);
section.prepend(div3);
div1.innerText = "a";
div2.innerText = "b";
div3.innerText = "c";

let divStyle = {
  width: "150px",
  height: "100px",
  background: "salmon",
  color: "#fff",
  textTransform: "uppercase",
  fontWeight: "700",
  fontSize: "2rem",
  margin: "25px",
  border: "none",
};
Object.assign(div1.style, divStyle);
Object.assign(div2.style, divStyle);
Object.assign(div3.style, divStyle);

const button = document.getElementsByTagName("button");
const len = document.getElementsByTagName("button").length;
const arr = Array.from(button);

for (let i = 0; i < len; i++) {
  arr[i].addEventListener("click", function () {
    // add/remove anime code
    arr[i].classList.add("anim");
    setTimeout(function () {
      arr[i].classList.remove("anim");
    }, 1000);

    // play audio js code
    var text = this.innerText;
    audioPlay(text);
  });
}

function audioPlay(text) {
    switch (text) {
      case "A":
        var audio = new Audio("../assets/a.mp3");
        audio.play();
        // audio.pause();
        break;
      case "B":
        var audio = new Audio("../assets/c.mp3");
        audio.play();
        break;
      case "C":
        var audio = new Audio("../assets/bb.mp3");
        audio.play();
        break;
    }
  }


// div1.addEventListener('click', function(){
//     div1.classList.add('anim');
//     setTimeout(function(){
//         div1.classList.remove('anim');
//     }, 1000);
// })

// div2.addEventListener('click', function(){
//     div2.classList.add('anim');
//     setTimeout(function(){
//         div2.classList.remove('anim');
//     }, 1000);
// })

// div3.addEventListener('click', function(){
//     div3.classList.add('anim');
//     setTimeout(function(){
//         div3.classList.remove('anim');
//     }, 1000);
// })

