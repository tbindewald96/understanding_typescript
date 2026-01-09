function generateError(msg?: string) { // ? indicates that the parameter is optional
    throw new Error(msg);
}

generateError(); // No argument passed
generateError("An error occurred!"); // Argument passed

type User = {
    name: string;
    age: number;
    role?: 'admin' | 'user' | 'guest'; // role is optional
}

let input = '';
const didProvideInput = input || false; // input is falsy, so didProvideInput will be false 

let input1 = '';
const didProvideInput1 = input1 ?? false; // ?? input1 is not null or undefined, so didProvideInput1 will be ''