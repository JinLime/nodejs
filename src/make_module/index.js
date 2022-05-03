const { odd, even } = require("./var");
// import { odd, even } from "./var.js"; // export default
const checkNumber = require("./func");
// import checkNumber from "./func.mjs";

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(11));
console.log(checkStringOddOrEven("ab"));
