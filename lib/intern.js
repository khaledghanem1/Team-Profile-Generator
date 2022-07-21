const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
  getSchool(school) {
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
