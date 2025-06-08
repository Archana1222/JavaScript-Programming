
const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]
console.log(`======= Reverse the Array =========`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(`======= Use sort() without any custom sorting logic =========`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log(`======= Reverse the Array =========`);
arrayRollNumbers.sort((a ,b) => {
    return a > b ? 1 : -1 ;
})
console.log(arrayRollNumbers);

console.log(`======= Greatest number from the Array =========`);
// const numbers = [5, 12, 8, 130, 44];
const greatestNumber = arrayRollNumbers.reduce((greater, current) => current > greater ? current : greater, arrayRollNumbers[0]);
console.log("Greatest number:", greatestNumber);


console.log(`=======Another method to find greatest number ========`);
let maxNum = arrayRollNumbers.reduce((max, element)=>{
    max > element ? max : element;
    return max , element;
}, 0);
console.log(`Greater Number is : ${maxNum}`);

console.log(`=======Find smallest number from the array ========`);
let smallestNum = arrayRollNumbers.reduce((min, element)=>{
     element < min ? element : min ;
     return  element , min ;
}, );
console.log(`Smallest Number is : ${smallestNum}`);

console.log(`======== Remove duplicates from the array ======`);
const removeDupli = [...new Set(arrayRollNumbers)];
console.log(removeDupli);




