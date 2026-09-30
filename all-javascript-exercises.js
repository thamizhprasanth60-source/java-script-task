// JavaScript — 50 Tasks

// Logical Operators
console.log("=== Logical Operators ===");

console.log("1. ", 10 > 5 && 20 > 15);
console.log("2. ", 10 > 15 && 20 > 10);
console.log("3. ", 10 > 20 || 15 > 10);
console.log("4. ", 5 > 10 || 20 < 15);
console.log("5. ", !(10 > 5));
console.log("6. ", !(10 < 5));

let conditionA = 10 > 5;
let conditionB = 20 < 15;
let conditionC = 8 === 8;
console.log("7. ", (conditionA && conditionB) || conditionC);

let conditionD = 12 > 10;
let conditionE = 4 < 2;
let conditionF = 7 !== 7;
console.log("8. ", (conditionD && !conditionE) || conditionF);

// Ternary Operator
console.log("\n=== Ternary Operator ===");

let age = 18;
console.log("1. ", age >= 18 ? "Eligible" : "Not Eligible");

let marks = 35;
console.log("2. ", marks >= 35 ? "Pass" : "Fail");

let number = 12;
console.log("3. ", number > 10 ? "Greater than 10" : "Less than or equal to 10");

let evenOddNumber = 7;
console.log("4. ", evenOddNumber % 2 === 0 ? "Even" : "Odd");

let salary = 35000;
console.log("5. ", salary > 30000 ? "Good Salary" : "Low Salary");

// Concatenation & Template Strings
console.log("\n=== Concatenation & Template Strings ===");

let firstName = "Prasanth";
let lastName = "Kumar";
let city = "Hyderabad";
console.log("1. ", firstName + " " + lastName + " " + city);

let name = "Prasanth";
let ageValue = 22;
console.log("2. ", name + " " + ageValue);

let product = "Laptop";
let price = 45000;
let brand = "Dell";
console.log("3. ", "The " + brand + " " + product + " costs Rs. " + price + ".");

let userName = "Prasanth";
let qualification = "B.Tech";
let company = "Example Company";
console.log(`4. ${userName} - ${qualification} - ${company}`);

let personName = "Prasanth";
let personAge = 22;
let personCity = "Hyderabad";
console.log(`5. ${personName} is ${personAge} years old and lives in ${personCity}.`);

// Type Casting — Implicit
console.log("\n=== Type Casting — Implicit ===");

let implicitA = "JavaScript " + 2024;
console.log("1. ", implicitA, "| Type:", typeof implicitA);

let implicitB = 10 + 20;
console.log("2. ", implicitB, "| Type:", typeof implicitB);

let implicitC = 10 + true;
console.log("3. ", implicitC, "| Type:", typeof implicitC);

let implicitD = 10 + null;
console.log("4. ", implicitD, "| Type:", typeof implicitD);

let implicitE = "Hello " + true;
console.log("5. ", implicitE, "| Type:", typeof implicitE);

let implicitF = "Hello " + ["A", "B"];
console.log("6. ", implicitF, "| Type:", typeof implicitF);

let implicitG = 10 + { key: "value" };
console.log("7. ", implicitG, "| Type:", typeof implicitG);

let implicitH = "5" + 2;
let implicitI = 5 + false;
let implicitJ = 5 + null;
console.log("8. ", implicitH, "| Type:", typeof implicitH);
console.log("   ", implicitI, "| Type:", typeof implicitI);
console.log("   ", implicitJ, "| Type:", typeof implicitJ);

// Type Casting — Explicit
console.log("\n=== Type Casting — Explicit ===");

console.log("1. ", Number("100"));
console.log("2. ", Number("25"), "| Type:", typeof Number("25"));
console.log("3. ", Number(true));
console.log("4. ", Number(false));
console.log("5. ", Number(""));
console.log("6. ", Number(null));
console.log("7. ", Number(undefined));
console.log("8. ", Boolean("Hello"));
console.log("9. ", Boolean(""));
console.log("10. ", Boolean(0), Boolean(1), Boolean(-1));
console.log("11. ", Boolean([]));
console.log("12. ", Boolean({}));

// Conditional Statements
console.log("\n=== Conditional Statements ===");

let ageIf = 20;
if (ageIf >= 18) {
  console.log("1. Eligible");
}

let voteAge = 17;
if (voteAge >= 18) {
  console.log("2. Eligible to vote");
} else {
  console.log("2. Not eligible to vote");
}

let marksValue = 40;
if (marksValue >= 35) {
  console.log("3. Pass");
} else {
  console.log("3. Fail");
}

let time = 14;
if (time >= 1 && time <= 6) {
  console.log("4. Early Morning");
} else if (time >= 7 && time <= 12) {
  console.log("4. Morning");
} else if (time >= 13 && time <= 17) {
  console.log("4. Afternoon");
} else if (time >= 18 && time <= 19) {
  console.log("4. Evening");
} else if (time >= 20 && time <= 24) {
  console.log("4. Night");
} else {
  console.log("4. Invalid Time");
}

let temperature = 28;
if (temperature > 35) {
  console.log("5. Hot");
} else if (temperature >= 20 && temperature <= 35) {
  console.log("5. Normal");
} else {
  console.log("5. Cold");
}

let personAgeNested = 21;
let height = 175;
let weight = 65;
if (personAgeNested >= 18) {
  if (height >= 170) {
    if (weight >= 60) {
      console.log("6. Eligible");
    }
  }
}

// Switch Statement
console.log("\n=== Switch Statement ===");

let trafficLight = "green";
switch (trafficLight) {
  case "red":
    console.log("1. Stop");
    break;
  case "yellow":
    console.log("1. Ready");
    break;
  case "green":
    console.log("1. Go");
    break;
  default:
    console.log("1. Invalid Light");
}

let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("2. Monday");
    break;
  case "Tuesday":
    console.log("2. Tuesday");
    break;
  case "Wednesday":
    console.log("2. Wednesday");
    break;
  case "Thursday":
    console.log("2. Thursday");
    break;
  case "Friday":
    console.log("2. Friday");
    break;
  case "Saturday":
    console.log("2. Saturday");
    break;
  case "Sunday":
    console.log("2. Sunday");
    break;
  default:
    console.log("2. Invalid day");
}

let choice = 2;
switch (choice) {
  case 1:
    console.log("3. Start");
    break;
  case 2:
    console.log("3. Settings");
    break;
  case 3:
    console.log("3. Exit");
    break;
  default:
    console.log("3. Invalid choice");
}

// Loops
console.log("\n=== Loops ===");

console.log("1. For loop from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("2. While loop from 10 to 1:");
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}

let fruits = ["Apple", "Banana", "Mango", "Grapes"];
console.log("3. for...of fruits:");
for (const fruit of fruits) {
  console.log(fruit);
}

let employee = { name: "Ravi", role: "Developer", experience: 3 };
console.log("4. for...in object:");
for (const key in employee) {
  console.log(key + ": " + employee[key]);
}
