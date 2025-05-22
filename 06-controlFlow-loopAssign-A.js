
console.log(`=======Count total number of Vowels=========`);

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let index = 1; index < str.length-1; index++) {
    if (vowels.includes(str[index])) {
      count++;
    }
  }
  return count;
}
const givenString = "I am very good IT developer";
const vowelCount = countVowels(givenString);
console.log(`Total vowels: ${vowelCount}`);



console.log(`=======Sum of Cube of Numbers=======`);
var sum=0;
for (let index = 1; index <=5; index++) {
    sum= sum + index*index*index;
    console.log(sum);   
}


console.log(`=======find odd positioned characters========`);

function oddPositionedChars(str) {
  let string=" ";
  for (let i = 0; i < str.length-1; i ++) {
    if (i %2!=0 && str.charAt(i)!=' ') {
      string=string+ str.charAt(i);
    }
  }
  return string;
}
const stringOne = "Hard work always pays back";
const oddStringOne = oddPositionedChars(stringOne);
console.log(` ${stringOne} : Odd positioned Charc: ${oddStringOne}`);
const stringTwo = "Soon I will be UI IT Champ";
const oddStringTwo = oddPositionedChars(stringTwo);
console.log(`${stringTwo} : Odd positioned charc: ${oddStringTwo}`); 