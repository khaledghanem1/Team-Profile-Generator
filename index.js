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
    ])
    .then((response) => { 
        console.log(response) 
        if (response.choices = "Engineer")
    });