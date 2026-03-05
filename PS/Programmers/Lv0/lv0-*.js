//문자열 겹쳐쓰기
const myString = "Program29b8UYP"
const overWriteString = "merS123"
const s = 7
const originArr = [...myString]
const addStrArr =[...overWriteString]
console.log('원래 문자열 배열', originArr);
console.log('추가할 문자열 배열', addStrArr);
originArr.splice(s, addStrArr.length, ...addStrArr)
console.log('추가된 문자열 배열', originArr);

console.log(originArr.join(''));