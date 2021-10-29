const bubble = (items) => {
  let len = items.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (items[j] > items[j + 1]) {
        let temp = items[j + 1];
        items[j + 1] = items[j];
        items[j] = temp;
      }
    }
  }
  console.log(items);
};
const result = bubble([3, 6, 34, 6, 3, 7]);

//another method
let array = [23, 3, 5, 3, 4, 490];
let sorted = array.sort((a, b) => {
  return b - a;
});
console.log(sorted);

//sorting array of objects
let details = [
  {
    name: "kishore",
    age: 23,
  },
  {
    name: "cherry",
    age: 25,
  },
  {
    name: "kishore_cherry",
    age: 27,
  },
];
// let ageInfo = details.sort((a, b) => {
//   return b.age - a.age;
// });
// console.log(ageInfo);

let nameInfo = details.sort((a, b) => {
  let a1 = a.name.toUpperCase();
  let a2 = b.name.toUpperCase();
  return a1 > a2 ? 1 : -1;
});
console.log(nameInfo);
