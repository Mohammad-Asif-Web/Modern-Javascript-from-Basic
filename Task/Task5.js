document.write("<h1>Task no. 5--  Vowel and consonant Finder</h1>");

var letter = prompt("Enter your words");
letter = letter.toLowerCase();

if(letter=="a" || letter=="e" || letter=="i" ||letter=="o" ||letter=="u"){
    document.write("You Entered " + letter + " and this is vowel");
}
else{
    document.write("You Entered " + letter + " and this is Consonant");
}












