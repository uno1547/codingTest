//핸드폰번호가리기
const phone_number = "01033334444"
const strArr = [...phone_number]
console.log(strArr);
for (let i = 0; i <= strArr.length - 4 - 1; i++) {
  strArr[i] = "*"
}
console.log(strArr);
// 정규표현식 종종나오는듯하다
// repeat, slice,