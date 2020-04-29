"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------- Here's some valid TypeScript that looks exactly like regular javascript - because it is! ----------------------
var value = { property: "this is a string", otherProperty: 1 };
// This only works because we have "noImplicitAny": true in our tsconfig.json
function doTheThing(param) {
    console.log(param.property);
}
doTheThing(value);
