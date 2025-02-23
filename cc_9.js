// Task 1 Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name; 
        this.id = id; 
        this.department = department; 
        this.salary = salary
    }; //Creating class employee with properties
    getDetails()   {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`
    }
    //Method that returns string of employee details
    calculateAnnualSalary() { return this.salary * 12}
}
//Returns employee annual salary
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000