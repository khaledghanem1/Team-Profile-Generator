class Employee {
  constructor(empName, id, email) {
    this.empName = empName;
    this.id = id;
    this.email = email;
  }
  getName(empName) {
    this.empName = empName;
  }
  getId(id) {
    this.id = id;
  }
  getEmail(email) {
    this.email = email;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
