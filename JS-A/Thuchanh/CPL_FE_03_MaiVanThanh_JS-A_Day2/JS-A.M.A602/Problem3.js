const people =[
    {
        id: 1,
        name: 'Dung',
        age: 20
    },
    {
        id: 2,
        name: 'Diu',
        age: 20
    },
    {
        id: 3,
        name: 'Ky',
        age: 20
    },
    {
        id: 1,
        name: 'Hai',
        age: 22
    }
];

function removeId(arr) {
    const seen = new Map();

    arr.forEach(person => {
        if (!seen.has(person.id)) {
            seen.set(person.id, person);
        }
    });

    return Array.from(seen.values());
}

const uniquePeople = removeId(people);

console.log(uniquePeople);
