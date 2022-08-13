document.write("<h1><u>Strings</u></h1><br>");
   var str ="My name is Sanjeev Kumar ."
   // length method
   var a=str.length;
   document.write("<strong>Length of an arry</strong> &rArr; "+a+"<br>");

//lower case & Upper case
var l=str.toLowerCase();
var up=str.toUpperCase();
document.write("<strong>Lower case</strong> &emsp; &rArr; "+l+"<br>");
document.write("<strong>Upper case</strong>&emsp; &rArr;"+up+"<br>");


//Includes() //adject match
var inp = "Sanjeev";
var inc=str.includes(inp);
if(inc==true){
    document.write(inp+"&emsp; &rArr;  <strong>Is present in this string.</strong><br>");
} else{
    document.write(inp+"&emsp; &rArr;  <strong>Is not present in this string.</strong><br>");
}

// startsWith & endsWith


//startsWith
var inpst ="name"               //input
var st=str.startsWith(inpst);
if(st == true){
    document.write("<strong>This string starts with </strong> &emsp; "+inpst+"<br>");
} else{
    document.write("<strong>This string not starts with </strong> &emsp; "+inpst+"<br>");
}

//endsWith
inpen="kumar"           //input
var en=str.endsWith("inpen");
if(en == true){
    document.write("<strong>This string ends with  </strong>  &emsp;"+inpen+"<br>");
} else{
    document.write("<strong>This string not ends with </strong> &emsp;"+inpen+"<br>");
}



//search method()
var ser=str.search("Sanjeev");
document.write("<strong>Index no is </strong> &rArr; "+ser+"<br>");


//match it will traverse whole line/string and returns an array.
var inp="e";
var mat=str.match(/e/g);
var present=mat.length;
document.write(inp+"<strong >&ensp;present &ensp;</strong>"+present+" &emsp;times in this string <br>");


//indexOf
var ind =str.indexOf("v");
document.write(ind+"<br>");

//lastIndexOf
var lastind =str.lastIndexOf("n");
document.write(lastind+"<br>");

//replace()
var rep=str.replace("Sanjeev","Amit");
document.write("replace method "+rep+"<br>");


//trimm   - remove extra space from left and right of a word.


//charAt(indexno.) it will return character present at the given index no.


//charCode() it will return ASCII code of char present at given index no.



//fromCharCode() return char/symbols of that ASCII code.



//concat()  merge two or more strings together


//split(" ") convert string into an array and elemts are words.



//repeat(3) print given string 3 times




//slice(start,end) get the string from start index no. to last index no.



//substr()


//toString()  convert any type of datatye values in a string
