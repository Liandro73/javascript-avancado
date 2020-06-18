// Symbols - Identificador único

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId === uniqueId2);
//false

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

// Well Known Symbols

// Iterator

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next());

//

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                return {
                    value: this.values[i],
                    done: i > this.values.length
                };
            }
        }
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const arr2 = [...obj];

console.log(arr2);

// Generators

function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log('Function!');
}

const it2 = hello();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next('Outside!'));

//

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it3 = naturalNumbers();

console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());