const Engineer = require('../lib/Engineer');

const calvin = {
    name: 'calvin',
    id: 3,
    email: "calvin@gmail.com",
    github: 'https://github.com/calvin'
}

test('creates engineer object', () => {
    const engineer = new Engineer(calvin);

    expect(engineer).toEqual(expect.any(Object));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('gets name value', () => {
    const engineer = new Engineer(calvin);

    expect(engineer.getName()).toEqual(engineer.name);
})

test('gets id value', () => {
    const engineer = new Engineer(calvin);

    expect(engineer.getId()).toEqual(engineer.id);
})

test('gets email value', () => {
    const engineer = new Engineer(calvin);

    expect(engineer.getEmail()).toEqual(engineer.email);
})

test('gets github value', () => {
    const engineer = new Engineer(calvin);

    expect(engineer.getGithub()).toEqual(engineer.github);
})

test('gets role value, overriden from employee', () => {
    const engineer = new Engineer(calvin);

    expect(engineer.getRole()).toEqual("Engineer");
})