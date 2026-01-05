let hobbies = ['Sports', 'Cooking']; // type inferred as string[]

//hobbies.push(10); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

let users: string[]; //array of strings

let users1: (string | number)[]; //array of strings or numbers

users1 = ['Tobi', 29, 'Anna'];

let users2: Array<string | number>; //generic array type

let possibleResults: [number, number]; // [1, -1] // tuple type

let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Tobi',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'admin',
        id: 1
    }
};

let val: {} = 'some text'; // object type can be anything except null and undefined

const someObj = {}; // type inferred as {}

const someObj1 = {
    name: 'Tobi'
}; // type inferred as { name: string; }

let data: Record<string, number | string>    ;

//data = undefined; // Error: Type 'undefined' is not assignable to type '{}'

data = {
    entry1: 'some text',
    entry2: 42
}