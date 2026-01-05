let age: any = 29; // use 'any' type only as a last resort if you can't be more specific

// ...

age = '29'; 
age = false;
age = {};
age = [];

let age1: string | number = 29; // union type

age1 = '29';
age1 = 30;