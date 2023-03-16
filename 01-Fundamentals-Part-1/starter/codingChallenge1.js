// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).
// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall.

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI =", markBMI);
console.log("John's BMI =", johnBMI);
console.log("Is Mark's BMI higher than Jhon's?", markHigherBMI);

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / (markHeight2 * markHeight2);
const johnBMI2 = johnMass2 / johnHeight2 ** 2;

const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Mark's BMI =", markBMI2);
console.log("John's BMI =", johnBMI2);
console.log("Is Mark's BMI higher than Jhon's?", markHigherBMI2);

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

const isMarksBMIHigherThanJohns = markBMI > johnBMI;

const isMarksBMIHigherThanJohns2 = markBMI2 > johnBMI2;

if (isMarksBMIHigherThanJohns) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

if (isMarksBMIHigherThanJohns2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
}