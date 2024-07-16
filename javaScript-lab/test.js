const n = 8
const section = [2, 3, 6]
const wall1 = new Array(n).fill().map((val, idx) => idx + 1) // new Array의 원소는 빈상태 > map, filter등의 순회안함
const wall2 = Array.from({length : 8}, () => 1) // Array.from()의 원소는 undefined > map, filter가능
console.log(wall1);
console.log(wall2);