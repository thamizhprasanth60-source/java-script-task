// Variables & Data Types
console.log("=== Variables & Data Types ===");

let myName = "Prasanth";
console.log("1. Name:", myName, "| Type:", typeof myName);

let age = 22;
console.log("2. Age:", age, "| Type:", typeof age);

let isLearning = true;
console.log("3. Boolean:", isLearning, "| Type:", typeof isLearning);

let unassigned;
console.log("4. Unassigned:", unassigned, "| Type:", typeof unassigned);

let nullValue = null;
console.log("5. Null:", nullValue, "| Type:", typeof nullValue);

let stringValue = "JavaScript";
let numberValue = 100;
let booleanValue = false;
let undefinedValue = undefined;
let anotherNullValue = null;
console.log("6. Five values:", stringValue, numberValue, booleanValue, undefinedValue, anotherNullValue);

let qualification = "B.Tech";
console.log("7. Qualification type:", typeof qualification);

let salary = 45000;
console.log("8. Salary is a number:", typeof salary === "number");

let numericString = "100";
let actualNumber = 100;
console.log("9. Types:", typeof numericString, typeof actualNumber);

let personalName = "Prasanth";
let personalAge = 22;
let personalQualification = "B.Tech";
let workingStatus = true;
console.log("10. Personal details:");
console.log(personalName, typeof personalName);
console.log(personalAge, typeof personalAge);
console.log(personalQualification, typeof personalQualification);
console.log(workingStatus, typeof workingStatus);

// Arrays
console.log("\n=== Arrays ===");

let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];
console.log("1. Fruits:", fruits);

let fiveNumbers = [10, 20, 30, 40, 50];
console.log("2. First number:", fiveNumbers[0]);

let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
console.log("3. Third color:", colors[2]);

let mobileBrands = ["Samsung", "Apple", "OnePlus", "Xiaomi", "Vivo"];
console.log("4. Last mobile brand:", mobileBrands[mobileBrands.length - 1]);

let sevenNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log("5. Second-last number:", sevenNumbers[sevenNumbers.length - 2]);

let favoriteFoods = ["Pizza", "Burger", "Pasta", "Salad", "Biryani"];
console.log("6. First, third, and last foods:",
  favoriteFoods[0],
  favoriteFoods[2],
  favoriteFoods[favoriteFoods.length - 1]);

let cricketers = ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Sachin Tendulkar", "Jasprit Bumrah"];
console.log("7. Fourth cricketer:", cricketers[3]);

let toys = ["Car", "Robot", "Doll", "Train"];
console.log("8. Last toy:", toys[toys.length - 1]);

let tenValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("9. First, last, and second-last:",
  tenValues[0],
  tenValues[tenValues.length - 1],
  tenValues[tenValues.length - 2]);

let mixedArray = ["Mango", "Toy car", "MS Dhoni"];
console.log("10. Mixed array:", mixedArray);
console.log("Individual values:", mixedArray[0], mixedArray[1], mixedArray[2]);

// Objects
console.log("\n=== Objects ===");

let person = { name: "Prasanth", age: 22, city: "Hyderabad" };
console.log("1. Person:", person);

let profile = { name: "Prasanth", qualification: "B.Tech", company: "Example Company" };
console.log("2. Company:", profile.company);

let fruitObject = { fruits: ["Apple", "Banana", "Mango"] };
console.log("3. Second fruit:", fruitObject.fruits[1]);

let toyObject = { toys: ["Car", "Robot", "Train"] };
console.log("4. Last toy:", toyObject.toys[toyObject.toys.length - 1]);

let cricketerObject = { cricketer: "Virat Kohli", team: "India" };
console.log("5. Cricketer:", cricketerObject.cricketer);

let things = { fruitName: "Mango", toyName: "Toy car", cricketer: "MS Dhoni" };
console.log("6. Properties:", things.fruitName, things.toyName, things.cricketer);

let school = {
  students: ["Asha", "Ravi", "Meena"],
  courses: ["JavaScript", "HTML", "CSS"]
};
console.log("7. First student:", school.students[0]);
console.log("Second course:", school.courses[1]);

let mobileObject = { mobile: ["Samsung", "Apple", "OnePlus"] };
console.log("8. Third mobile:", mobileObject.mobile[2]);

let employee = {
  employeeName: "Ravi",
  skills: ["JavaScript", "HTML", "CSS"],
  experience: 3
};
console.log("9. Second skill:", employee.skills[1]);

let personalInfo = {
  name: "Prasanth",
  age: 22,
  qualification: "B.Tech",
  city: "Hyderabad"
};
console.log("10. Personal information:", personalInfo.name, personalInfo.age, personalInfo.city);

// Arithmetic Operators
console.log("\n=== Arithmetic Operators ===");

let firstNumber = 20;
let secondNumber = 10;
console.log("1. Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);

let remainderA = 17;
let remainderB = 5;
console.log("2. Remainder:", remainderA % remainderB);

console.log("3. 2 ** 5:", 2 ** 5);

let arithmeticA = 8;
let arithmeticB = 3;
console.log("4. +:", arithmeticA + arithmeticB);
console.log("-:", arithmeticA - arithmeticB);
console.log("*:", arithmeticA * arithmeticB);
console.log("/:", arithmeticA / arithmeticB);
console.log("%:", arithmeticA % arithmeticB);
console.log("**:", arithmeticA ** arithmeticB);

let increasedValue = 10;
increasedValue = increasedValue + 5;
console.log("5. Value after adding 5:", increasedValue);

// Increment & Decrement
console.log("\n=== Increment & Decrement ===");

let preIncrementValue = 10;
console.log("1. Pre-increment:", ++preIncrementValue);

let postIncrementValue = 10;
console.log("2. Post-increment result:", postIncrementValue++);
console.log("Value afterward:", postIncrementValue);

let preDecrementValue = 20;
console.log("3. Pre-decrement:", --preDecrementValue);

let postDecrementValue = 20;
console.log("4. Post-decrement result:", postDecrementValue--);
console.log("Value afterward:", postDecrementValue);

let preExample = 5;
let postExample = 5;
console.log("5. Pre-increment returns:", ++preExample);
console.log("Post-increment returns:", postExample++);
console.log("Values afterward:", preExample, postExample);

// Assignment Operators
console.log("\n=== Assignment Operators ===");

let plusA = 20;
let plusB = 10;
plusA += plusB;
console.log("1. += result:", plusA);

let minusA = 50;
let minusB = 20;
minusA -= minusB;
console.log("2. -= result:", minusA);

let multiplyA = 10;
let multiplyB = 5;
multiplyA *= multiplyB;
console.log("3. *= result:", multiplyA);

let divideA = 100;
let divideB = 10;
divideA /= divideB;
console.log("4. /= result:", divideA);

let moduloA = 25;
let moduloB = 4;
moduloA %= moduloB;
console.log("5. %= result:", moduloA);

// Comparison, Logical & Ternary
console.log("\n=== Comparison, Logical & Ternary ===");

let compareA = 12;
let compareB = 8;
console.log("1. < :", compareA < compareB);
console.log("> :", compareA > compareB);
console.log("<= :", compareA <= compareB);
console.log(">= :", compareA >= compareB);

console.log("2. 5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");

let conditionOne = 10 > 5;
let conditionTwo = 6 < 3;
console.log("3. &&:", conditionOne && conditionTwo);
console.log("||:", conditionOne || conditionTwo);
console.log("!:", !conditionOne);

let eligibilityAge = 18;
console.log("4.", eligibilityAge >= 18 ? "Eligible" : "Not Eligible");

let marks = 35;
console.log("5.", marks >= 35 ? "Pass" : "Fail");
