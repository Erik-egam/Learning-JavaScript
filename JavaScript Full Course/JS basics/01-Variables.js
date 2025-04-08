// JavaScript Variables

// Declaring variables using var, let, and const
var name = "John"; // var is function-scoped (older way)
let age = 25; // let is block-scoped (modern way)
const isStudent = true; // const is block-scoped and cannot be reassigned

// Printing variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

console.log("==========================");
// Reassigning variables
name = "Jane"; // Allowed for var and let
age = 30; // Allowed for let
// isStudent = false; // Error: Assignment to constant variable

console.log("Updated Name:", name);
console.log("Updated Age:", age);

console.log("==========================");
// Variable types
let undefinedVariable; // Undefined
let nullVariable = null; // Null
let numberVariable = 42; // Number
let stringVariable = "Hello, World!"; // String
let booleanVariable = false; // Boolean
let arrayVariable = [1, 2, 3]; // Array
let objectVariable = { key: "value" }; // Object

console.log("Undefined Variable:", undefinedVariable);
console.log("Null Variable:", nullVariable);
console.log("Number Variable:", numberVariable);
console.log("String Variable:", stringVariable);
console.log("Boolean Variable:", booleanVariable);
console.log("Array Variable:", arrayVariable);
console.log("Object Variable:", objectVariable);

console.log("==========================");

// Type checking
console.log("Type Checking")
console.log("Type of name:", typeof name); // string
console.log("Type of age:", typeof age); // number
console.log("Type of isStudent:", typeof isStudent); // boolean
console.log("Type of undefinedVariable:", typeof undefinedVariable); // undefined
console.log("Type of nullVariable:", typeof nullVariable); // object (this is a known quirk in JavaScript)
console.log("Type of numberVariable:", typeof numberVariable); // number
console.log("Type of stringVariable:", typeof stringVariable); // string
console.log("Type of booleanVariable:", typeof booleanVariable); // boolean
console.log("Type of arrayVariable:", typeof arrayVariable); // object (arrays are a type of object)
console.log("Type of objectVariable:", typeof objectVariable); // object

console.log("==========================");
