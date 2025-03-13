const reverseString = function(string) {
    let newString = string.split("");
    const newStringReversed = newString.reverse();
    return newStringReversed.join("");
};
console.log(reverseString("Hello World!"));
// Do not edit below this line
module.exports = reverseString;
