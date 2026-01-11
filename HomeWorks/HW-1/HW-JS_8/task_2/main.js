"use strict";
const user_82 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
    greening() {
        console.log('shalom');
    },
    goodbye() {
        console.log('bye');
    }
};
function deepClone(object) {
    if (object) {
        const clonedObj = JSON.parse(JSON.stringify(object));
        for (const objectKey in object) {
            if (typeof object[objectKey] === "function") {
                clonedObj[objectKey] = object[objectKey];
            }
        }
        return clonedObj;
    }
    throw new Error('Not implemented');
}
let cloneUser = deepClone(user_82);
console.log(cloneUser);
