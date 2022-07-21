const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type:"input",
            message: "Whats the Managers Name?",
            name: "manager",
        },
        {
            type:"input",
            message: "Whats the Managers employee ID?",
            name: "managerID",
        },
        {
            type:"input",
            message: "Whats the Managers email address?",
            name: "managerEmail",
        },
        {
            type:"input",
            message: "Whats the Managers office number?",
            name: "managerNumber",
        },
        {
            type:"input",
            message: "Whats the Managers office number?",
            name: "managerNumber",
        },
        {
            type:"input",
            message: "Whats the Managers office number?",
            name: "managerNumber",
        },
        {
            type:"input",
            message: "Whats the Engineers name ?",
            name: "engineerName",
        },
        {
            type:"input",
            message: "Whats the Engineers ID ?",
            name: "engineerId",
        },
        {
            type:"input",
            message: "Whats the Engineers email?",
            name: "engineerEmail",
        },
        {
            type:"input",
            message: "Whats the Engineers Github?",
            name: "engineerGithub",
        },
    ])