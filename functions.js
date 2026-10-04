// Basic Functions
{
  function hello() {
    console.log("Hello Everyone");
  }

  function welcome() {
    console.log("Welcome to JavaScript");
  }

  function navi() {
    console.log("Your Name");
  }

  function message() {
    console.log("Keep learning!");
    console.log("Practice every day!");
    console.log("You can do it!");
  }

  function numbers() {
    for (let number = 1; number <= 5; number++) {
      console.log(number);
    }
  }

  function check() {
    const isLearning = true;
    if (isLearning) {
      console.log("The condition is true");
    }
  }

  function details() {
    console.log("Name: Your Name");
    console.log("Qualification: Your Qualification");
    console.log("Role: Your Role");
  }

  function company() {
    console.log("Your Company");
  }

  function welcomeUser() {
    console.log("Welcome, user!");
  }

  function firstFunction() {
    console.log("This is the first function.");
  }

  function secondFunction() {
    console.log("This is the second function.");
  }

  hello();
  welcome();
  navi();
  message();
  numbers();
  check();
  details();
  company();
  welcomeUser();
  welcomeUser();
  welcomeUser();
  firstFunction();
  secondFunction();
}

// Parameters and Arguments
{
  function printValue(value) {
    console.log(value);
  }

  function printValues(first, second) {
    console.log(first, second);
  }

  function add(a, b) {
    console.log(a + b);
  }

  function sub(a, b) {
    console.log(a - b);
  }

  function multiply(a, b) {
    console.log(a * b);
  }

  function divide(a, b) {
    console.log(a / b);
  }

  function student(name, age) {
    console.log(`Student: ${name}, Age: ${age}`);
  }

  function employee(name, role, salary) {
    console.log(`Name: ${name}, Role: ${role}, Salary: ${salary}`);
  }

  function fourParameters(one, two, three, four) {
    console.log(one, two, three, four);
  }

  function sixParameters(one, two, three, four, five, six) {
    console.log(one, two, three, four, five, six);
  }

  printValue("A parameter value");
  printValues("First value", "Second value");
  add(10, 5);
  sub(10, 5);
  multiply(10, 5);
  divide(10, 5);
  student("Alex", 20);
  employee("Jordan", "Designer", 60000);
  fourParameters("one", "two", "three", "four");
  sixParameters("one", "two", "three", "four", "five", "six");
}

// Default Parameters
{
  function student(name, department = "Computer Science", cgpa) {
    console.log(`Name: ${name}, Department: ${department}, CGPA: ${cgpa}`);
  }

  function user(name, age = 18) {
    console.log(`Name: ${name}, Age: ${age}`);
  }

  function employee(name, role = "Developer") {
    console.log(`Name: ${name}, Role: ${role}`);
  }

  function form(name, department, cgpa, disability = "no") {
    console.log(
      `Name: ${name}, Department: ${department}, CGPA: ${cgpa}, Disability: ${disability}`,
    );
  }

  function course(name, level, mode = "online") {
    console.log(`Course: ${name}, Level: ${level}, Mode: ${mode}`);
  }

  student("Alex", undefined, 3.8);
  user("Taylor");
  employee("Morgan");
  form("Sam", "Mathematics", 3.7);
  form("Jamie", "Physics", 3.9, "yes");
  course("JavaScript", "Beginner");
}

// Return
{
  function returnAddition(a, b) {
    return a + b;
  }

  function returnSubtraction(a, b) {
    return a - b;
  }

  function returnMultiplication(a, b) {
    return a * b;
  }

  function returnDivision(a, b) {
    return a / b;
  }

  function salary() {
    return 40000;
  }

  function returnEmployeeSalary(employeeSalary) {
    return employeeSalary;
  }

  function returnName() {
    return "Alex";
  }

  function getResult(marks) {
    return marks >= 35 ? "Pass" : "Fail";
  }

  function getDiscount(price, discount) {
    return discount;
  }

  function printResult(result) {
    console.log(`Result: ${result}`);
  }

  const additionResult = returnAddition(12, 8);
  console.log(additionResult);
  console.log(returnSubtraction(12, 8));
  console.log(returnMultiplication(12, 8));
  console.log(returnDivision(12, 8));

  const monthlySalary = salary();
  console.log(monthlySalary);
  console.log(returnEmployeeSalary(55000));

  const personName = returnName();
  console.log(personName);
  console.log(getResult(40));
  console.log(getResult(30));
  console.log(getDiscount(100, 15));
  printResult(additionResult);
}

// Outer Scope
{
  const greeting = "Hello from the outer scope";
  const person = {
    name: "Alex",
    designation: "Developer",
  };
  const salary = 50000;
  const employeeDetails = {
    name: "Jordan",
    department: "Engineering",
    location: "Toronto",
  };
  const sharedMessage = "Both functions can access this variable";

  function printGreeting() {
    console.log(greeting);
  }

  function printPerson() {
    console.log(person.name, person.designation);
  }

  function printSalaryWithBonus() {
    const bonus = 5000;
    console.log(salary + bonus);
  }

  function printEmployeeDetails() {
    console.log(
      employeeDetails.name,
      employeeDetails.department,
      employeeDetails.location,
    );
  }

  function firstSharedFunction() {
    console.log(sharedMessage);
  }

  function secondSharedFunction() {
    console.log(sharedMessage);
  }

  printGreeting();
  printPerson();
  printSalaryWithBonus();
  printEmployeeDetails();
  firstSharedFunction();
  secondSharedFunction();
}

// Named, Anonymous, and Arrow Functions
{
  function namedFunction(value) {
    console.log(value);
  }

  const anonymousFunction = function (value) {
    console.log(value);
  };

  const arrowFunction = (value) => {
    console.log(value);
  };

  const addWithArrow = (a, b) => a + b;

  function namedAdd(a, b) {
    return a + b;
  }

  const anonymousAdd = function (a, b) {
    return a + b;
  };

  const arrowAdd = (a, b) => a + b;

  namedFunction("Named function");
  anonymousFunction("Anonymous function");
  arrowFunction("Arrow function");
  console.log(addWithArrow(3, 4));
  console.log(namedAdd(3, 4));
  console.log(anonymousAdd(3, 4));
  console.log(arrowAdd(3, 4));
}

// IIFE
{
  (function () {
    console.log("Hello JavaScript");
  })();

  (function (name) {
    console.log(`Hello ${name}`);
  })("Alex");

  (function (product, discount) {
    console.log(`Special offer: ${discount}% off ${product}!`);
  })("Headphones", 20);
}

// Callback and Higher-Order Functions
{
  function add(callback, a, b) {
    console.log(`Addition: ${a + b}`);
    callback(a, b);
  }

  function sub(a, b) {
    console.log(`Subtraction: ${a - b}`);
  }

  add(sub, 10, 4);
}
