document.write("<h1>Task no. 6 -- Input a letter and check it is vowel or consonant using switch</h1>");

var digit = prompt("Enter Your digit: ");

digit = digit.toLowerCase();

//for Normal Switch Case we can use this --
// switch(digit){
//     case "a":
//         document.write("this is vowel");
//         break;
//     case "e":
//         document.write("this is vowel");
//         break;
//     case "i":
//         document.write("this is vowel");
//         break;
//     case "o":
//         document.write("this is vowel");
//         break;
//     case "u":
//         document.write("this is vowel");
//         break;
//     default:
//         document.write("this is consonant");
// }


//for multiple SWITCH CASE, we can use as :-
switch(digit){
    case "a":
    case "e":
    case "i":
    case "o":  
    case "u":
        document.write("this is vowel");
        break;
    default:
        document.write("this is consonant");
}