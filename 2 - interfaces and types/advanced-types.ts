interface Advanced {
    optional?: number;
    oneValue: "one";
    twoValues: "one" | "two";
    union: string | boolean;
}

let adv: Advanced = {
    oneValue: "one",
    twoValues: "one",
    union: true
};

interface First {
    one: string;
}

interface Second {
    two: number;
}

interface Third extends First, Second {}

let third: Third = {
    one: "",
    two: 0
}

type Intersection = First & Second;

let intersection: Intersection = { one: "string", two: 1 };
intersection = third;

let inferred = ["string", 1];
// We know that this is a string, but the compiler has no way of knowing this since the array type is either string or number, so that type carries over
let firstInferred = inferred[0];

function returnFirst(first: number, second: string, condition: boolean) {
    if (condition) {
        return first;
    }
    else {
        return second;
    }
}

// Again, we know that this must be a number based on our logic, but the compiler can't know that and so we get an inferred union type
let inferredValue = returnFirst(1, "string", true);

export {};
