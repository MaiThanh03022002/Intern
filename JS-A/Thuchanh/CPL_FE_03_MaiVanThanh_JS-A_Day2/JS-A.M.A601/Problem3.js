function foo(a1,a2) {
    let [a,b]=a1;
    let [x,...a4]=a2;
    return [a,...a4];
}

function bar() {
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];

    return foo(a1,a2);
}
// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012'); // true
