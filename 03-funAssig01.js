console.log("======== Function with no arguments and no return value ============");
function intro(){
    console.log("I am Archana"); 
    console.log("from Pune");
}
intro();

console.log("======== Function with arguments and no return value ============");

function personalDetails(firstName){
    var result = firstName; 
    console.log("First Name :" ,result);
}
personalDetails ("Archana");

function personalDetails(lastName){
    var result = lastName; 
    console.log("Last Name :" ,result);
}
personalDetails ("Deokate");

function personalDetails(collegeName){
    var result = collegeName; 
    console.log("College Name :" ,result);
}
personalDetails ("Sinhgad College of Engineering, Pune");


console.log("======== Function with arguments and return value ============");
function addThreeValues(num1,num2,num3){
    var result = num1 + num2 + num3;
    return result;
}
var additionValue =  addThreeValues(10.23,600,40);
console.log("Addition is: ", additionValue);
 var message= addThreeValues("Hello", " Good", " Morning!!");
 console.log("",message);