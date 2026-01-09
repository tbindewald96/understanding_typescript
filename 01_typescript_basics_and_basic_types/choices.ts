enum Role {
    Admin, // 0
    Editor, // 1
    Guest, // 2
} // Kind of a "custom type"

let userRole: Role = Role.Admin;

// ...

userRole = Role.Guest; // we chose a value from a list of allowed values


let userRole1: 'admin' | 'editor' | 'guest' = 'admin'; // Literal type; the allowed value is exactly 'admin', 'editor', or 'guest'

userRole1 = 'guest'; // we chose a value from a list of allowed values

// Literal type is more popular than enum in modern TypeScript codebases

type Role1 = 'admin' | 'editor' | 'guest'; // Custom type using literal types

function access(role: Role1) {}

type User = {
    name: string;
    age: number;
    role: Role1;
    permissions: string[];
}