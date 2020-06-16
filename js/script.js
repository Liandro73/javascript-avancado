//Sample 1
function multiply(a, b) {
    b = b || 1;

    return a * b;
}

console.log(multiply(5));

// Default Function Arguments
function multiply2(a, b = 1) {
    //function multiply2(a = 2, b = 1) {
    //function multiply2(a, b = a) {
    return a * b;
}

console.log(multiply2(5));

// Lazy Evaluation
function randomNumber() {
    console.log('Generating a random number...');

    return Math.random() * 10;
}

function multiply3(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply3(5));