function classExpression() {
    let expression = class {
        public prop: string = "This is a class!";
    }
    return expression;
}

let type = classExpression();
let instantiated = new type();

class MyClass {
    public doTheThing() {
        console.log("Doing the thing!");
    }
}

type Constructor<T = {}> = new (...args: any[]) => T;

function makeTimestamped<T extends Constructor>(Base: T) {
    return class extends Base {
        public readonly timestamp: number = Date.now();
    }
}

let timestamped = makeTimestamped(MyClass);
let obj = new timestamped(); // Note that these two lines could also be written as new (makeTimestamped(MyClass))(), it just looks a little odd
console.log(obj.timestamp);

class Extended extends makeTimestamped(MyClass) {
    public doTheThing() {
        super.doTheThing();
        console.log("Timestamp", this.timestamp);
    }
}

let extended = new Extended();
extended.doTheThing();
// Expected log messages:
// "Doing the thing!"
// "Timestamp", <number>

function makeDisposable<T extends Constructor>(Base: T) {
    return class extends Base {
        private _isDisposed: boolean = false;
        public get isDisposed(): boolean {
            return this._isDisposed;
        }

        public dispose() {
            this._isDisposed = true;
        }
    }
}

function makeTagged<T extends Constructor>(Base: T, tag: string) {
    return class Foo extends Base {
        public readonly tag: string = tag;
    }
}

class AllMixins extends makeTagged(makeDisposable(Extended), "My Tag") {
    public doTheThing() {
        super.doTheThing();
        if (this.isDisposed) {
            console.log("Disposed!");
        }
        else {
            console.log("Not disposed!");
        }
    }

    public dispose() {
        super.dispose();
        console.log(`Disposing object with tag '${this.tag}'`);
    }
}

let all = new AllMixins();
all.dispose();
all.doTheThing();
// Expected log messages:
// "Disposing object with tag 'My Tag'"
// "Doing the thing!"
// "Timestamp", <number>
// "Disposed!"

export {};