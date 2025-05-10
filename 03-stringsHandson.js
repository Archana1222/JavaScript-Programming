
console.log(`========== Print the String ===============`);
var str="  Hey you are doing good, keep it up   ";
console.log(`Given String=${str}`);

console.log(`==========Length of String===============`);
var strLength= str.length;
console.log(`String length is:${strLength}`);

console.log(`========== Remove the extra spaces using trim() ===============`);
console.log(`Before trim: ${str.length}`);
var trimResult = str.trim();
console.log(`After trim: ${trimResult.length}`);
var totalRemovedSpaces = str.length - trimResult.length;
console.log(`Trimmed string: ${trimResult}`);
console.log(`Total Spaces removed after trim is: ${totalRemovedSpaces}`);

console.log(`========== Print first and last character after Trim ===============`);
trimResult.charAt(0);
console.log(`First Character: ${trimResult.charAt(0)}`);
console.log(`Last Character:${trimResult.charAt(trimResult.length-1)}`);

console.log(`==========Print the count of total words using split() ===============`);
var words = trimResult.split(" ");
console.log(words);
console.log(`Total words: ${words.length}`);

console.log(`========== Print the index of word using indexOf() ===============`);
var indexOfGood = str.indexOf("good");
console.log(`Index of word "Good" is : ${indexOfGood} `);

console.log(`========== Print the substring from index ===============`);
console.log(`Substring from Index 22: ${str.substring(22)}`);

console.log(`==========Check the string starts and ends with ===============`);
trimResult.startsWith("Hey");
console.log(`starts with Hey:${trimResult.startsWith("Hey")}`);
trimResult.endsWith("up");
console.log(`ends with Up:${trimResult.endsWith("up")}`);






