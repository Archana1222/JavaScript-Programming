console.log(`=======Task 1========`);

function maleMarriageEligibility(gender,age,boyName){
    var result=(gender=="Male"&& age>=21)?`Hey ${boyName} you are eligible for marriage`: `Hey ${boyName} you are not eligible for marriage`
    return result;
}
var returnValue=maleMarriageEligibility("Male", 25, "Bill");
console.log(returnValue);
var getValue=maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(getValue);

console.log(`=======Task 2========`);
function femaleMarriageEligibility(gender,age, girlName){
      var result=(gender=="Female"&& age>=18) ? `Hey ${girlName} you are eligible for marriage`: `Hey ${girlName} you are not eligible for marriage`
       return result;
    }    
var returnValue=femaleMarriageEligibility("Female",16,"Jenifer");
console.log(returnValue);
var getValue=femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(getValue);

