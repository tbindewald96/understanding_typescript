const userName = 'Tobi';

let age = 29;

let hasPet = true; // var shouldn't be used

var result; // if var is defined outside any function, it is globally scoped, meaning you can access it from anywhere in the code

function add(a: number, b: number): number {
    var result; // if var is defined inside the function, it is function-scoped, meaning you can access it anywhere within that function
    result = a + b;
    return result;
}
console.log(result);

const subtract = (a: number, b: number = 1): number => a - b; // arrow function

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button')!;

if (button) {
    button.addEventListener('click', event => console.log(event)); // arrow function used as callback
}

const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking'];

activeHobbies.push('reading');

activeHobbies.push(...hobbies); // spread operator, which allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected

const person = {
    firstName: 'Tobi',
    age: 29
}; 

const copiedPerson = { ...person }; // object spread operator to create a shallow copy of an object

const multiply = (...numbers: number[]) => {

};

const multiplyNumbers = multiply(5, 10, 2, 3.7); // rest parameters to represent an indefinite number of arguments as an array

const [hobby1, hobby2, ...remainingHobbies] = hobbies; // array destructuring

const { firstName: userFirstName, age: userAge } = person; // object destructuring with renaming

console.log(userFirstName, userAge);