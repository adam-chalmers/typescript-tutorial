import moment from "moment";

let num: number = 1;
let str: string = "string";
let arr: number[] = [1, 2, 3];

interface Types {
    num: number;
    str: string;
    array: boolean[];
    mom: moment.Moment;
    method: (arg: string) => number;
}

let types: Types = {
    num: 0,
    str: "",
    array: [true, false, null, undefined], // Note that null and undefined here can be made to throw errors using "strictNullChecks": true in tsconfig.json
    mom: moment(),
    method: (arg) => parseInt(arg)
};

function parse(arg: string) {
    return parseInt(arg);
}

types.method = parse;

export {};
