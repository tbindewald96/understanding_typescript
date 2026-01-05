console.log('Hello, World!');

let userName: string; // type annotation or type assignment // number, boolean
let userAge = 29; 

// ...

userName = 'Tobi';
// userAge = '29'; // This would cause a type error

function add(a: number, b = 5) {
    return a + b;
}

console.log(add(10)); 
// add('10'); // This would cause a type error
add(10, 16);