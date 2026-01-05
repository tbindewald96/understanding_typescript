function add(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}

function logAndThrow(errorMessage: string): never {
    console.error(errorMessage);
    throw new Error(errorMessage); // inferred return type is 'never'; works also in JavaScript
}

const logMsg = (msg: string) => {
    console.log(msg);
}; // you can create a function like this in JavaScript

function performJob(cb: (msg: string) => void) {
    // ...
    cb('Job performed');
    // ...
}

performJob(logMsg);

type User1 = {
    name: string;
    age: number;
    greet: (msg: string) => void;
}

let user: User1 = {
    name: 'Alice',
    age: 30,
    greet() {
        console.log('Hello!');
        return this.name;
    }
}