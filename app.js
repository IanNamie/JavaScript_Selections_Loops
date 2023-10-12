console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//In this exercise, you will be counting from 1 - 100. For each odd number, you will print the number to the console.If the number is even, do nothing.
for (let i = 1; i <= 100; i++)
{
    if (i % 2 !== 0)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    }
    else if (i % 3 == 0) {
        console.log("FIZZ");
    }
    else if (i % 5 == 0) {
        console.log("BUZZ");
    }
    else
    {
        console.log(i);
    }
}
// Exercise 3.1 Section
let i = 1;

while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

// Exercise 3.2 Section
let i = 1;

do {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 === 0) {
        console.log("FIZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ");
    }
    i++;
} while (i <= 100);

// Exercise 4 Section

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

let found = false;

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found value!");
        found = true;
        break;
    }
}

if (!found) {
    console.log("Did not find value");
}

// Exercise 5 Bouns Section

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let start = Math.round(Math.random() * (10 - 1) + 1); 
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (let i = start; i <= end; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log("FIZZBUZZ");
    } else if (i % fizzDivisor === 0) {
        console.log("FIZZ");
    } else if (i % buzzDivisor === 0) {
        console.log("BUZZ");
    } else {
        console.log(i);
    }
}

