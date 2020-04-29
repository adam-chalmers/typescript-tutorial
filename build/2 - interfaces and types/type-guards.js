"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isString(val) {
    return typeof val === "string";
}
function uglierIsString(val) {
    // Here we treat val as a string (even though it might not be) and check for the existence of a "concat" method. This test will pass if val is a string,
    // but can also pass for any old object that we pass in that has a truthy value with the property name "concat". This method is often required for non-primitive types
    // since typeof can only really be used with primitive types.
    return val.concat ? true : false;
}
function returnFirst(first, second, condition) {
    if (condition) {
        return first;
    }
    else {
        return second;
    }
}
// Gives us a value that the compiler knows is either a string or a number
var val = returnFirst(1, "", true);
if (isString(val)) {
    // See here how val must be a string, so you can do string-only things to it?
    val.substring(1);
    console.log(val);
}
else {
    // val here can't be a string, so the only other option is that val is a number, so we can do number-only things here!
    val.toString();
    val = val + 4;
}
