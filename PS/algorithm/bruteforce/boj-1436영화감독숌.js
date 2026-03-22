/*
1 666
2 1666
3 2666
4 3666

6 5666
7 6660
8 6661
9 6662
10 6663
11 6664
12 6665
13 6666
14 6667
15 6668
16 6669
17 7666
18 8666
19 9666
20 10666
21 
*/

const fs = require('fs')
const n = Number(fs.readFileSync('./memo.txt').toString().trim())

// 숫자를 계속 증가시키면서 종말의 리스트 갱신, n번째가 나오면 출력

let num = 666
const dic = [null]

while(true) {
  if(String(num).includes("666")) { // 666포함안되면 pass
    dic.push(num)
    console.log(dic);
  }
  if(dic[n]) break
  num += 1
}

console.log(dic[n]);

/*
let num = 666
let cnt = 0

while(true) {
  if(String(num).includes("666")) {
    cnt++
  }
  if(cnt == n) break
  num++
}

console.log(num);
*/