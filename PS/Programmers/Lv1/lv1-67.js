// 숫자 짝꿍

const toMap1 = () => {
  //1. for문
  const arr = ["0", "0", "1"]
  const map = {}
  for (let num of arr) {
    // map[num] = map[num] ? map[num] + 1 : 1
    map[num] = (map[num] || 0) + 1
  }
  console.log(map);
}

const toMap2 = () => {
  //1. for문
  const arr = ["0", "0", "1"]
  const map = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1 // 오호 있으면 기존 + 1, 없으면 0 + 1
    return acc
  }, {})
  console.log(map);
}
// toMap1()

// 객체로 만든뒤 겹치는개수만큼 다시객체로 이후 Object.entries(obj) > 숫자별 개수 내림차순
function solution(X, Y) {
  const xArr = [...X]
  const yArr = [...Y]
  /*
  xArr.sort((a, b) => a - b)
  yArr.sort((a, b) => a - b)
  */
  const xDic = {}
  const yDic = {}
  
  for (let num of xArr) {
      xDic[num] = (xDic[num] || 0) + 1
  }
  
  for (let num of yArr) {
      yDic[num] = (yDic[num] || 0) + 1
  }
  
  // console.log(xDic)
  // console.log(yDic)
  
  const resultDic = {}
  for (let num in xDic) {
      // console.log(num, xDic[num])
      if(yDic[num]) {
          resultDic[num] = Math.min(xDic[num], yDic[num])
      }
  }
  
  // console.log(resultDic)
  const sorted = Object.entries(resultDic).sort((a, b) => Number(b[0]) - Number(a[0]))
  // const sorted = Object.entries(resultDic)
  
  // console.log(sorted)
  
  if(sorted.length == 0) {
      return "-1"
  }
  console.log(sorted);
  // sorted = [["5", 2], ["3", 1]]
  const result = sorted.reduce((acc, cur) => {

      // for(let i = 0; i < cur[1]; i++) {
      //     acc += cur[0]
      // }
      acc += cur[0].repeat(cur[1])
      return acc
  }, "")
  
  /* 이렇게 하면 틀린 케이스 존재 아마도 Number(문자열)에서 
  문자열의 길이가 매우길어지면 Number() 처리하면 infinity가 나온다고함
  Number은 0000000을 0으로 바꿀때만 쓰고, 나머지는 그대로 처리 
  console.log(String(Number(result)));
  return String(Number(result))
  */

  if(Number(result) == 0) return "0"
  return result
}

solution("100", "2345")
solution("100", "203045")
solution("100", "123450")
solution("12321", "42531")
solution("5525", "1255")

/*
일부는 예외케이스로 결과가 틀리는것같고 > Number(긴문자열)시 Infinity가 나올수도있다.!
*/

let str = ""
for(let i = 0; i < 500; i++) {
  str += 9
}

console.log(str);
console.log(Number(str));

function solution2(){
  let nums = [1,2,3,1,1,5,6,7,8,6]
  /*
  const set = new Set(nums)
  console.log(set);
  const arr = Array.from(set)
  console.log(arr);
  */
  const arr = nums.filter((el, idx) => {
    return idx === nums.indexOf(el)
  })
  console.log(arr);
}
solution2()
//배열을 중복값을 제거하라