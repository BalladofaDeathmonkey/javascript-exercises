// let myString = ""
const repeatString = function(string, num) {
    let myString = ''
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 1; i <= num; i++) {
        myString += string;
    }
    return myString;
};
console.log(repeatString('love', 10));
// Do not edit below this line
module.exports = repeatString;
