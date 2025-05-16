
console.log(`===================Vote Eligibility using Nested If-Else====================`);
var voteEligible= function (age){
    if (age==0 || age<0 || age>130) {
        console.log(` ${age} is Invalid data`); 
          
    } else {
        if (age>=18) {
            console.log(`${age}  eligible for vote`);   
        } else {
            console.log(`${age} is NOT eligible for vote`);   
        }

    }
}
var result= voteEligible (0);
var result= voteEligible (-5);
var result= voteEligible (135);
 var result= voteEligible (18);
 var result= voteEligible (10);
 var result= voteEligible (28);