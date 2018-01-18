const player = 'boby'; // can reasign
let experience = 100;
let wizardlevel = false;

if (experience > 90){
    let wizardlevel = true;
    console.log(wizardlevel); // true
}

console.log(wizardlevel); // false

var wizardlevel = false;

// ###########################################

if (experience > 90) {
    var wizardlevel = true;
    console.log(wizardlevel); // true
}
console.log(wizardlevel); // true

// Template strings
const greeting = "Hello" + experince;
const greetingnew = 'Hello ${experience = 100}';

// arrow function
function add(a, b){
    return a+b;
}
// same as
const add = (a, b) => {
    return a + b;
}
// or
const add = (a, b) => a + b; 

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => sum + 1;

compose(sum, sum)(5); // 7

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);


