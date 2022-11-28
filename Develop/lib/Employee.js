// Parent class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee'
    }
}
// const emp = new Employee("Johnson", 1211, "email");

// console.log(emp.getName())