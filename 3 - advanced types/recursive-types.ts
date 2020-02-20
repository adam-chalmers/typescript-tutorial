// Disclaimer: this is terrible and doesn't work in any way, but shows a simple recursive type combined with generics
type LinkedElement<T> = {
    value: T,
    previous?: LinkedElement<T>,
    next?: LinkedElement<T>
}

let list: LinkedElement<string> = { value: "first" };

function addElement(val: string) {
    let element: LinkedElement<string> = {
        value: val,
        previous: list
    };
    list.next = element;
    list = element;
}

addElement("second");
addElement("third");
addElement("fourth");

export {};