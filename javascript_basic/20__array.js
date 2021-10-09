document.write("<h1>Tutorial no. 20 -- Array in JS</h1>");

//  Declaration of Array ---- 1st method
document.write("Declaration of Array 1st method---");
document.write("<br>");
var arrayName = new Array('rahim', ' karim', ' rafiq', ' jabbar');
document.write(arrayName);
document.write("<br>");
document.write("But this method is not so popular in programming.")
document.write("<br><br>");

//  Declaration of Array ---- 2nd method
document.write("Declaration of Array 2nd method");
document.write("<br>");

var arrName = ['rahim', ' karim', ' rafiq', ' jabbar'];
document.write(arrayName);
document.write("<br><br>");

//  get output by index number
document.write("Get array by index number: The index number starts from 0. So this way a Specific value can be access from Aray <br>")
document.write(arrayName[0]);
document.write("<br>");
document.write(arrayName[1]);
document.write("<br>");
document.write(arrayName[2]);
document.write("<br>");
document.write(arrayName[3]);
document.write("<br><br>");

//  we can change an array value by this index numbers
document.write("we can change an array value by this index numbers<br>");
arrayName[3] = 'shafiq'
document.write(arrayName[3] + " ----So the value is changed to shafiq")
document.write("<br><br>");

// Array.length ---  It shows the total value numbers of array
document.write("Array.length ---  It shows the total value numbers of array<br>");
var len = arrayName.length
document.write(len);
document.write("<br><br>");

//হ্যা! আপনি লুপ ইউজ করে ইজিলি অ্যারের সবগুলো আইটেম অ্যাক্সেস করতে পারবেনঃ
document.write("আপনি লুপ ইউজ করে ইজিলি অ্যারের সবগুলো আইটেম অ্যাক্সেস করতে পারবেনঃ<br>");

for(var i = 0; i<arrName.length; i++){
    document.write("Name: " + arrName[i]);
}
document.write("<br><br>");

//অ্যারেতে শেষের দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ push()
document.write("অ্যারেতে শেষের দিক হতে কোনো নতুন আইটেম অ্যাড করতে:<br>");

var push = arrName.push('asif');
document.write("now total array value is " + push);
document.write("<br>");
document.write(arrName);
document.write("<br><br>");

//অ্যারেতে শেষের দিক হতে আইটেম রিমুভ করতেঃ
document.write("অ্যারেতে শেষের দিক হতে আইটেম রিমুভ করতেঃ<br>");

arrName.pop();
document.write(arrName + " --Now the asif is deleted.");
document.write("<br><br>");

//  SHIFT / UNSHIFT
document.write("SHIFT / UNSHIFT<br>");
document.write("shift is used for --অ্যারেতে শুরুর দিক হতে আইটেম রিমুভ করতেঃ<br>")

arrName.shift();
document.write(arrName + " --Now rahim is deleted");
document.write("<br><br>");

document.write("unshift is used for --অ্যারেতে শুরুর দিক হতে কোনো নতুন আইটেম অ্যাড করতেঃ<br>");
arrName.unshift("Muhammad asif");
document.write(arrName + " --Now Muhammad asif is added");
document.write("<br><br>");

//  indexOf ---- নির্দিষ্ট কোনো আইটেম এর ইন্ডেক্স নাম্বার জানতেঃ
document.write("indexOf ---- নির্দিষ্ট কোনো আইটেম এর ইন্ডেক্স নাম্বার জানতেঃ<br>");
var ind = arrName.indexOf('Muhammad asif');
document.write(ind);
document.write("<br><br>");

// splice() --- ইন্ডেস্ক নাম্বার দিয়ে কোনো আইটেম রিমুভ করতেঃ
document.write(" splice () ---  ইন্ডেস্ক নাম্বার দিয়ে কোনো আইটেম রিমুভ করতেঃ<br>");

var arrTwo = ["sojib", "akash", "mamun", "akib", "opu", "nafis", "rehan"];
document.write(arrTwo);
document.write("<br>");

var cut = arrTwo.splice(0, 3);
document.write("splices array:-- " + cut);
document.write("<br>new array: -" + arrTwo);
document.write("<br><br>");
document.write("আর যদি চান একটা নির্দিষ্ট ইন্ডেক্স নাম্বার থেকে শুরু করে বাকি সবগুলো রিমুভ করতে তাইলে প্রথম আর্গুমেন্টে জাস্ট যেখান থেকে রিমুভ করা শুরু করবেন সে ইন্ডেক্স নাম্বারটা দিলেই হবেঃ<br>")

document.write(arrTwo);
arrTwo.splice(2);
document.write("<br>");
document.write(arrTwo);
document.write("<br><br>");

document.write("রিমুভ করা ডাটাগুলোও আবার আরেকটা ভ্যারিয়েবলে স্টোর করে রাখতে পারবেন<br>");

var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var spliceArr = newArr.splice(3);
document.write(newArr);
document.write("<br>");
document.write(" the deleted array is " + spliceArr);












































