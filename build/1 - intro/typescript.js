"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------- Now here's the same thing with some typing ----------------------
var value = { property: "this is a string", otherProperty: 1 };
function doTheThing(param) {
    console.log(param.property);
}
doTheThing(value);
