interface Generic<T> {
    prop: T
}

let stringGeneric: Generic<string> = { prop: "this is a string." };
let booleanGeneric: Generic<boolean> = { prop: true };

let numberGeneric: Generic<{ val: number[] }> = {
    prop: {
        val: []
    }
};

let funcGeneric: Generic<() => number> = { prop: () => 1 }; // Actually a function here!

function makeArray<T>(val: T): T[] {
    return [val];
}

let numArray = makeArray<number>(5); // [5]
let stringArray = makeArray<string>("string!"); // ["string!"]
let boolArray = makeArray(true); // [true]

let promise: Promise<string> = new Promise<string>((resolve, reject) => {
    // resolve(1); // Error, since we're using the generic promise, resolve can only take a string!
    resolve("This is a string.");
});


export {};
