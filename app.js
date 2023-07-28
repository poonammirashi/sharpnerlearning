"use strict";
var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button");
const arrnum = [];
const arrstr = [];
function addNumber(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + ' ' + n2;
    }
    else if (typeof n1 === 'string' && typeof n2 === 'string') {
        return +n1 + +n2;
    }
}
function obj(object) {
    return object;
}
buttonElement.addEventListener("click", () => {
    const n1 = num1Element.value;
    const n2 = num2Element.value;
    const str = addNumber(n1, n2);
    const res = addNumber(+n1, +n2);
    arrstr.push(str);
    const newobj = obj({ val: res, timestamp: new Date });
    console.log(arrstr);
    console.log(newobj);
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked");
    }, 1000);
});
promise.then(res => {
    console.log(res.split(" "));
});
