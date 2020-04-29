"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var types = {
    num: 0,
    str: "",
    array: [true, false, null, undefined],
    mom: moment_1.default(),
    method: function (arg) { return parseInt(arg); }
};
types.method = parse;
function parse(arg) {
    return parseInt(arg);
}
