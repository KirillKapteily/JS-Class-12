//test 1 for in
let hotel = {
    name: "SuperPuperGoodHotel!",
    stars: 5,
    capacity: 100,
}
/*     all = 0;
    for (let i = 0; i < name.length; i++) {
        if (products[i].category === "food") {
            all += products[i].price;
        }
    }
    return all; */
for (const key in hotel) {
    console.log("Value:", hotel[key]);
}
console.log(" ");

//test 2 keys, values, entries
const keys = Object.keys(hotel);
console.log(keys);

const values = Object.values(hotel);
console.log(values);

const entryes = Object.entries(hotel);
console.log(entryes);

console.log(" ");

//3✅
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];
const findFriendByName = function (friends, names) {
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].name === names) {
            return friends[i];
        }
    }
    return null;
}

console.log(findFriendByName(friends, 'Ajax'));
console.log(" ");

//4 ✅ 
const getAllNames = function (friends) {
    const allFr = [];
    for (let i = 0; i < friends.length; i++) {
        allFr.push(friends[i].name)
    }
    return allFr;
}

console.log(getAllNames(friends));
console.log(" ");
//5 ✅
const getOnlineFriends = function (friends, online) {
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].online === true) {
            return friends[i];
        }
    }
    return null;
}

console.log(getOnlineFriends(friends));
console.log(" ");

//6 ❌
const getOflineFriends = function (friends, online) {
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].online !== true) {
            return friends[i];
        }
    }
    return null;
}

console.log(getOflineFriends(friends));
console.log(" ");

//7
let temp2 = [3, 1, 4, 5, 6, 7, 10, 8, 9];
let temp = [23, 12, 34, 45, 56, 67, 77, 88, 99];
console.log(Math.min(...temp)); // ... - spreate
let copyTemp = [...temp, ...temp2];
console.log(copyTemp);
console.log(" ");


//8
const a = {
    x: 12,
    y: 24,
}
const b = {
    x: 9,
    z: 14,
}

const c = Object.assign({}, a, b);
console.log(c);
console.log(" ");

//9
let products = [
    { name: "apple", price: 6, category: "food", stock: 12 },
    { name: "banana", price: 9, category: "food", stock: 4 },
    { name: "cherry", price: 3, category: "food", stock: 7 }
]

const getAllStock = function (name) {
    let all = 0;
    for (let i = 0; i < name.length; i++) {
            all += name[i].price * name[i].stock;
    }
    return all;
}
console.log(getAllStock(products));
