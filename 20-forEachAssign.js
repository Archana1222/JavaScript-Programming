console.log(`=======Log array numbers with its index===================`);
const arrayNumbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
arrayNumbers.forEach( (number , index) => {
    console.log(`Index is: ${index} and its number is : ${number}`);  
})


console.log(`=======Find Positive numbers from array using forEach===================`);
arrayNumbers.forEach((number) => {
    if (number > 0){
        console.log(`Positive numbers are : ${number}`);       
    }
})

console.log(`=======Find Negative numbers from array using forEach===================`);
arrayNumbers.forEach((number) => {
    if (number < 0){
        console.log(`Negative numbers are : ${number}`);       
    }
})

// console.log(`=======Find Positive numbers from array using filter===================`);
// const positiveNumbers = arrayNumbers.filter(number => number > 0);
// console.log(` Positive numbers are = ${positiveNumbers}`);

// console.log(`=======Find Negative numbers from array using filter===================`);
// const negativeNumbers = arrayNumbers.filter(number => number < 0);
// console.log(` Negative numbers are = ${negativeNumbers}`);

console.log(`=======Find EVEN numbers from array using forEach===================`);
arrayNumbers.forEach((number) => {
    if (number %2 == 0){
        console.log(`Positive numbers are : ${number}`);       
    }
})

console.log(`=======Find SUM of elements from array using forEach===================`);
let sum = 0;
arrayNumbers.forEach( (currentValue) => {
    sum = sum + currentValue;
} );
console.log(`Sum is : ${sum}`);


console.log(`=======Find EVEN indexed values from array using forEach===================`);
arrayNumbers.forEach((number, index) => {
    if (index %2 == 0){
        console.log(`Even Indexed numbers are : ${number}`);       
    }
})