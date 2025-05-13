function squareOfWordLength(str) {
  var length = str.length;
  return {
    length: length,
    square: length ** 2,
  }; 
}

var result = squareOfWordLength("JavaScript");
console.log("Length  and square length of JavaScript :  ",result); 

var result = squareOfWordLength("Google Chrome");
console.log("Length  and square length of Google Chrome :  ",result); 

var result = squareOfWordLength("Web Developer Smart");
console.log("Length  and square length of Web Developer Smart :  ",result); 

console.log("======With no Argument and no return value========");
function intro(){
    console.log(`${greet} - String length is : ${greetLength} - Number of words: ${words.length} - after dividing:${division}`);
    console.log((`${greet}- String length is: ${greetLength}- Number of words: ${words.length}- after multiplying:${multiplication}`));  
}
var greet = "I am MERN Stack Developer";
var greetLength = greet.length;
var words = greet.split(" ");
var division= greetLength/words.length;
var multiplication=greetLength*words.length;
intro();