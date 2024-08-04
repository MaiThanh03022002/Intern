var numbers = {
    *[Symbol.iterator]() {
        for (let i = 0; i <= 100; i++) {
            yield i;
        }
    }
};

for (let num of numbers) {
    console.log(num);
}

var range = {
    *[Symbol.iterator]() {
        for (let i = 6; i <= 30; i += 4) {
            yield i;
        }
    }
};

for (let num of range) {
    console.log(num);
}
