// Array Higher-Order Methods

// 1. Print each number with forEach().
const numbersToPrint = [10, 20, 30, 40, 50];
numbersToPrint.forEach((number) => console.log(number));

// 2. Greet each student with forEach().
const studentNamesToGreet = ["Ava", "Noah", "Mia"];
studentNamesToGreet.forEach((name) => console.log(`Hello, ${name}`));

// 3. Create a new array with each number multiplied by 2.
const numbersToDouble = [1, 2, 3, 4, 5];
const doubledNumbers = numbersToDouble.map((number) => number * 2);
console.log(doubledNumbers);

// 4. Add 100 to every price.
const pricesToIncrease = [25, 50, 75, 100];
const increasedPrices = pricesToIncrease.map((price) => price + 100);
console.log(increasedPrices);

// 5. Keep only the even numbers.
const numbersToFilter = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbersToFilter.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// 6. Keep students who are at least 18 years old.
const studentAges = [16, 18, 21, 17, 19];
const adultStudentAges = studentAges.filter((age) => age >= 18);
console.log(adultStudentAges);

// 7. Find the first number greater than 50.
const numbersToSearch = [12, 50, 68, 92];
const firstNumberAboveFifty = numbersToSearch.find((number) => number > 50);
console.log(firstNumberAboveFifty);

// 8. Find the first student whose mark is greater than 80.
const studentsWithMarks = [
  { name: "Ava", mark: 76 },
  { name: "Noah", mark: 88 },
  { name: "Mia", mark: 95 },
];
const firstStudentAboveEighty = studentsWithMarks.find(
  (student) => student.mark > 80,
);
console.log(firstStudentAboveEighty);

// 9. Calculate the sum of the numbers.
const numbersToSum = [10, 20, 30, 40];
const numberSum = numbersToSum.reduce((total, number) => total + number, 0);
console.log(numberSum);

// 10. Calculate the total price.
const pricesToTotal = [12.5, 8.25, 19.99];
const totalPrice = pricesToTotal.reduce((total, price) => total + price, 0);
console.log(totalPrice);

// 11. Check whether at least one number is greater than 100.
const numbersToCheck = [25, 80, 125, 40];
const hasNumberAboveOneHundred = numbersToCheck.some((number) => number > 100);
console.log(hasNumberAboveOneHundred);

// 12. Check whether all students scored above 35.
const studentMarks = [45, 72, 36, 90];
const allMarksAboveThirtyFive = studentMarks.every((mark) => mark > 35);
console.log(allMarksAboveThirtyFive);

// Sort, Join, and Array Conversion

// 1. Sort numbers in ascending numeric order.
const numbersAscending = [40, 5, 100, 25, 10];
numbersAscending.sort((a, b) => a - b);
console.log(numbersAscending);

// 2. Sort numbers in descending numeric order.
const numbersDescending = [40, 5, 100, 25, 10];
numbersDescending.sort((a, b) => b - a);
console.log(numbersDescending);

// 3. Convert student names to a comma-separated string.
const namesForString = ["Ava", "Noah", "Mia"];
console.log(namesForString.toString());

// 4. Combine names using " - ".
const namesToJoin = ["Ava", "Noah", "Mia"];
console.log(namesToJoin.join(" - "));

// 5. Display products in one comma-separated sentence.
const products = ["bread", "milk", "eggs"];
console.log(`Products available: ${products.join(", ")}.`);

// String Methods

// 1. Print the character at index 4.
const javascriptText = "JavaScript";
console.log(javascriptText.charAt(4));

// 2. Print the character code of the first character.
const textForCharacterCode = "Hello";
console.log(textForCharacterCode.charCodeAt(0));

// 3. Print the length of the string.
const helloJavaScript = "Hello JavaScript";
console.log(helloJavaScript.length);

// 4. Extract "JavaScript" from the string.
const developerTitle = "JavaScript Developer";
console.log(developerTitle.slice(0, 10));

// 5. Convert lowercase text to uppercase.
const lowercaseText = "learning javascript";
console.log(lowercaseText.toUpperCase());

// 6. Convert uppercase text to lowercase.
const uppercaseText = "LEARNING JAVASCRIPT";
console.log(uppercaseText.toLowerCase());

// 7. Remove leading and trailing spaces.
const textWithExtraSpaces = "   Hello, JavaScript!   ";
console.log(textWithExtraSpaces.trim());

// 8. Check different parts of a sentence entered in the browser.
const sentence = prompt("Enter a sentence:");
if (sentence !== null) {
  console.log('Includes "JavaScript":', sentence.includes("JavaScript"));
  console.log('Index of "JavaScript":', sentence.indexOf("JavaScript"));
  console.log('Starts with "Hello":', sentence.startsWith("Hello"));
  console.log('Ends with "!":', sentence.endsWith("!"));
}

// Date Methods

// 1. Print the current year, month, and day.
const currentDate = new Date();
console.log("Current year:", currentDate.getFullYear());
console.log("Current month:", currentDate.getMonth() + 1); // Months are zero-based.
console.log("Current day:", currentDate.getDate());

// 2. Print the current hours, minutes, and seconds.
const currentTime = new Date();
console.log("Current hour:", currentTime.getHours());
console.log("Current minute:", currentTime.getMinutes());
console.log("Current second:", currentTime.getSeconds());

// 3. Change the year of a date.
const dateToChangeYear = new Date(2024, 0, 15);
dateToChangeYear.setFullYear(2025);
console.log(dateToChangeYear);

// 4. Change the month and day of a date.
const dateToChangeMonthAndDay = new Date(2024, 0, 15);
dateToChangeMonthAndDay.setMonth(5); // June (months are zero-based).
dateToChangeMonthAndDay.setDate(20);
console.log(dateToChangeMonthAndDay);

// 5. Find the weekday of a date of birth entered as YYYY-MM-DD.
const dateOfBirthInput = prompt("Enter your date of birth (YYYY-MM-DD):");
if (dateOfBirthInput !== null) {
  const birthDateParts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateOfBirthInput);

  if (birthDateParts) {
    const birthYear = Number(birthDateParts[1]);
    const birthMonth = Number(birthDateParts[2]) - 1;
    const birthDay = Number(birthDateParts[3]);
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    if (
      birthDate.getFullYear() === birthYear &&
      birthDate.getMonth() === birthMonth &&
      birthDate.getDate() === birthDay
    ) {
      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      console.log("You were born on a", weekdays[birthDate.getDay()]);
    } else {
      console.log("Please enter a valid date of birth.");
    }
  } else {
    console.log("Please use the YYYY-MM-DD date format.");
  }
}
