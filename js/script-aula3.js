//Sample 1

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var orange = arr[3][0];

// Destructuring Assignment

var [apple2, banana2, orange2, [tomato]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

//Sample 2

var obj = {
    name: 'Celso',
    props: {
        age: 26
    }
}

var name = obj.name;

// Destructuring Assignment

var arr = ['Apple', 'Orange']

var [apple2] = arr;
var obj1 = {
    name: 'Celso',
    props: {
        age: 26
    }
}

var { name: name2 } = obj1;
var { props: { age } } = obj1;

console.log(name2);
console.log(age);

// Functions

function sum({a, b}) {
    return a + b;
}

console.log(sum({ a: 5, b: 5}));