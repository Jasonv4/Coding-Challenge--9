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


//Task 2 Creating a Manager Class 
class Manager extends Employee {
    constructor (name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize
    }; // Creating manager class that extends employee and addomg teamsize
    getDetails() {
        return `manager: ${this.name}, ID, ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Teamsize: ${this.teamSize}`
    }
    calculateBonus() { return this.salary * 1.2};
    calculateAnnualSalary() {return (this.salary * 12) + this.calculateBonus();}
}
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600


// Task 3 Creating a Company Class 
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) { this.employees.push(employee)}
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails()))
    }
} // Creating a company class with property name and an array of employees
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"