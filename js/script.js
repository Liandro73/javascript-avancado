//Sample 1
var sumOld = function(a, b) {
    return a + b;
};

// Arrow functions

var sum = (a, b) => a + b;

console.log(sum(5, 5));


//Sample 2
var obj =  {
    showContext: function showContext() {
        this.log('teste');

        setTimeout(
            function() {
                this.log('after 1000ms');
            },
            1000
        );
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();