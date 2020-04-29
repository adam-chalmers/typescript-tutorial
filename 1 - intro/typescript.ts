// ---------------------- Here's the same thing as before, but using fully-typed typescript. ----------------------
let value: number = 1;
value = "string";
console.log(value.toFixed(2));

let obj: { property: string, otherProperty: number } = { property: "this is a string", otherProperty: 1 };
    
function doTheThing(param: { property: string, otherProperty: number }): void {
    console.log(param.property);
    // Note that now that we've defined the type of the param argument, the following fails
    param.otherProperty = true;
    console.log(param.third);
}

doTheThing(obj);

let secondObj: { different: number, properties: string } = { different: 1, properties: "now this one is a string instead" };

doTheThing(secondObj); // Now we get an error, since the inferred type of secondObj doesn't match the type expected by the function

// This tells TypeScript that we're in a module, and not a script.
export {};