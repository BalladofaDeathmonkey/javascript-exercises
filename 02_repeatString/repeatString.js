let myString = ""
const repeatString = function(string, numOfTimes) {
    for (let i = 1; i <= numOfTimes; i++) {
        myString += string;
    }
    console.log(myString);
};
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
