function upper(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + string + (values[i] ? values[i].toUpperCase() : '');
    }, '');
}

var name = 'Nguyen Van A',
    account = 'ANV',
    classname = 'Fresher FrontEnd';

console.log(
    upper`Hello ${name} (@${account}), welcome to the ${classname}!!!` ===
    'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!'
);
