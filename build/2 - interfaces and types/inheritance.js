"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    x: 1,
    y: 2,
    z: 3
};
var twoD = obj;
var threeD = twoD;
// Compiler error!
//let num = threeD as number;
var notReallyANumber = threeD; // HACKY EVIL WITCHCRAFT
