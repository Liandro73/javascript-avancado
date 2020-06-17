//Sample 1
function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return a + b;
}

console.log(sum(5, 5, 5, 2, 3));

// Rest Operator ...

function sum1(...args) {
    return args.reduce((acc, value1) => acc + value1, 0);
}

console.log(sum1(5, 5, 5, 2, 3));

//

const sum2 = (...rest) => {
};

console.log(sum2(5, 5, 5, 2, 3));

//Sample 2

const multiply = (...args2) => args2.reduce((acc2, value2) => acc2 * value2, 1);

const sum3 = (rest2) => {

    return multiply.apply(undefined, rest2);
};

console.log(sum3(5, 5, 5, 2, 3));

// Spread Operator ...

const multiply2 = (...args3) => args3.reduce((acc3, value3) => acc3 * value3, 1);

const sum4 = (rest3) => {

    return multiply2(...rest3);
};

console.log(sum3(5, 5, 5, 2, 3));

// strings, arrays, and literal objects

// string

const str = 'Digital Innovation One';

function logArgs(...args4) {
    console.log(args4);
}

logArgs(...str);

// array

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs() {
    console.log(arguments);
}

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

const arrClone = [...arr];

logArgs(...arr);
console.log(arr2);
console.log(arr3);
console.log(arrClone);

// literal object

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);