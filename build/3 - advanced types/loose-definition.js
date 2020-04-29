"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allows for the setting of properties which aren't explicitly named, but match the pattern
var loose = {
    one: 1,
    two: 2
};
// Properties can be added afterwards as long as they continue to follow the pattern
loose.three = 3;
// Property accesses are legal regardless of whether they have been set or not
var four = loose.four; // undefined!
// Note that the "named" property is non-optional here, despite the loose nature of the SomeDefined interface.
var someDefined = {
    named: 1
};
