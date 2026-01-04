enum Role {
    Admin, // 0
    Editor, // 1
    Guest, // 2
} // Kind of a "custom type"

let userRole: Role = Role.Admin;

// ...

userRole = Role.Guest; // we chose a value from a list of allowed values


