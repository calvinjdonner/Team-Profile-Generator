class Manager {
    constructor(managerInfo) {
        const { name, id, email } = managerInfo;

        this.name = name;
        this.id = id;
        this.email = email;
    }

};

module.exports = Manager;