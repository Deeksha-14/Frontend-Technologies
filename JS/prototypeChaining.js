// Parent prototype (Person)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Child object (EmployedPerson) that will inherit from Person
function EmployedPerson(name, age, dept, salary) {
  // Call the parent constructor to set name and age
  Person.call(this, name, age);
  this.dept = dept;
  this.salary = salary;
}

// Set the prototype of EmployedPerson to be an instance of Person
EmployedPerson.prototype = Object.create(Person.prototype);
EmployedPerson.prototype.constructor = EmployedPerson;

// Adding new methods to EmployedPerson prototype
EmployedPerson.prototype.getJobDetails = function() {
  console.log(`I work in the ${this.dept} department and earn $${this.salary}.`);
};

// Creating an object of EmployedPerson
const john = new EmployedPerson('John', 30, 'Engineering', 50000);

john.greet();  // Output: Hello, my name is John and I am 30 years old.
john.getJobDetails();  // Output: I work in the Engineering department and earn $50000.
