interface TwoDimensionalPoint {
    x: number;
    y: number
}

interface ThreeDimensionalPoint extends TwoDimensionalPoint {
    z: number;
}

let obj: ThreeDimensionalPoint = {
    x: 1,
    y: 2,
    z: 3
};

let twoD = obj as TwoDimensionalPoint;
console.log(twoD.z); // Error - property z doesn't exist on a TwoDimensionalPoint!
let threeD = twoD as ThreeDimensionalPoint;
console.log(threeD.z); // No error - property z exists since we're now working with a TwoDimensionalPoint

let implicit: TwoDimensionalPoint = obj;

twoD = {
    x: 9,
    y: 8
};
threeD = twoD; // Compiler error - all ThreeDimensionalPoints are TwoDimensionalPoints, but not all TwoDimensionalPoints are ThreeDimensionalPoints
threeD = twoD as ThreeDimensionalPoint; // This is allowed since a TwoDimensionalPoint CAN be a ThreeDimensionalPoint, and we've used an explicit cast


let num = threeD as number; // Compiler error, since threeD is a ThreeDimensionalPoint, which isn't a number and doesn't have the same properties as the number type
let notReallyANumber = (threeD as unknown) as number; // HACKY EVIL WITCHCRAFT

export {};