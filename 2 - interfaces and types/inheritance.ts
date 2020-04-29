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
let threeD = twoD as ThreeDimensionalPoint;


let num = threeD as number; // Compiler error, since threeD is a ThreeDimensionalPoint, which isn't a number and doesn't have the same properties as the number type
let notReallyANumber = (threeD as unknown) as number; // HACKY EVIL WITCHCRAFT

export {};