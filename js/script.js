//Sample 1
var sumOld = function (a, b) {
    return a + b;
};

console.log(sum(5, 5));


// Arrow functions 1
var sum = (a, b) => a + b;

console.log(sum(5, 5));


//Sample 2
var obj = {
    showContext: function showContext() {
        this.log('teste');

        setTimeout(
            function () {
                this.log('after 1000ms');
            }.bind(this), 1000
        );
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();

// Arrow functions 2
var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();