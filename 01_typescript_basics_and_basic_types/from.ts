const inputEl = document.getElementById('user-name');

if (!inputEl) {
    throw new Error('Could not find element');
    } // We narrow down the type here

console.log(inputEl); // No error now

const inputEl1 = document.getElementById('group-name')!; // Using the non-null assertion operator; only use if you're sure that the value is not null

console.log(inputEl1);

const inputEl2 = document.getElementById('account-name') as HTMLInputElement | null; // Using type assertion to specify the expected type

console.log(inputEl2?.value); // Using optional chaining to safely access the value property