//문자열 여러번 뒤집기
/*
const tempString = "rermgorpsam"
const queries = [[2, 3], [0, 7], [5, 9], [6, 10]]
queries.forEach((el) => {
  const [start, end] = [el[0], el[1]]
  const slicedOrigin = tempString.slice(start, end + 1)
  console.log('잘린부분',slicedOrigin);
  const reversedSlice = [...slicedOrigin].reverse().join('')
  console.log('뒤집힌 잘린부분',reversedSlice);
  const newString = tempString.replace(slicedOrigin, reversedSlice)
  console.log('다시붙인', newString);
})
*/

function solution1 (my_string, queries) {
  const ans = queries.reduce((acc, cur) => {
    console.log(`acc문자열 ${acc}`);
    const [start, end] = [...cur]
    const slicedOrigin = acc.slice(start, end + 1)
    console.log(`수정범위의 문자열 ${slicedOrigin}`);
    const reversedSlice = [...slicedOrigin].reverse().join('')
    console.log(`다음 누산기로 넘어가는 acc ${acc.replace(slicedOrigin, reversedSlice)}`);
    return acc.replace(slicedOrigin, reversedSlice)
  }, my_string)
  console.log(ans);
  //이 코드의 문제는 아마 replace(target, to)할때 target문자열이 반복되는구조면 앞쪽에서 의도치않은 변화 일어날수있음
}
// solution("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]])
function solution2 (my_string, queries) {
  const strArr = [...my_string]
  console.log(strArr);
  console.log(`최초문자열배열 ${strArr}`);
  const ans = queries.reduce((acc, cur) => {
    console.log(`acc : ${acc} cur : ${cur}`);
    const [start, end] = [...cur]
    const reversed = acc.slice(start, end+1).reverse()
    console.log(`바뀔 부분 ${reversed}`);
    acc.splice(start, end - start + 1, ...reversed)
    return acc
  }, strArr)
  console.log(ans.join(''));
  return ans.join('')
}
solution2("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]])
// start, deletecnt, replace
/*
const arr = [0, 1, 2, 3, 4, 5, 6]
//특정위치에 삽입 (두번째인수가 0이하여야함)
arr.splice(0, 0, 'hi')
console.log(arr);
//특정위치에 대체
arr.splice(2, 2,...['$', '#'])
console.log(arr);
*/