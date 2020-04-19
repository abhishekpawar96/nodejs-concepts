console.log(" =============== CPP Wrapper ===============")

const addon = require("addon");

console.log(addon.hello());

console.log(" =============== GLOBAL Object ===============")

require("./util");

// ReferenceError: canNotBeAccessedOutOfThisFile is not defined
// console.log(canNotBeAccessedOutOfThisFile);

// bad practice but can be accessed
console.log(badPracticeButCanBeAccessed);
