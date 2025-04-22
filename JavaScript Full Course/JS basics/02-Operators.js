// In JavaScript, operators are symbols or keywords used to perform operations on values or variables. Here's a breakdown of the main types of operators:

// ### 1. **Arithmetic Operators**
// Used for mathematical calculations:
// - `+` (Addition)
// - `-` (Subtraction)
// - `*` (Multiplication)
// - `/` (Division)
// - `%` (Modulus)
// - `**` (Exponentiation)
// - `++` (Increment)
// - `--` (Decrement)

// ### 2. **Assignment Operators**
// Used to assign values to variables:
// - `=` (Assign)
// - `+=` (Add and assign)
// - `-=` (Subtract and assign)
// - `*=` (Multiply and assign)
// - `/=` (Divide and assign)
// - `%=` (Modulus and assign)

// ### 3. **Comparison Operators**
// Used to compare values:
// - `==` (Equal to)
// - `===` (Strict equal to)
// - `!=` (Not equal to)
// - `!==` (Strict not equal to)
// - `>` (Greater than)
// - `<` (Less than)
// - `>=` (Greater than or equal to)
// - `<=` (Less than or equal to)

// ### 4. **Logical Operators**
// Used to combine or invert conditions:
// - `&&` (Logical AND)
// - `||` (Logical OR)
// - `!` (Logical NOT) this become the True to False

// ### 5. **String Operators**
// - `+` (Concatenation)
// - `+=` (Concatenate and assign)

// ### 6. **Type Operators**
// - `typeof` (Returns the type of a variable)
// - `instanceof` (Checks if an object is an instance of a class)

//  Examples of Operators

//  1. **Arithmetic Operators**
let a = 10, b = 3;
console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus: 1
console.log(a ** b); // Exponentiation: 1000
a++;
console.log(a); // Increment: 11
b--;
console.log(b); // Decrement: 2

//  2. **Assignment Operators**
let x = 5;
x += 3; // Add and assign
console.log(x); // 8
x -= 2; // Subtract and assign
console.log(x); // 6
x *= 2; // Multiply and assign
console.log(x); // 12
x /= 3; // Divide and assign
console.log(x); // 4
x %= 3; // Modulus and assign
console.log(x); // 1
//  3. **Comparison Operators**
let num1 = 10, num2 = '10';
console.log(num1 == num2); // Equal to: true
console.log(num1 === num2); // Strict equal to: false
console.log(num1 != num2); // Not equal to: false
console.log(num1 !== num2); // Strict not equal to: true
console.log(num1 > 5); // Greater than: true
console.log(num1 < 5); // Less than: false
console.log(num1 >= 10); // Greater than or equal to: true
console.log(num1 <= 9); // Less than or equal to: false
// 4. **Logical Operators**
let isAdult = true, hasID = false;
console.log(isAdult && hasID); // Logical AND: false
console.log(isAdult || hasID); // Logical OR: true
console.log(!isAdult); // Logical NOT: false


// 5. **Bitwise Operators**

let p = 5, q = 3; // Binary: p = 0101, q = 0011
console.log(p & q); // AND: 1 (0001)
console.log(p | q); // OR: 7 (0111)
console.log(p ^ q); // XOR: 6 (0110)
console.log(~p); // NOT: -6
console.log(p << 1); // Left shift: 10 (1010)
console.log(p >> 1); // Right shift: 2 (0010)
console.log(p >>> 1); // Unsigned right shift: 2 (0010)
 // 6. **String Operators**
 

let str1 = "Hello", str2 = "World";
console.log(str1 + " " + str2); // Concatenation: "Hello World"
str1 += " JavaScript";
console.log(str1); // Concatenate and assign: "Hello JavaScript"




 // 7. **Type Operators**
 

let value = 42;
console.log(typeof value); // "number"
console.log(value instanceof Number); // false (primitive type)
 


 // 8. **Ternary Operator**
 

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"