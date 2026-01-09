class User { // convention is to start name with uppercase
    name: string;
    age: number;
    readonly hobbies: string[] = []; // readonly makes the property immutable after initialization

    constructor(n: string, a: number) { // constructor is a special method to initialize objects
        this.name = n;
        this.age = a;
    }
}

class Group {
    constructor(public groupName: string, public users: User[]) { // public keyword automatically creates and initializes properties
    }
}

const group = new Group("Developers", [
    new User("Alice", 30),
    new User("Bob", 25)
]);

console.log(group);