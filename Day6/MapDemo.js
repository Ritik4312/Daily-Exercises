"use strict";
let userMap = new Map();
for (let i = 0; i < 5; i++) {
    let user = {
        id: i,
        name: `User${i}`,
        age: 20 + i
    };
    userMap.set(user.id, user);
}
console.log(userMap);
