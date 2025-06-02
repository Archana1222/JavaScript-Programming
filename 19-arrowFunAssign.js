console.log(`======With no argum and no return values==========`);

let arrow_fun= () => {
    console.log("Good Morning, today is Friday");   
}
arrow_fun();

console.log(`======With argum and no return values==========`);
let multi = (n1,n2,n3= 1) =>{
    console.log(`Multiplication is : ${n1*n2*n3}`);
}
multi(5,5,2);
multi(10,4);

console.log(`======With argum and return values==========`);
let addition= (n1,n2,n3,n4,n5) => {
    const result= n1+n2+n3+n4+n5;
    return result;
}
let returnValue= addition (100,100,200,349,756);
console.log(`Total Addition is : ${returnValue}`);
let returnString = addition ("I am", " learning", " ES6"," features", " in depth");
console.log(`String is : ${returnString}`);

