class Base {
    public readonly value: number = 5;
    public readonly valueToOverride: string = "Override me!";

    constructor(val: number) {
        this.value = val; // readonly value is modifiable only in the constructor
    }

    public publicValue: string;

    private privateValue: boolean;

    protected protectedValue: number;

    protected _property: number;
    public get property(): number {
        console.log("Accessing backingField");
        return this._property;
    }
    public set property(value: number) {
        this._property = value;
        console.log(`New value for backingField: ${value}`);
    }

    protected _publicGetOnly: string;
    public get publicGetOnly(): string {
        return this._publicGetOnly;
    }

    public func(): string {
        this._property = 1;
        this.value = 1; // Error - can't modify a readonly value from outside the constructor!
        return "Hello World!";
    }

    protected overridable(): number {
        return 2;
    }
}

class Extended extends Base {
    public readonly valueToOverride: string;

    constructor() {
        super(5);
        this.value = 2; // Error - readonly properties can't be set outside of the constructor for the class in which they're defined
        this.valueToOverride =  "Overridden."; // We can do this since we've overridden valueToOverride in this class, so we can modify its value in our constructor
    }

    public method() {
        console.log(this.publicValue);
        console.log(this.protectedValue);
        console.log(this.privateValue); // Error - privateValue is a private property on the base class and can't be accessed by subclasses
    }

    protected overridable(): number {
        return super.overridable() + 1;
    }

    public getOverriddenValue(): number {
        return this.overridable();
    }
}

let base = new Base(2);
base.publicValue = "Public";
base.privateValue = true; // Error - privateValue is private and can't be accessed outside the class

base.property = 2;
base._property = 2; // Error - _backingField is private and can't be accessed outside the class
console.log(base.publicGetOnly);
base.publicGetOnly = "string";

base.func(); // Expected: "Hello World!"
base.overridable(); // Error - protected properties and methods can't be accessed outside of the class and any classes that extend it

let extended = new Extended();
extended.getOverriddenValue(); // Expected: 3
console.log(extended.publicValue); // Fine - public property from base class
console.log(extended.protectedValue); // Error - the Extended class has access to the protectedValue property, but not from outside since it's not public

base = extended;

class NoConstructor {
    public doTheThing() {
        console.log("Hey look, no constructor!");
    }
}

let noConstructor = new NoConstructor();

export {};