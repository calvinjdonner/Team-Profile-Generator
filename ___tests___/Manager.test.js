const Manager = require('../lib/Manager');

const calvin = {
    name: 'calvin',
    id: 2,
    email: "calvin@gmail.com",
    officeNumber: 123
}

test('creates manager object', () => {
    const manager = new Manager(calvin);

    expect(manager).toEqual(expect.any(Object));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets name value', () => {
    const manager = new Manager(calvin);

    expect(manager.getName()).toEqual(manager.name);
})

test('gets id value', () => {
    const manager = new Manager(calvin);

    expect(manager.getId()).toEqual(manager.id);
})

test('gets email value', () => {
    const manager = new Manager(calvin);

    expect(manager.getEmail()).toEqual(manager.email);
})

test('gets office number value', () => {
    const manager = new Manager(calvin);

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
})

test('gets role value, overriden from employee', () => {
    const manager = new Manager(calvin);

    expect(manager.getRole()).toEqual("Manager");
})