"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list = { value: "first" };
function addElement(val) {
    var element = {
        value: val,
        previous: list
    };
    list.next = element;
    list = element;
}
addElement("second");
addElement("third");
addElement("fourth");
