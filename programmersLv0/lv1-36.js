//삼총사 재쉬ㅣㅣㅣ 재귀함수, 중첩반복문
// const members = [-2, 3, 0, 2, -5]
// 0 1 2 3 4 
/*
0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
1 2 3
1 2 4
2 3 4
*/
const members = [-2, 3, 0, 2, -5]
/*
let cnt = 0
for(let i = 0; i < members.length; i++) {
  for(let j = 1; j < members.length; j++) {
    for(let k = 1; k < members.length; k++) {
      const value = members[i] + members[i + j] + members[i + j + k]
      console.log(value);
      if(isNaN(value)) continue
      !value && (cnt += 1)
    }
  }
}
console.log(cnt);
*/
let result = 0;
const combination = (current, start) => {
  console.log('current:', current, 'start', start);
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }
    for (let i = start; i < members.length; i++) {
      console.log([...current, members[i]]);
      combination([...current, members[i]], i + 1);
    }
}
combination([], 0)
//3중 for루프
const array = ['a', 'b', 'c', 'd', 'e']
for(let i = 0; i < array.length; i++) {
  for(let j = i + 1; j < array.length; j++) {
    for(let k = j + 1; k < array.length; k++) {
      console.log(i, j, k);
    }
  }
}
