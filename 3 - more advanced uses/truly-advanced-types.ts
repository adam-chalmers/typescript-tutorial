interface SeveralProperties {
    one: number,
    two: string,
    three: boolean
}

type KeyOf<T> = keyof T;

let propName: KeyOf<SeveralProperties> = "one";
propName = "four"; // Error - "four" is not a property defined in SeveralProperties

type AllNumbers<T> = { [key in keyof T]: number };
let numbers: AllNumbers<SeveralProperties> = {
    one: 1,
    two: 2,
    three: 3
};

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
let picked: Pick<SeveralProperties, "two" | "three"> = {
    one: 1, // This is an error
    two: "two",
    three: true
};

type Union = "a" | "b" | "c" | "d";
let extracted: Extract<Union, "a" | "d" | "e"> = "d"; // Must be either a or d

type func = (first: string, second: number) => boolean;
let params: Parameters<func> = ["", 1]; // An array with two elements in which the types are in precisely this order
let returnedType: ReturnType<func> = true;

type Conditional<T> = T extends number ? string : never;
let conditional: Conditional<number> = "number!";
let otherConditional: Conditional<string> = 1; // Error - string does not extend number, so Conditional<string> is of type never and can't be used

type ArrayType<T> = T extends Array<infer U> ? U : never;
let arrayType: ArrayType<string[]> = "it's a string!";
let nonArrayType: ArrayType<string> = "error"; // Error - string does not extend Array<T>, so we get 'never'

type PromiseType<T> = T extends Promise<infer U> ? U : never;
type NonPromises<T> = { [key in keyof T]: PromiseType<T[key]> };

type MatchingKeys<T, K> = { [key in keyof T]: T[key] extends K ? key : never };

interface Promises {
    first: Promise<number>;
    second: Promise<string>;
    third: Promise<boolean>;
    fourth: number;
}
let test: MatchingKeys<Promises, Promise<any>> = {
    first: "first",
    second: "second",
    third: "third",
    fourth: "fourth" // Error - 'number' doesn't extend Promise<any>, so 'fourth' is of type 'never'
};
let indexed: MatchingKeys<Promises, Promise<any>>[keyof Promises] = "first"; // "first" | "second" | "third"

type SubType<T, K> = Pick<T, MatchingKeys<T, K>[keyof T]>;

let foo: NonPromises<SubType<Promises, Promise<any>>> = {
    first: 1,
    second: "",
    third: true
};

let asdf: NonPromises<{ a: Promise<string>, b: Promise<number> }> = { a: "string", b: 2 };