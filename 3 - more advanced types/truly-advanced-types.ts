interface SeveralProperties {
    one: number,
    two: string,
    three: boolean
}

type KeyOf<T> = keyof T;

let propName: KeyOf<SeveralProperties> = "one";

type Duplicate<T> = { [key in keyof T]: T[key] };

let duplicate: Duplicate<SeveralProperties> = {
    one: 1,
    two: "two",
    three: true
};

// All of these properties are required, but that's nothing new.
let obj: SeveralProperties = {
    one: 1,
    two: "two",
    three: true
};

// This makes a type definition where each property is optional, allowing you to construct partial objects of any given type
let partialObj: Partial<SeveralProperties> = {};
partialObj.one = 1;
partialObj.two = "two";
partialObj.three = true;

let required: Required<Partial<SeveralProperties>> = {
    one: 1,
    two: "two",
    three: true
}

// Number or boolean since we've excluded string from the possibilities
let exclude: Exclude<number | string | boolean, string> = 1;

let omitted: Omit<SeveralProperties, "one"> = { two: "two", three: true };
omitted.one = 1; // Error since omitted is a type that has excluded the "one" property

// Can't have property "two" here since it's not been picked
let picked: Pick<SeveralProperties, "one" | "three"> = {
    one: 1,
    two: "two", // This is an error
    three: true
};

type Union = "a" | "b" | "c" | "d";
let extracted: Extract<Union, "a" | "d" | "e"> = "d"; // Must be either a or d

type func = (first: string, second: number) => boolean;
let params: Parameters<func> = ["", 1]; // An array with two elements in which the types are in precisely this order
let returnedType: ReturnType<func> = true;