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
