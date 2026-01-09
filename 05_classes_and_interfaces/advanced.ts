class User {
    constructor(private firstName: string, protected lastName: string) {} // Access Modifiers: private and protected

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const user = new User("John", "Doe");
console.log(user.fullName); // Accessing the getter to print full name

class Group {
    private _groupName: string = '';
    private groupSize: number = 0;

    set groupName(name: string) {
        this._groupName = name.toUpperCase(); // Example of processing input in setter
    }
    static eid = 'USER-GROUP-001'; // Static property shared across all instances

    static greet() {
        console.log("Welcome to the Group!");
    }
}

console.log(Group.eid); // Accessing static property without creating an instance
Group.greet(); // Calling static method without creating an instance

class Employee extends User { // Inheritance: Employee extends User
    constructor(public jobTitle: string, firstName: string, lastName: string) { 
        super(firstName, lastName);
    } 

    work() {
        //...
        this.fullName; // Accessing inherited getter
    }
}

abstract class UIElement {
    constructor(public identifier: string) {}

    clone(targetLocation: string) {}
}

//let UIElement = new UIElement("header"); // Error: Cannot create an instance of an abstract class

class SideDrawerElement extends UIElement {
  constructor(public identifier: string) {
    super(identifier);
  }
  //...
}