const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`==============Find out all the numbers which are greater than 50==========`);
const greaterThanFifty = arrayNumbers.filter( number => number > 50);
console.log(` Greater then 50 numbers: ${greaterThanFifty}`);

console.log(`==============Find out all the even number===========================`);
const evenNum = arrayNumbers.filter ( number => number %2==0);
console.log(` Even numbers are : ${evenNum}`);

console.log(`==============Find out all the odd number===========================`);
const oddNum = arrayNumbers.filter ( number => number %2!=0);
console.log(` Odd numbers are : ${oddNum}`);

console.log(`==============Find out all the numbers which are multiple of 5==========`);
const multipleOfFive = arrayNumbers.filter ( number => number %5==0);
console.log(` Multiple of 5 numbers are : ${multipleOfFive}`);

console.log(`==============Find out all numbers which are between 20 and 50========`);
const inbetween = arrayNumbers.filter ( number => number > 20 && number < 50 );
console.log(` Even numbers are : ${inbetween}`);