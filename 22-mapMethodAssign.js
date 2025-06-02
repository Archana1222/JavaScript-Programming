
console.log(`=======add 10 in each element of array==============`);
const arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
const array_add_ten = arrayNumbers.map((element, index) => {
    return element + 10 ;
});
console.log(`[${array_add_ten}]`);

console.log(`=======Cube each element of array==============`);
const array_cube_ele = arrayNumbers.map((element, index) => {
    return element * element * element ;
});
console.log(`[${array_cube_ele}]`);

console.log(`=======add 10 in each element of array==============`);
const array_add_indexvalue = arrayNumbers.map((element, index) => {
    return element + index ;
});
console.log(`[${ array_add_indexvalue }]`);
