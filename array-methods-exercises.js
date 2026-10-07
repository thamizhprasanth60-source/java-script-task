// 1. Object destructuring

// Create an object with five properties and extract only three.
const person = {
  name: "Ava",
  age: 28,
  city: "Toronto",
  job: "Developer",
  hobby: "Cycling",
};

const { name, age, job } = person;
console.log(name, age, job); // Ava 28 Developer

// Extract the employee name and team member names using nested destructuring.
const organization = {
  employee: { name: "Maya" },
  team: {
    members: [{ name: "Noah" }, { name: "Liam" }],
  },
};

const {
  employee: { name: employeeName },
  team: {
    members: [{ name: firstMemberName }, { name: secondMemberName }],
  },
} = organization;

console.log(employeeName); // Maya
console.log(firstMemberName, secondMemberName); // Noah Liam

// Extract the employee name from company -> department -> employee.
const company = {
  department: {
    employee: { name: "Jordan" },
  },
};

const {
  department: {
    employee: { name: companyEmployeeName },
  },
} = company;

console.log(companyEmployeeName); // Jordan

// 6. Array Manipulation

// 1. Add three fruits to the end using push().
const fruits = ["apple", "banana", "orange", "grape", "pear"];
fruits.push("mango", "kiwi", "peach");
console.log(fruits);

// 2. Remove the last value using pop().
const numbersToPop = [10, 20, 30, 40, 50];
numbersToPop.pop();
console.log(numbersToPop); // [10, 20, 30, 40]

// 3. Remove the first student using shift().
const studentsToShift = ["Ava", "Noah", "Mia", "Leo", "Zoe"];
studentsToShift.shift();
console.log(studentsToShift); // ["Noah", "Mia", "Leo", "Zoe"]

// 4. Add two numbers at the beginning using unshift().
const scores = [30, 40, 50, 60];
scores.unshift(10, 20);
console.log(scores); // [10, 20, 30, 40, 50, 60]

// 5. Replace 30 with 100 using splice().
const valuesToReplace = [10, 20, 30, 40, 50];
valuesToReplace.splice(2, 1, 100);
console.log(valuesToReplace); // [10, 20, 100, 40, 50]

// 6. Remove two values from the middle using splice().
const colors = ["red", "blue", "green", "yellow", "purple", "black"];
colors.splice(2, 2);
console.log(colors); // ["red", "blue", "purple", "black"]

// 7. Add three new values in the middle using splice().
const letters = ["a", "b", "f", "g"];
letters.splice(2, 0, "c", "d", "e");
console.log(letters); // ["a", "b", "c", "d", "e", "f", "g"]

// 8. Remove two values and add three new values at the same position.
const animals = ["cat", "dog", "fish", "bird", "rabbit"];
animals.splice(1, 2, "turtle", "hamster", "parrot");
console.log(animals); // ["cat", "turtle", "hamster", "parrot", "bird", "rabbit"]

// 9. Remove one student from the middle using splice().
const classList = ["Ava", "Noah", "Mia", "Leo", "Zoe"];
classList.splice(2, 1);
console.log(classList); // ["Ava", "Noah", "Leo", "Zoe"]

// 10. Perform push(), pop(), shift(), and unshift() on a shopping cart.
const cart = ["bread", "milk"];
cart.push("eggs"); // Add to the end.
cart.pop(); // Remove from the end.
cart.shift(); // Remove from the beginning.
cart.unshift("apples"); // Add to the beginning.
console.log(cart); // ["apples", "milk"]

// 7. Array Merge & Extraction Methods

// 1. Merge two arrays using concat().
const first = [1, 2];
const second = [3, 4];
const merged = first.concat(second);
console.log(merged); // [1, 2, 3, 4]

// 2. Merge three arrays using concat().
const groupA = ["a", "b"];
const groupB = ["c", "d"];
const groupC = ["e", "f"];
const allGroups = groupA.concat(groupB, groupC);
console.log(allGroups); // ["a", "b", "c", "d", "e", "f"]

// 3. Extract values at indexes 2 through 5 using slice().
// The end index is exclusive, so use 6 to include the value at index 5.
const eightValues = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(eightValues.slice(2, 6)); // [30, 40, 50, 60]

// 4. Extract the first three students using slice().
const classNames = ["Ava", "Noah", "Mia", "Leo", "Zoe"];
console.log(classNames.slice(0, 3)); // ["Ava", "Noah", "Mia"]

// 5. Flatten a nested array with three levels using flat().
const threeLevels = [1, [2, [3, [4]]]];
console.log(threeLevels.flat(3)); // [1, 2, 3, 4]

// 6. Flatten a nested array with four levels using flat().
const fourLevels = [1, [2, [3, [4, [5]]]]];
console.log(fourLevels.flat(4)); // [1, 2, 3, 4, 5]

// 7. slice() returns a portion without changing the original array.
const originalForSlice = ["a", "b", "c", "d"];
const extracted = originalForSlice.slice(1, 3);
console.log(extracted); // ["b", "c"]
console.log(originalForSlice); // ["a", "b", "c", "d"]

// splice() changes the original array and returns the removed values.
const originalForSplice = ["a", "b", "c", "d"];
const removed = originalForSplice.splice(1, 2);
console.log(removed); // ["b", "c"]
console.log(originalForSplice); // ["a", "d"]

// 8. Search & Other Array Methods

// 1. Check whether 50 exists using includes().
const searchNumbers = [10, 25, 50, 75];
console.log(searchNumbers.includes(50)); // true

// 2. Find the first occurrence of a duplicate value using indexOf().
const duplicatesForFirst = [4, 7, 4, 9, 4];
console.log(duplicatesForFirst.indexOf(4)); // 0

// 3. Find the last occurrence of a duplicate value using lastIndexOf().
const duplicatesForLast = [4, 7, 4, 9, 4];
console.log(duplicatesForLast.lastIndexOf(4)); // 4

// 4. Sort numbers in ascending numeric order.
const unsortedNumbers = [40, 5, 100, 25, 10];
unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers); // [5, 10, 25, 40, 100]

// 5. Reverse the array using reverse().
const sequence = [1, 2, 3, 4, 5];
sequence.reverse();
console.log(sequence); // [5, 4, 3, 2, 1]
