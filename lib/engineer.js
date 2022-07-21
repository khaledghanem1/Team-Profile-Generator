const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
  }
  getGithub(github) {
    this.github = `github.com/${github}`;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
