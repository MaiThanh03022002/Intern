//Ex1
setTimeout(() => {
    console.log("Hello Fresher Academy");
}, 1000);
//ex2
setInterval(() => {
    console.log("Hello Fresher Academy");
}, 3000);
//ex3
(function () {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout(function () { console.log(3) }, 0);
    console.log(4);
})();
// Sẽ ra 1 4 3 2 đầu tiên sẽ in ra 1 gặp setTimeout sẽ đưa vào web api sau đó thực hiện tiếp và in ra 4
// khi thực hiện tiếp theo gọi đến settimeout với delay 0 in ra 3 và settimeout delay 1s in ra 2

//ex4
//case1
console.log("A");
setTimeout(function () { console.log("B"); }, 0);
setTimeout(function () { console.log("C"); }, 0);
console.log("D");
//Thứ tự:
console.log("A");
console.log("D");
setTimeout(function () { console.log("B"); }, 0);
setTimeout(function () { console.log("C"); }, 0);
// các hàm setTimeout vẫn phải đợi cho tới khi stack hiện tại thực hiện xong mới được gọi dù delay 0
//case 2
setTimeout(function () {
    setTimeout(function () {
        console.log('A');
    }, 0);
}, 0);

setTimeout(function () {
    console.log('B');
}, 0);

setTimeout(function () {
    setTimeout(function () {
        console.log('C');
    }, 0);
}, 10);

setTimeout(function () {
    console.log('D');
}, 0);
//Thự tự
setTimeout(function () {
    console.log('B');
}, 0);
setTimeout(function () {
    console.log('D');
}, 0);
setTimeout(function () {
    setTimeout(function () {
        console.log('A');
    }, 0);
}, 0);
setTimeout(function () {
    setTimeout(function () {
        console.log('C');
    }, 0);
}, 10);
// các hàm settimeout lồng nhau sẽ thực hiện sau

// case 3:
var x = 'A';

setTimeout(function () {
    console.log(x);
    x = 'B';
}, 3);

setTimeout(function () {
    console.log(x);
    x = 'C';
}, 2);

setTimeout(function () {
    console.log(x);
    x = 'D';
}, 1);

setTimeout(function () {
    console.log(x);
}, 4);
//Thứ tự
//Sau 1ms, hàm thứ ba được thực thi và in ra giá trị hiện tại của x là 'A'. Sau đó, x được thay đổi thành 'D'.
//Sau 2ms, hàm thứ hai được thực thi và in ra giá trị hiện tại của x là 'D'. Sau đó, x được thay đổi thành 'C'.
//Sau 3ms, hàm đầu tiên được thực thi và in ra giá trị hiện tại của x là 'C'. Sau đó, x được thay đổi thành 'B'.
//Sau 4ms, hàm thứ tư được thực thi và in ra giá trị hiện tại của x là 'B'.

//case 4
var t1 = setTimeout(function () {
    console.log('A');
    setTimeout(function () {
        console.log('B');
    }, 0);
}, 100);

var t2 = setTimeout(function () {
    console.log('C');
    setTimeout(function () {
        console.log('D');
    }, 0);
}, 200);

clearTimeout(t1);

setTimeout(function () {
    clearTimeout(t2);
}, 250);
// Hàm settimeout t1 đưa vào webapi stack để đợi 200 ,hàm settimeout t2 đươc vào stack để đợi delay 250 
// hàm clearTimeout t1 được gọi nó sẽ hủy bỏ settime của hàm t1 vì thế t1 k được in ra
// hàm settimeout với fc là cleartimeout t2 được đưa vào stack delay 200
// Hàm settimeout t2 được in ra C và D
// sau đó hàm cleartimeout t2 với delay 250 mới được gọi và nó không có tác dụng vì hàm settimeout t2 đã in ra rồi

//ex 5
//case 1
function logA() {
    console.log('A');
}

function logB() {
    console.log('B');
}

function logC() {
    console.log('C');
}

function logD() {
    console.log('D');
}

logD(logA(logB(logC())));
//Thứ tự các thông báo được in ra sẽ là:
// 'C' (từ logC())
// 'B' (từ logB())
// 'A' (từ logA())
// 'D' (từ logD())

//case 2
function alogA() {
    setTimeout(function () {
        console.log('A');
    }, 0);
}

function alogB() {
    setTimeout(function () {
        console.log('B');
    }, 0);
}

function alogC() {
    setTimeout(function () {
        console.log('C');
    }, 0);
}

function alogD() {
    setTimeout(function () {
        console.log('D');
    }, 0);
}

alogD(alogA(alogB(alogC())));
// Thứ tự
// 'C' (từ alogC())
// 'B' (từ alogB())
// 'A' (từ alogA())
// 'D' (từ alogD())
// các settimeout đều delay 0 nên được in ra theoo thứ tự settimout thêm vào stac

// casee 3
setTimeout(function () {
    console.log('A');
    setTimeout(function () {
        console.log('B');
        setTimeout(function () {
            console.log('C');
            setTimeout(function () {
                console.log('D');
            }, 0);
        }, 100);
    }, 200);
}, 300);
// Thứ tự in ra là A B C D dù delay trong settimeout là bao nhiêu đi chăng nữa

// case 4
setTimeout(function () {
    console.log('A');
    setTimeout(function () {
        console.log('B');
    }, 100);
}, 200);

setTimeout(function () {
    console.log('C');
    setTimeout(function () {
        console.log('D');
    }, 200);
}, 100);
// Thứ tự in ra  C  A  B D
// Sau 100ms, console.log('C'); được thực thi. Đồng thời, thiết lập một setTimeout với thời gian chờ 200ms để in D.

// Sau 200ms từ khi setTimeout đầu tiên được thiết lập (tổng cộng là 200ms), console.log('A'); được thực thi. 
//Đồng thời, thiết lập một setTimeout với thời gian chờ 100ms để in B.

// Sau 100ms từ khi setTimeout thứ hai của A được thiết lập (tổng cộng là 300ms từ khi bắt đầu), console.log('B'); được thực thi.

// Sau 200ms từ khi setTimeout thứ hai của C được thiết lập (tổng cộng là 300ms từ khi bắt đầu), console.log('D'); được thực thi.

//ex 6 
for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, i * 1000);
}
// Các setTimeout được thiết lập để in ra giá trị của i sau một khoảng thời gian khác nhau
// Tuy nhiên, vì i là biến var nên tất cả các hàm setTimeout in ra giá trị cuối cùng của i là 5.

//ex 7
function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        if (promises.length === 0) {
            resolve(results);
            return;
        }
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                results[index] = value;
                completed += 1;
                if (completed === promises.length) {
                    resolve(results);
                }
            }).catch(error => {
                reject(error);
            });
        });
    });
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});

function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}

Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here");
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error);
        }
});
