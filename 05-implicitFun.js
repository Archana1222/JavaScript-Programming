console.log(`=====================================Implicit Conv: Numeric string used with + gives strig type========================================`);

function impliToStr(num){
    var result= '3' + num;
    return result;
}
var returnValue= impliToStr(2);
console.log(`Given stmt= '3'+2  Result:${returnValue}              Reason: As 1st operator is string and other is number,+ operator converts number to string and concats to them` ); 
var returnValue= impliToStr(true);
console.log(`Given stmt='3'+true  Result:${returnValue}            Reason:3 is string and true is boolean value, + operator conv to string and + concates them  so result is 3true`);
var returnValue= impliToStr(undefined);
console.log(`Given stmt= '3'+ undefined  Result:${returnValue}      Reason: 3 is string and undefined converted to string and then + operator concats them `);
var returnValue= impliToStr(null);
console.log(`Given stmt= '3'+ null  Result:${returnValue}           Reason: 3 is string and null converted to string and then + operator concats them `);


console.log(`=======================Implicit Conv: Boolean to number conv===================================================`);


var returnValue='4'- true;
console.log(`Given stmt='4'- true  Result: ${returnValue}   Reason: because of '-' operator both string and boolean value conv to number i.e. '4'- true = 4-1 = 3`);
var returnValue=4 + true ;
console.log(`Given stmt= 4 + true  Result: ${returnValue}   Reason: 4 is number and true value is conv to number i.e. 4 + true = 4 + 1 = 5 `);
var returnValue= 4 + false;
console.log(`Given stmt= 4 + false  Result: ${returnValue}   Reason: 4 is number and false value is conv to number i.e. 4 + false = 4 + 0 = 4`);

console.log(`============================ Implicit Conversion: String to number conv==================================`);

returnValue=('4'-'2');
console.log(`Given stmt='4'- '2'  Result: ${returnValue}   Reason: Bcoz of '-' operator both operands conv to number i.e. '4'- '2' = 4 - 2 = 2`);
returnValue=('4' - 2);
console.log(`Given stmt= '4' -2  Result: ${returnValue}   Reason: bcoz of '-' operator both operands conv to number i.e. '4' -2 = 4 - 2 = 2 `);
returnValue=('4' * 2);
console.log(`Given stmt= '4' * 2 Result: ${returnValue}   Reason: bcoz of '*' operator both operands conv to number i.e. '4' * 2 = 4 * 2 = 8`);
returnValue=('4'/2);
console.log(`Given stmt='4' /2  Result: ${returnValue}   Reason:bcoz of '/' operator both operands conv to number i.e. '4' / 2 = 4 / 2 = 2`);


console.log(`========================Undefined used with Number, boolean, Null gives reult NaN==================================`);

returnValue=(4 + undefined);
console.log(`Given stmt= 4 + undefined  Result: ${returnValue}   Reason: ' + 'conv both operands to numbers, Undefined means value is not assigned , hence 4 + undefined= 4 + NaN= NaN i.e. Not-a-Number`);
returnValue=(4 - undefined );
console.log(`Given stmt= 4 - undefined  Result: ${returnValue}   Reason:' -' conv both operands to numbers, Undefined means value is not assigned,  hence 4 - undefined= 4 - NaN= NaN i.e. Not-a-Number `);
returnValue=(true + undefined);
console.log(`Given stmt= true + undefined   Result: ${returnValue}   Reason: '+' operator conv true to number and undefined to NaN i.e. true + undefined = 1 + NaN= NaN any operation with NaN results NaN`);
returnValue=(null + undefined);
console.log(`Given stmt= null + undefined   Result: ${returnValue}   Reason: '+' converts both operators to numbers and null has no value i.e. null + undefined= 0 + NaN = NaN`);


console.log(`============================================Explicit Conv: String to Number===============================================================`);

returnValue= Number('324');
console.log(`Given stmt= Number('324')       Result: ${returnValue}   Reason: 'Number' function converts string to number i.e. '324 conv to 324`);
returnValue=Number ('324e-1');
console.log(`Given stmt= Number('324e - 1')  Result: ${returnValue}   Reason:''Number' function converts string to number and 'e' indicates power of 10 i.e. '324e-1'= 324 * 10^-1 = 32.4`);
returnValue= Number (true);
console.log(`Given stmt= Number(true)        Result: ${returnValue}   Reason: 'Number' function converts boolean value to number i.e. true=1 `);
returnValue= Number (false);
console.log(`Given stmt= Number(false)      Result: ${returnValue}   Reason: 'Number' function converts boolean value to number i.e. false = 0 `);


console.log(`========================================Explicit Conv: Invalid String to Number======================================================================`);

returnValue= Number('hello');
console.log(`Given stmt= Number('hello')       Result: ${returnValue}   Reason: 'Number' function can not conv hello into number as it is a text hence hence result is NaN `);
returnValue=Number (undefined);
console.log(`Given stmt= Number(undefined)  Result: ${returnValue}   Reason:''Number' function can not conv undefined to number hence result is NaN`);
returnValue= Number (NaN);
console.log(`Given stmt= Number (NaN)        Result: ${returnValue}   Reason: 'Number' function can not conv NaN to number as NaN is a invalid hence result id NaN `);
