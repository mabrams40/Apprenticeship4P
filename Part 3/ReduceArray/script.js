// reduce
const array1 = [1,2,3,4];
console.log("Array:")
console.log(array1)

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue
);
console.log(`Sum of elements: ${sumWithInitial}`);

// map
const map = array1.map(a => a*a);
console.log("Mapped array:");
console.log(map)