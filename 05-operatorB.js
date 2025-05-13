
console.log(`=====Find greatest number using Ternary operator======`);

function greaterNumber (numOne,numTwo){
    var result= numOne > numTwo ? numOne : numTwo;
    console.log(`Greater number is ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800,899);

console.log(`======To check even or odd numbers=======`);

function isEvenOrOddNum(num){
    var result=num%2==0? "even":"odd";
    return result;
}
var returnValue= isEvenOrOddNum(29);
console.log(` 29 number is:${returnValue}`);
var returnValue= isEvenOrOddNum(44);
console.log(` 44 number is :${returnValue}`);
var returnValue= isEvenOrOddNum(0);
console.log(` 0 number is:${returnValue}`);
var returnValue= isEvenOrOddNum(101);
console.log(` 101 number is:${returnValue}`);

console.log(`====find length of string and length is even/odd========`);

function wordLength(num){
    var result=num%2==0? "even":"odd";
    return result;  
}
greetOne="JavaScript";
greetLength1= greetOne.length;
var returnValue1=wordLength(`${greetLength1}`);
console.log(`Word is ${greetOne}- its length is:${greetLength1}  even/odd:${returnValue1}`);
greetTwo="Developer";
greetLength2=greetTwo.length;
var returnValue2= wordLength(`${greetLength2}`);
console.log(`Word is ${greetTwo}- its length is:${greetLength2}  even/odd:${returnValue2}`);
greetThree="Google";
greetLength3=greetThree.length;
var returnValue3= wordLength(`${greetLength3}`);
console.log(`Word is ${greetThree}- its length is:${greetLength3}  even/odd:${returnValue3}`);



