
console.log(`========Remove spaces and Reverse string========`);

function reverseString(str) {
  let strReverse = " ";
  for (let i = str.length - 1; i >= 0; i--) {
     if (str.charAt(i)!=" " ) {
        strReverse= strReverse+ str.charAt(i);        
    }   
  }
     return strReverse;
}

const stringOne = "Hard work always pays back";
const reversedStringOne = reverseString(stringOne);
console.log(` Given string: ${stringOne} : Reversed string: ${reversedStringOne}`); 
const stringTwo= "Soon I will be Angular IT Champ";
const reversedStringTwo = reverseString(stringTwo);
console.log(` Given string : ${stringTwo} : Reversed String: ${reversedStringTwo}`);

