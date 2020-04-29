"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringGeneric = { prop: "this is a string." };
var booleanGeneric = { prop: true };
var numberGeneric = {
    prop: {
        val: []
    }
};
var funcGeneric = { prop: function () { return 1; } }; // Actually a function here!
function makeArray(val) {
    return [val];
}
var numArray = makeArray(5); // [5]
var stringArray = makeArray("string!"); // ["string!"]
var boolArray = makeArray(true); // [true]
var promise = new Promise(function (resolve, reject) {
    // resolve(1); // Error, since we're using the generic promise, resolve can only take a string!
    resolve("This is a string.");
});
