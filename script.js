//Part 1: Declaring and Invoking Functions

console.log("\nPart 1: Declaring and Invoking Functions");

function greet(name = "Guest of my webpage") {
   return `Hello ${name}!`;
}
console.log(greet(`Dor`));
console.log(greet());

//Part 2: Working with Parameters and Returning Values

console.log("\nPart 2: Working with Parameters and Returning Values");

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(3,7));

function addAnyNumbers() {
    let sum = 0;
    for (let i=0; i<arguments.length; i++){
        sum +=arguments[i];
    }
    return sum;
}

console.log(addAnyNumbers(1,2,3,4,5));

//Part 3: Function Scope
console.log("\nPart 3: Function Scope");

let x = 10;
console.log(`x before function is: ${x}`)

changeValue();

function changeValue() {
    x=12;
    console.log(`x inside function is: ${x}`)
}

console.log(`x after function is: ${x}`);

// Part 4: Closures
console.log("\nPart 4: Closures");

outerFunction();

function outerFunction() {
    let count = 0;
    console.log(`Inside outerFunction count = ${count}`);
    function innerFunction() {
        count++;
        console.log(`Inside innerFunction count = ${count}`);
    }
    return innerFunction(); }


