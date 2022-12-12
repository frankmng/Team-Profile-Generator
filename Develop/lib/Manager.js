const Employee = require("./Employee");

class Manager extends Employee {
    constructor(empName, id, email, office_number) {
        super(empName, id, email) 
        this.office_number = office_number
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager