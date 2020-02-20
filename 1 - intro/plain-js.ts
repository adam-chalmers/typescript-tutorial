// ---------------------- Here's some valid TypeScript that looks exactly like regular javascript - because it is! ----------------------
let value = { property: "this is a string", otherProperty: 1 };
    
// This only works because we have "noImplicitAny": true in our tsconfig.json
function doTheThing(param) {
    console.log(param.property);
}

doTheThing(value);

// This tells TypeScript that we're in a module, and not a script.
export {};