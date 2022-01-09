const Intern = require('../lib/Intern');

const calvin = {
    name: 'calvin',
    id: 4,
    email: "calvin@gmail.com",
    school: "BYU"
}

test('creates intern object', () => {
    const intern = new Intern(calvin);

    expect(intern).toEqual(expect.any(Object));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('gets name value', () => {
    const intern = new Intern(calvin);

    expect(intern.getName()).toEqual(intern.name);
})

test('gets id value', () => {
    const intern = new Intern(calvin);

    expect(intern.getId()).toEqual(intern.id);
})

test('gets email value', () => {
    const intern = new Intern(calvin);

    expect(intern.getEmail()).toEqual(intern.email);
})

test('gets school value', () => {
    const intern = new Intern(calvin);

    expect(intern.getSchool()).toEqual(intern.school);
})

test('gets role value, overriden from employee', () => {
    const intern = new Intern(calvin);

    expect(intern.getRole()).toEqual("Intern");
})