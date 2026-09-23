// Sample details are used for exercises that ask for personal information.
// Replace these values with your own.

// Variables — var (1–10)
var myName = "Alex";
console.log("1. Name:", myName);
var myAge = 20;
console.log("2. Age:", myAge);
var laterValue;
laterValue = "Assigned later";
console.log("3. Later value:", laterValue);
var changeableNumber = 20;
changeableNumber = 40;
console.log("4. Changed value:", changeableNumber);
var redeclaredValue = "First value";
var redeclaredValue = "Redeclared value";
console.log("5. Redeclared:", redeclaredValue);
var varName = "Alex", varAge = 20, varCity = "Chennai";
console.log("6. Name, age, city:", varName, varAge, varCity);
var collegeNameVar = "Example College";
console.log("7. College:", collegeNameVar);
var favoriteSubjectVar = "Computer Science";
console.log("8. Favorite subject:", favoriteSubjectVar);
var changingNumber = 1;
changingNumber = 2;
changingNumber = 3;
changingNumber = 4;
console.log("9. Final number:", changingNumber);
var salary = 30000;
salary = 40000;
console.log("10. Final salary:", salary);

// Variables — let (11–20)
let letName = "Alex";
console.log("11. Name:", letName);
let letAge = 20;
console.log("12. Age:", letAge);
let assignedLater;
assignedLater = "Assigned later";
console.log("13. Later value:", assignedLater);
let letNumber = 100;
letNumber = 200;
console.log("14. Changed value:", letNumber);
let studentName = "Alex", qualification = "Undergraduate", location = "Chennai";
console.log("15. Name, qualification, location:", studentName, qualification, location);
let course = "JavaScript";
console.log("16. Course:", course);
let marks = 50;
marks = 80;
console.log("17. Marks:", marks);
let companyName = "Example Company";
console.log("18. Company:", companyName);
let experience = 1;
console.log("19. Experience in years:", experience);
let mobileModel = "Example phone";
console.log("20. Mobile model:", mobileModel);

// Variables — const (21–30)
const constName = "Alex";
console.log("21. Name:", constName);
const dateOfBirth = "2005-01-01";
console.log("22. Date of birth:", dateOfBirth);
const company = "Example Company";
console.log("23. Company:", company);
const country = "India";
console.log("24. Country:", country);
const personName = "Alex", personAge = 20, personCity = "Chennai";
console.log("25. Name, age, city:", personName, personAge, personCity);
const courseName = "JavaScript";
console.log("26. Course:", courseName);
const collegeName = "Example College";
console.log("27. College:", collegeName);
const favoriteColor = "Blue";
console.log("28. Favorite color:", favoriteColor);
const employeeId = "EMP-001";
console.log("29. Employee ID:", employeeId);
const officeLocation = "Chennai";
console.log("30. Office location:", officeLocation);

// Printing statements (31–38)
console.log("31. Number:", 100);
console.log("32. Name:", "Alex");
console.log("33a. Age:", 20);
console.log("33b. Qualification:", "Undergraduate");
console.log("34. Welcome to JavaScript");
console.log("35a. String", "35b. Number", "35c. Boolean", "35d. Null", "35e. Array");
let userName = "Alex";
console.log("36. User name:", userName);
let userAge = 20;
console.log("37. User age:", userAge);
console.log("38. Name, age, city, qualification:", "Alex", 20, "Chennai", "Undergraduate");

// Popup methods and document.writeln exercises (39–47, 50).
// These run only after the button is clicked so page load stays uninterrupted.
const greeting = "Hello Everyone";
document.writeln(greeting); // 48: writes the greeting on the webpage during page parsing.
document.getElementById("run-popups").addEventListener("click", function () {
  const results = document.getElementById("results");
  const lines = [];

  // 39–40
  alert("Welcome to JavaScript");
  const alertName = "Alex";
  alert(alertName);

  // 41–44
  const promptedName = prompt("What is your name?");
  alert(promptedName);
  const promptedAge = prompt("What is your age?");
  console.log("42. Entered age:", promptedAge);
  const promptedQualification = prompt("What is your qualification?");
  alert(promptedQualification);
  const promptedCity = prompt("What is your city?");
  console.log("44. Entered city:", promptedCity);

  // 45–46
  const knowsJavaScript = confirm("Do you know JavaScript?");
  const wantsToContinue = confirm("Do you want to continue?");
  console.log("45. Knows JavaScript:", knowsJavaScript);
  console.log("46. Wants to continue:", wantsToContinue);

  // 47: document.writeln writes into an isolated iframe so it does not replace this page.
  const nameForPage = prompt("47. What is your name?");
  const qualificationForPage = prompt("47. What is your qualification?");
  const outputFrame = document.createElement("iframe");
  outputFrame.title = "Task 47 document.writeln output";
  outputFrame.style.cssText = "width:100%;height:48px;border:0;background:white";
  results.replaceChildren(outputFrame);
  outputFrame.contentDocument.open();
  outputFrame.contentDocument.writeln("Name: " + nameForPage + "<br>Qualification: " + qualificationForPage);
  outputFrame.contentDocument.close();

  // 48
  lines.push("48. " + greeting);

  // 49
  console.log("49. Name:", "Alex");
  console.warn("49. Qualification:", "Undergraduate");
  console.error("49. City:", "Chennai");

  // 50: collect details and print to the requested console methods and webpage.
  const infoName = prompt("50. What is your name?");
  const infoAge = prompt("50. What is your age?");
  const infoQualification = prompt("50. What is your qualification?");
  console.log("50. Name:", infoName);
  console.warn("50. Age:", infoAge);
  console.error("50. Qualification:", infoQualification);
  const infoFrame = document.createElement("iframe");
  infoFrame.title = "Task 50 document.writeln output";
  infoFrame.style.cssText = "width:100%;height:72px;border:0;background:white";
  results.append("\nTask 50 output:");
  results.append(infoFrame);
  infoFrame.contentDocument.open();
  infoFrame.contentDocument.writeln("Name: " + infoName + "<br>Age: " + infoAge + "<br>Qualification: " + infoQualification);
  infoFrame.contentDocument.close();
  lines.push("Popup exercises complete. See the console for tasks 42, 44–46, 49, and 50.");
  results.append("\n" + lines.join("\n"));
});
