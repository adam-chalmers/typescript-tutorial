interface Advanced {
    optional?: number;
    oneValue: "one";
    twoValues: "one" | "two";
    union: string | number;
}

let adv: Advanced = {
    oneValue: "one",
    twoValues: "two",
    union: 5
};
adv.twoValues = "three"; // Error - "three" is not part of the union "one" | "two"

adv.union = adv.union + "5";

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

type FirstType = {
    one: string;
}

type SecondType = {
    two: number;
}

type IntersectionType = FirstType & SecondType;

type Intersection = First & Second;

let intersection: Intersection = { one: "string", two: 1 };
intersection = third;
let intersectionType: IntersectionType = third;

class FirstClass {
    public prop: string;
    public doTheThing(): number {
        return 0;
    }
}
class SecondClass {
    public prop: string;
    public doTheThing(): number {
        return 1;
    }
}
let first = new FirstClass();
let second: SecondClass = first;


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

let tuple: [string, number] = ["string", 1];
let firstElement = tuple[0]; // Compiler is able to infer that this is a string, rather than (string|number)
let secondElement = tuple[1]; // Compiler knows that this is a number
inferred = tuple;

let foo = typeof(firstElement); // Note the union type that results from the typeof operator

type Alias = string;
let alias: Alias = "This is a string, but it's typed as 'Alias'";

export {};
