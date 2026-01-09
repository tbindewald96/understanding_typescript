interface Authenticatable {
    email: string;
    password: string;
    

    login(): void;
    logout(): void;
}

class AuthenticatableUser implements Authenticatable { // implements: class adhering to interface
    constructor(public email: string, public password: string, public role: string) {}

    login() {}
    logout() {}
}

interface Authenticatable { // declaration merging: adding new property to interface
    role: string;
}

function authenticate(user1: Authenticatable) {} // using interface as function parameter type

let user: Authenticatable;

user = { // using interface as object type
    email: 'test@example.com',
    password: 'securePassword123',
    role: 'admin',
    login() {},
    logout() {}
};

interface AuthenticatableAdmin extends Authenticatable {} // interface inheritance