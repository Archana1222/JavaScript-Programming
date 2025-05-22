console.log(`=======log first element========`);
const fruits=["Banana","Orange","Apple","Mango","Water Melon"];
let firstElement= fruits[0];
console.log(firstElement);

console.log(`=======log last element=======`);
let lastElement= fruits[fruits.length-1];
console.log(lastElement);

console.log(`========add element Papaya before Banana element=======`);
fruits.unshift("Papaya");
console.log(fruits);

console.log(`======Remove Mango from array======`);
const deleteElement=fruits.splice(4,1);
console.log(deleteElement);
console.log(fruits);

console.log(`=======Add/insert Pineapple at last position using push and splice======`);
// fruits.push("Pineapple");
// console.log(fruits);
fruits.splice(5,0,"Pineapple");
console.log(fruits);

console.log(`======Insert Dragon fruit before Watermelon=======`);
fruits.splice(4,0,"Dragon Fruit");
console.log(fruits);

console.log(`=======Replace Orange with Kiwi========`);
fruits.splice(2, 1,"Kiwi");
console.log(fruits);

console.log(`=======Log the elements from index 1 to 4 ========`);
const sliceFrom1to4= fruits.slice(1,4);
console.log(sliceFrom1to4);

console.log(`=======log last three elements========`);
const lastThreeElements=fruits.slice(-3);
console.log(lastThreeElements);










