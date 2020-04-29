"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var val = 5; // EVIL
val = "this is a string";
var num = val;
num.toString();
