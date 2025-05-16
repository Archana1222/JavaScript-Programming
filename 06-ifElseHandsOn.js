
console.log(`===================Check EVEN/ODD Number using If-Else====================`);

var checkEvenOrOdd= function(num){
if (num%2 ==0) {
    return "EVEN";
    
} else {
    return "ODD";   
}
}
var result=checkEvenOrOdd(45);
console.log(`The number 45 is : ${result}`);
var result=checkEvenOrOdd(70);
console.log(`The number 70 is : ${result}`);
var result=checkEvenOrOdd(68);
console.log(`The number 68 is : ${result}`);
var result=checkEvenOrOdd(95);
console.log(`The number 95 is : ${result}`);

console.log(`===================Check Age Eligibility using If-Else====================`);
var checkEligibilty= function (age){
    if (age>=18) {
        return " Eligible for voting";
    } else {
        return "NOT eligible for voting"
    }
}
var result=checkEligibilty (18);
console.log(`Age 18 is ${result}`);
var result=checkEligibilty (20);
console.log(`Age 20  is ${result}`);
var result=checkEligibilty (17);
console.log(` Age 17 is ${result}`);
var result=checkEligibilty (40);
console.log(` Age 40 is ${result}`);

console.log(`===================Check String Length using If-Else====================`);
var checkStrLength= function (str){
    if (str.length>10) {
          return "String contains more than 10 characters";
    } else {
        return "String NOT contain more than 10 characters";
    }
}
var result= checkStrLength("JavaScript-ES6");
console.log(`JavaScript-ES6  ${result}`);
var result= checkStrLength("Stack");
console.log(` Stack ${result}`);

console.log(`===================Check string startsWith using If-Else====================`);
var checkCondition =function (str){
    if (str.startsWith ("Java")) {
           return "Starts with Java";
    } else {
        return " does NOT starts with Java";
    }
}
var result= checkCondition ("JavaScript Language");
console.log(` JavaScript Language ${result}`);
var result= checkCondition ("Programming Language");
console.log(` Programming Language ${result}`);





