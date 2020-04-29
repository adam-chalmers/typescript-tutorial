// ---------------------- Here's some regular JS code that we'll compare to typescript ----------------------
let value = 1; // value is a number
value = "string"; // value is now a string
console.log(value.toFixed(2)); // Error! toFixed is not a method on the string type.

let obj = { property: "this is a string", otherProperty: 1 };
    
function doTheThing(param) {
    console.log(param.property);
    // Note that the following is allowed in regular JS
    param.otherProperty = true; 
    console.log(param.third);
}

doTheThing(obj);

let secondObj = { different: 1, properties: "now this one is a string instead" };

doTheThing(secondObj); // No errors, just unexpected behaviour

export {};