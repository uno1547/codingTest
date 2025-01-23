// 대충 만든 자판

function solution(keymap, targets) {
  const ans = []
  for(let i = 0; i < targets.length; i++) {
      const curStr = targets[i] //ABCD
      // console.log('이번target', curStr);
      const curStrArr = curStr.split('') //[A, B, C, D]
      let result = []
      for(let j = 0; j < curStrArr.length; j++) { // A B C D
          const curChar = curStrArr[j]
          // console.log('현재문자', curChar);
          const times = keymap.map((val, idx) => {
              return val.indexOf(curChar) 
          }).filter(time => time != -1) // [0, -1]
          /*
              0 -1 > 0
              1 2 3 > 1
              -1 -1 > -1
              
              모두 -1이면 -1
          */
          
          const tmp = times.length ? Math.min(...times) + 1 : -1
          // console.log('눌러야하는횟수', tmp);
          if(tmp != -1) {
              result.push(tmp)
          } else {
              break
          }
      }
      // result 의 길이와 targets길이가 다르면 -1임
      // console.log(result)
      if(result.length == curStrArr.length) {
        const sum = result.reduce((acc, val) => {
          return acc += val
        }, 0)
        ans.push(sum)
      } else {
        ans.push(-1)
      }
  }
  console.log(ans);
}

function solution2(keymap, targets) {
    const answer = [];
    const map = {}
    for (const items of keymap) {
      console.log(items);
        items.split('').map((item, index) => {
          map[item] = (map[item] < index+1 ? map[item] : index+1)
          console.log(map);
        })
    }
    // keymap을 순회하면서 전체 map을 초기화하네;; 이렇게 되면 난 keymap 순회하면서 indexOf로했는디
    // console.log(keymap);
    for (const items of targets) {
        answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1) // 만약 존재하지않아서 cur += undefined이면 undefined || -1 > 존재하지않으면 -1이push되고 존재한다면 sum이 push 된다!! holy
    }
    return answer;
}
console.log(solution2(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
console.log(solution2(["AA"], ["AC", "AAAA"]));
console.log(solution2(["AGZ", "BSSS"], ["ASA", "BGZ"]));
// console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));