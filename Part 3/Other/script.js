const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
console.log(`numbers: ${numbers}`);

// 1. ... / .concat() - join arrays
const joinArrays = [...arr1, ...arr2];
console.log(`1. Joined arrays: ${joinArrays}`);

// 2. ... / .reverse() - last element
const [last] = [...arr2].reverse();
console.log(`2. Last element of arr2: ${last}`);

// 3. .filter()
const filter = (word) => arr2.filter(i => i == word);
console.log(`3. Filter arr2: ${filter("Marek")}`);

// 4. .reduce() - sum of elements
const sum = 0;
const reduce = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    sum
);
console.log(`4. Reduced numbers array: ${reduce}`);

// 5. .map() - n^2+3
const mapArr = numbers.map(x => x*x+3);
console.log(`5. Mapped numbers array: ${mapArr}`);
