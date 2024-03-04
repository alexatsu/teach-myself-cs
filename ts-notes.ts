const obj1 = {
  bro: 1,
};

const obj2 = {
  bro: 1,
};

const newobj1 = Object.create(obj1, {
  foo: {
    enumerable: true,
    value: "bar",
  },
});

const newobj2 = Object.assign(obj2, {
  foo: {
    
    value: "anotherbar",
  },
});

console.log(Object.getOwnPropertyDescriptor(newobj1, "foo"));
console.log(Object.getOwnPropertyDescriptor(newobj2, "foo"));
newobj1.bro = 2;
newobj2.bro = 3;
console.log(obj1);
console.log(obj2);


//
// here is the function to check type of the input in JS
const objectToString = Object.prototype.toString;
const trueTypeOf = (input) => objectToString.call(input);

// what type is this?
const obj = {};
const array = [];
const func = function () {};
const undef = undefined;
const nullish = null;

// here is the comparison to typeof, trueTypeOf is more advanced
console.log(trueTypeOf(obj), typeof obj, obj instanceof Object);
console.log(trueTypeOf(array), typeof array, array instanceof Array);
console.log(trueTypeOf(func), typeof func, func instanceof Function);
console.log(trueTypeOf(undef), typeof undef, undef instanceof Object);
console.log(trueTypeOf(nullish), typeof nullish, nullish instanceof Object);

// source
("https://javascript.info/instanceof");

