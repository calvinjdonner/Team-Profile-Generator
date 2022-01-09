const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer')

const init = () => {
    const teamInfo = []
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "Please enter Manager's name.",
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log("Please enter Manager's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the Manager's employee ID.",
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log("Please enter the Manager's employee ID.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the Manager's email.",
                validate: managerEmailInput => {
                    if (managerEmailInput) {
                        return true;
                    } else {
                        console.log("Please enter the Manager's email.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the Manager's office number.",
                validate: managerOfficeNumberInput => {
                    if (managerOfficeNumberInput) {
                        return true;
                    } else {
                        console.log("Please enter the Manager's office number.");
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'option',
                message: "What type of employee would you like to add to your team?",
                choices: [
                    'Engineer',
                    'Intern',
                    'Generate Team Profile'
                ],
            }
        ])
        .then(managerInfo => {
            const { option } = managerInfo;

            const manager = new Manager(managerInfo);

            teamInfo.push(manager);

            switch (option) {
                case 'Engineer':
                    addEngineer(teamInfo);
                    break;
                case 'Intern':
                    addIntern(teamInfo);
                    break;
                case "Generate Team":
                    finalizeTeam(teamInfo);
            }
        })
}

// create engineer
const addEngineer = (teamInfo) => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "Please enter engineer's name:",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter engineer's id:",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's id number");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter engineer's email:",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's email");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter engineer's GitHub username:",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's GitHub username");
                        return false;
                    }
                    q
                }
            },
            {
                type: 'list',
                name: 'addTeamMember',
                message: 'Select a team member to add:',
                choices: [
                    'Engineer',
                    'Intern',
                    'Generate Team Profile'
                ]
            }
        ]).then(engineerInfo => {
            const { addTeamMember } = engineerInfo;
            const engineer = new Engineer(engineerInfo);

            teamInfo.push(engineer);

            switch (addTeamMember) {
                case 'Engineer':
                    addEngineer(teamInfo);
                    break;
                case 'Intern':
                    addIntern(teamInfo);
                    break;
                case 'Generate Team Profile':
                    finalizeTeam(teamInfo)
            }
        })
}

// create intern
const addIntern = (teamInfo) => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "Please enter intern's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter intern's id:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's id number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school:",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Select a team member to add:',
            choices: [
                'Engineer',
                'Intern',
                'Generate Team Profile'
            ]
        }
    ]).then(internInfo => {
        const { addTeamMember } = internInfo;
        const intern = new Intern(internInfo);

        teamInfo.push(intern);

        switch (addTeamMember) {
            case 'Engineer':
                addEngineer(teamInfo);
                break;
            case 'Intern':
                addIntern(teamInfo);
                break;
            case 'Generate Team Profile':
                finalizeTeam(teamInfo);
        }
    })
}


const writeToFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
        }

        console.log('File Created! Check dist folder for index.html');
    })
}

const finalizeTeam = teamInfo => {
    const generateHTML = pageTemplate(teamInfo);
    writeToFile(generateHTML);
}

init();