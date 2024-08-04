var x = 2,
fns = [];

(function () {
    var x = 5;

    for (var i = 0; i < x; i++) {
        // ..
        fns[i] = (function (i) {
            return function () {
                return i;
            };
        })(i);
    }
})();

// DO NOT MODIFY BELOW CODE
console.log(x * 2 === fns[x * 2]());
// true