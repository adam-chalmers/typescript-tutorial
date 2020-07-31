type LinkedElement<T> = {
    value: T,
    previous?: LinkedElement<T>,
    next?: LinkedElement<T>
}

// Disclaimer: this is a quick demonstration and probably isn't functional
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