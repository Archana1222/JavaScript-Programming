
console.log(`========== Print 5 to 15 ============`);
for (let index = 5; index <=15; index++) {
    console.log(index);
}

console.log(`========== Print 50 to 40 ============`);
for (let index = 50; index >=40; index--) {
    console.log(index); 
}

console.log(`========== Find first 15 ODD numbers ============`);
for (let index = 1; index <=30; index++) {
    if (index %2!=0) {
        console.log(index);        
    }    
}

console.log(`========= Print first 10 EVEN numbers ==========`);
for (let index = 1; index <=20; index++) {
    if (index %2==0) {
        console.log(index);
    }  
}

console.log(`========= Print table of 5 ============`);
for (let index = 1; index <=10; index++) {
     var result= index*5;
     console.log(result);   
}

console.log(`========= Print table of 10 ============`);
for (let index = 1; index <=10; index++) {
    var result= index*10;
    console.log(result);
}

console.log(`========= Print table of 10 in REVERSE order ============`);
for (let index = 10; index >=1; index--) {
    var result= index*10;
    console.log(result);   
}