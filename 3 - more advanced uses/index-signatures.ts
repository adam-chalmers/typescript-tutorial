interface IndexSignature {
    [key: string]: number
}

// Allows for the setting of properties which aren't explicitly named, but match the pattern
let index: IndexSignature = {
    one: 1,
    two: 2
};

// Properties can be added afterwards as long as they continue to follow the pattern
index.three = 3;

// Property accesses are legal regardless of whether they have been set or not
let four = index.four; // undefined!

for (let key in index) {
    let val = index[key];
    val.toFixed(2); // val is a number
}

interface Named {
    named: number;
}

interface SomeDefined extends Named {
    [key: string]: number
}

// Note that the "named" property is non-optional here, despite the loose nature of the SomeDefined interface.
let someDefined: SomeDefined = {
    named: 1
};

export {};