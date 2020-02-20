// ---------------------- Now here's the same thing with some typing ----------------------
let value: { property: string, otherProperty: number } = { property: "this is a string", otherProperty: 1 };

function doTheThing(param: { property: string, otherProperty: number }) {
    console.log(param.property);
}

doTheThing(value);

// This tells TypeScript that we're in a module, and not a script.
export {};
