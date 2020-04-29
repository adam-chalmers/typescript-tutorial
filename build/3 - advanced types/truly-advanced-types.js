"use strict";
var propName = "one";
var duplicate = {
    one: 1,
    two: "two",
    three: true
};
// All of these properties are required, but that's nothing new.
var obj = {
    one: 1,
    two: "two",
    three: true
};
// This makes a type definition where each property is optional, allowing you to construct partial objects of any given type
var partialObj = {};
partialObj.one = 1;
partialObj.two = "two";
partialObj.three = true;
var required = {
    one: 1,
    two: "two",
    three: true
};
// Number or boolean since we've excluded string from the possibilities
var exclude = 1;
var omitted = { two: "two", three: true };
// omitted.one = 1; // Error since omitted is a type that has excluded the "one" property
// Can't have property "two" here since it's not been picked
var picked = {
    one: 1,
    // two: "two", // This is an error
    three: true
};
var extracted = "d"; // Must be either a or d
var params = ["", 1]; // An array with two elements in which the types are in precisely this order
var returnedType = true;
