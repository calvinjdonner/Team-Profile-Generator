const generateHTML = require('./src/page-template');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

function createCards() {
    function Manager() {
        return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name');
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the your ID #?',
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log('Please enter your ID number')
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is your email?',
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log('Please enter a valid email')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your office #?',
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log('Please enter your office number')
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        ])

        return createTeam();
    }

    function createTeam() {
        return inquirer.prompt([{
                type: 'list',
                name: 'role',
                message: 'Select your team members role',
                choices: ['Engineer', 'Intern', 'Exit']
            },
            {
                type: 'input',
                name: 'employeeName',
                message: 'What is the employee name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'Please provide the employee ID',
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log('Please enter a valid ID')
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'Enter employee email address',
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log('Please enter a valid email')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please provide the employee github username',
                when: (input) => input.role === 'Engineer',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please provide a valid github username')
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter the intern's school",
                when: (input) => input.role === 'Intern',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the school")
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you liek to add more team members?',
                default: false
            }
        ])

        .then(employeeData => {
            let { employeeName, employeeId, employeeEmail, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(employeeName, employeeId, employeeEmail, github);
                console.log(employee);

            } else if (role === 'Intern') {
                employee = new Intern(employeeName, employeeId, employeeEmail, school);
                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmAddEmployee) {
                return createTeam(teamArray);
            } else {
                return teamArray;
            }

        })
    }
};

function writeFile() {
    fs.writeFile('./dist/team.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team cards have been successfully created. See team.html for results!")
        }
    })
};

Manager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });