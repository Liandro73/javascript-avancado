//Sample 1
var prop1 = 'Digital Innovation One';

var obj = {
    prop1: prop1
};

console.log(obj);

// Enhanced Function Arguments
var prop1 = 'Digital Innovation One';

var obj1 = {
    prop1
};

console.log(obj1);

//

function method1() {
    console.log('method called')
}

var obj2 = {
    method1
};

obj2.method1();

//

var obj3 = {
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj3sum(1, 5));

//or

var obj4 = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj4.sum(1, 5));

//Sample 2

var propName = 'test';

var obj5 = {};

obj5[propName + 'concat'] = 'prop value';

console.log(obj5);

// ES6

var propName = 'test';

var obj5 = {
    [propName + 'concat']: 'prop value'
};

console.log(obj5);