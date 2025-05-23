
console.log(`=====Find length of array=========`);
const array=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Length of Array:${array.length}`);

console.log(`=====First and Last element of array=========`);

const arrayNumbers= [array[0], array[array.length-1]];
console.log(`First and Last element of array: ${arrayNumbers}`);


console.log(`=======3rd last element using length property=====`);
const thirdLastEle= array[array.length-3];
console.log(`3rd last element is : ${thirdLastEle}`);

console.log(`=======Find even numbers using for loop=====`);
const evenNumbers= [];
for (let index = 0; index < array.length; index++) {
    if (array[index]%2==0) {
        evenNumbers.push(array[index]);
    }  
}
console.log(`Even Numbers: ${evenNumbers}`);


console.log(`=======Find odd numbers using for loop=====`);
const oddNumbers= [];
for (let index = 0; index < array.length; index++) {
    if (array[index]%2!=0) {
        oddNumbers.push(array[index]);
    }   
}
console.log(`Odd Numbers: ${oddNumbers}`);

console.log(`=======Find even positioned elements and sum it=====`)
const evenPositionedNumbers = [];
let sum = 0;
for (let index = 0; index < array.length; index ++) {
    if (array[index]%2==0) {
        evenPositionedNumbers.push(array[index]);
        sum =sum + array[index];
    }
}
console.log("Even positioned numbers:", evenPositionedNumbers); 
console.log("Sum of even positioned numbers:", sum); 

console.log(`=======Find odd positioned elements and sum it=====`)
const oddPositionedNumbers = [];
let addition = 0;
for (let index = 0; index < array.length; index ++) {
    if (array[index]%2!=0) {
        oddPositionedNumbers.push(array[index]);
        addition =addition + array[index];
    }
}
console.log("Odd positioned numbers:", oddPositionedNumbers); 
console.log("Sum of odd positioned numbers:", addition); 

console.log(`=======Find sum of all elements=====`);
let result = 0;
for (let index = 0; index < array.length; index++) {
  result= result+array[index];
}
console.log(` Sum of all elements is : ${result}`); 

console.log(`=======Find numbers which are multiple of 5=====`);
const multipleOfFive = [];
for (let index = 0; index < array.length; index++) {
  if (array[index] % 5 == 0) {
    multipleOfFive.push(array[index]);
  }
}
console.log(`Multiple of 5 Numbers: ${multipleOfFive}`); 

console.log(`===== number availability=====`);
const findNum= 115;
const numAvail= array.includes(findNum);
console.log(`Is 115 number available in array: ${numAvail}`);
const findNumber= 23;
const numAvailable= array.includes(findNumber);
console.log(`Is 23 number available in array: ${numAvailable}`);

console.log(`===== Insert numbers at index 3=====`);
console.log(`Given array: [${array}]`);
array.splice(3,0,55,66);
console.log(`After inserting numbers at index 3: [${array}]`);

console.log(`===== Delete numbers at index 4=====`);
const deleteElements = array.splice(4, 3);
console.log(`Deleted elements: ${deleteElements}`);
console.log(`Array after deletion of elements: [${array}]`);














