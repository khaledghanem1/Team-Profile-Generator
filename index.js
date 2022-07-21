const inquirer = require("inquirer");

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
            message: "Choose whether you would like to add an engineer or an intern",
            name: "list",
            choices: [
                "Engineer",
                "Intern",
            ],
        },  
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
            type:"input",
            message: "Whats the Intern's Name?",
            name: "internName",
        },
        {
            type:"input",
            message: "Whats the Intern's ID?",
            name: "engineerId",
        },
        {
            type:"input",
            message: "Whats the Intern's email?",
            name: "engineerEmail",
        },
        {
            type:"input",
            message: "Where did the Intern go to school?",
            name: "engineerSchool",
        },
    ])
    .then((response) => { 
        console.log(response) 
        if (response.list = "Engineer") {
            getEngineer()
        }
        if (response.list = "Engineer") {
            getIntern()
        }
    });

    function getEngineer(){
        console.log("engineer selected")
    }

    function getIntern(){
        console.log("Intern selected")
    }