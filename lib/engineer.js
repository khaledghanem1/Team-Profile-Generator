const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
    super(empName, id, email);
  }

  getGithub(github) {
    this.github = `github.com/${github}`;
  }
  getRole() {
    return "Engineer";
  }
  
}
module.exports = Engineer;
