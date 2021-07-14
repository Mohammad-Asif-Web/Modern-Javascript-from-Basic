document.write("<h1>Task no. 10 -- Love Percentage of two people🎃</h1>")

let yourName = prompt("Enter your name: ");
yourName = yourName.toUpperCase();
yourName = yourName.slice(0, 20);

let yourPartner = prompt("Enter your Partner name: ");
yourPartner = yourPartner.toUpperCase();
yourPartner = yourPartner.slice(0, 20);

let random = Math.floor(Math.random() * 100) + 1;

alert(yourName + " and " + yourPartner + " Love percentage is " + random + "%");

document.write("<h4>Thank You!</h4> " + yourName + " & " + yourPartner);

















