const inquirer = require("inquirer");

const managerQuestion = () => {
    inquirer
        .prompt([
            {
                type:"input",
                message: "Whats the Manager's Name?",
                name: "manager",
            },
            {
                type:"input",
                message: "Whats the Manager's employee ID?",
                name: "managerID",
            },
            {
                type:"input",
                message: "Whats the Manager's email address?",
                name: "managerEmail",
            },
            {
                type: "list",
                message: "Choose whether you would like to add an engineer/intern, or finish building the team",
                name: "list",
                choices: [
                    "Engineer",
                    "Intern",
                    "Finish Building"
                ],
            }
        ])
        .then((response) => { 
            console.log(response) 
            if (response.list === "Engineer") {
                getEngineer()
            } else if (response.list === "Intern") {
                getIntern()
            } else {
                console.log("error");
            }
        });
}
managerQuestion()

const getEngineer = () => {
    console.log("engineer selected")
    inquirer
    .prompt([
        {
            type:"input",
            message: "Whats the Engineer's name ?",
            name: "engineerName",
            },
            {
                type:"input",
                message: "Whats the Engineer's ID ?",
                name: "engineerId",
            },
            {
                type:"input",
                message: "Whats the Engineer's email?",
                name: "engineerEmail",
            },
            {
                type:"input",
                message: "Whats the Engineer's Github?",
                name: "engineerGithub",
            },
            {
                type: "list",
                message: "Choose whether you would like to add an engineer/intern, or finish building the team",
                name: "list",
                choices: [
                    "Engineer",
                    "Intern",
                    "Finish Building"
                ],
            }
    ])
    .then((response) => {
        if (response.list === "Engineer") {
            getEngineer()
        } else if (response.list === "Intern") {
            getIntern()
        } else {
            console.log("error");
        }
    })
}

const getIntern = () => {
    console.log("Intern selected")
    inquirer
    .prompt([
        {
            type:"input",
            message: "Whats the Intern's Name?",
            name: "internName",
        },
        {
            type:"input",
            message: "Whats the Intern's ID?",
            name: "internId",
        },
        {
            type:"input",
            message: "Whats the Intern's email?",
            name: "internEmail",
        },
        {
            type:"input",
            message: "Where did the Intern go to school?",
            name: "internSchool",
        },
        {
            type: "list",
            message: "Choose whether you would like to add an engineer/intern, or finish building the team",
            name: "list",
            choices: [
                "Engineer",
                "Intern",
            ],
        }
    ])
    .then((response) => {
        if (response.list === "Engineer") {
            getEngineer()
        } else if (response.list === "Intern") {
            getIntern()
        } else {
            console.log("error");
        }
    })
}