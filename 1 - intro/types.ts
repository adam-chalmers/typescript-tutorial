import moment from "moment";

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

types.method = parse;

function parse(arg: string) {
    return parseInt(arg);
}

export {};
