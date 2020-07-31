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
    resolve(1); // Error, since we're using the generic promise, resolve can only take a string!
    resolve("This is a string.");
});

async function awaiter<T>(promise: Promise<T>): Promise<T> {
    let val = await promise;
    return val;
}

interface Restricted<T extends { val: number[] }> {
    prop: T
};

let basicRestricted: Restricted<{ val: number[] }> = {
    prop: {
        val: [1]
    }
};

let advancedRestricted: Restricted<{ val: number[], additionalProp: string}> = {
    prop: {
        val: [1],
        additionalProp: "this is a string"
    }
};

let error: Restricted<string> = { prop: "test" }; // Error - string does not extend { val: number[] }

function doTheWrongThing<T>(res: Restricted<T>) {} // Error - T as declared by the function doesn't have the same restrictions necessary to make T a valid type for Restricted

function doTheRightThing<T extends { val: number[] }>(res: Restricted<T>) { // No error, since T is now restricted enough to be compatible with Restricted
    res.prop.val.push(1);
}

function log<T>(obj: T) {
    console.log(obj);
}
log("string");
log(1);
log({ prop: "value" });

export {};
