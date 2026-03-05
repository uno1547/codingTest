// 문자열내 p y의 개수 Array.reduce, 
function solution(s) {
  const strArr = [...s]
  const returnCnt = strArr.reduce((cnt, val, idx) => {
      if(val == "p" || val == "P") cnt[0] += 1
      if(val == "y" || val == "Y") cnt[1] += 1
      return cnt
  }, [0,0])
  return returnCnt[0] == returnCnt[1]
}
/*
const c = "hefiE"
console.log(c.toUpperCase());
console.log(c.split('e'));
// String.upperCase()

const strArr = [...c.toLowerCase()] // 이런것도 되네 
console.log(strArr); 
// 특정 문자열의 개수를 특정문자열로 split한 length를 따진다.
*/