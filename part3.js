function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }

    return a / b;
}

function remainder(a, b) {
    if (b === 0) {
        return "Error: Remainder by zero is not allowed.";
    }

    return a % b;
}

function exponentiate(a, b) {
    return a ** b;
}

function calculate(a, b, operation) {
    if (operation === "add") {
        return add(a, b);
    } else if (operation === "subtract") {
        return subtract(a, b);
    } else if (operation === "multiply") {
        return multiply(a, b);
    } else if (operation === "divide") {
        return divide(a, b);
    } else if (operation === "remainder") {
        return remainder(a, b);
    } else if (operation === "exponent") {
        return exponentiate(a, b);
    }

    return "Error: Invalid operation.";
}

const tests = [
    [15, 5, "add"],
    [20, 8, "subtract"],
    [7, 6, "multiply"],
    [40, 5, "divide"],
    [17, 5, "remainder"],
    [2, 8, "exponent"],
    [10, 0, "divide"]
];

for (const [a, b, operation] of tests) {
    console.log(`${a} ${operation} ${b} = ${calculate(a, b, operation)}`);
}
