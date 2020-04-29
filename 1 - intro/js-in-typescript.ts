// ---------------------- Here's the same thing as before, but in typescript. Note that some things work, and others don't. ----------------------
let value = 1; // value is a number
value = "string"; // note that we can't do this in typescript, since value is typed as a number, and "string" is not a number!
console.log(value.toFixed(2)); // What was previously an error when the code was run now works as expected because the previous line does not compile and must be fixed first.

let obj = { property: "this is a string", otherProperty: 1 };
    
// Not specifying a type on the param argument here only works because we have "noImplicitAny": false in our tsconfig.json
function doTheThing(param) {
    console.log(param.property);
    // Note that the following is also allowed in untyped typescript
    param.otherProperty = true; 
    console.log(param.third);
}

doTheThing(obj);

let secondObj = { different: 1, properties: "now this one is a string instead" };

doTheThing(secondObj); // No errors again, since typesctipt doesn't know what type of object the doTheThing function expects

// This tells TypeScript that we're in a module, and not a script.
export {};