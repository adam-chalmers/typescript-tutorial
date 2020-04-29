"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adv = {
    oneValue: "one",
    twoValues: "one",
    union: true
};
var third = {
    one: "",
    two: 0
};
var intersection = { one: "string", two: 1 };
intersection = third;
var inferred = ["string", 1];
// We know that this is a string, but the compiler has no way of knowing this since the array type is either string or number, so that type carries over
var firstInferred = inferred[0];
function returnFirst(first, second, condition) {
    if (condition) {
        return first;
    }
    else {
        return second;
    }
}
// Again, we know that this must be a number based on our logic, but the compiler can't know that and so we get an inferred union type
var inferredValue = returnFirst(1, "string", true);
