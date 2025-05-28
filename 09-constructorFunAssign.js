
console.log(`=============Constructor function ===============`);

function Bank( bankName,location, ifscCode, branchCode){
   this.bankName = bankName;
   this.location = location;
   this.ifscCode = ifscCode;
   this.branchCode = branchCode;
   console.log(`Bank details are: ${this.bankName}, ${this.location}, ${this.ifscCode}, ${this.branchCode} `);   
}
const yesBank = new Bank("YES Bank", "Pune", "YES00123", 123);
const sbiBank = new Bank("SBI Bank", "Mumbai","SBI00234", 234);
const mahBank = new Bank("MAHA Bank", "Baramati","MAHA00345", 345);
const axisBank= new Bank("AXIS Bank", "Pimpri Chinchwad", "AXIS00456", 456);

// console.log(`========Add data member================`);
Bank.prototype.openTime= "9 AM IST";
Bank.prototype.closeTime= "6 PM IST";
console.log(`===============================================================================================`);
console.log(`Open Time of  SBI bank: ${sbiBank.openTime}       Close Time of SBI bank : ${sbiBank.closeTime}`);
console.log(`===============================================================================================`);
console.log(`Bank name: ${axisBank.bankName}                   Close Time : ${axisBank.closeTime}`);
console.log(`===============================================================================================`);
console.log(`Bank Name: ${yesBank.bankName}         Branch Code: ${yesBank.branchCode}        Open Time : ${yesBank.openTime}`);


