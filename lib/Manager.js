class Manager {
    constructor (name, managerId, managerEmail, officeNumber) {
        this.name = name;
        this.id = managerId;
        this.email = managerEmail;
        this.officeNumber = officeNumber;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;