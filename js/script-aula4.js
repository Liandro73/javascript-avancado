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