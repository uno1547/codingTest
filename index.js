const fs = require('fs');
const lackb = fs.readFileSync('input.txt').toString().trim().split('\n')
const saved = fs.readFileSync('contents.txt').toString().trim().split('\n')
console.log(lackb.length / 3);

const lackbTitles = []
for(let i = 0; i < lackb.length; i+=3) {
  // console.log(lackb[i+2])
  lackbTitles.push(lackb[i+2])
}
console.log('받아야할목록', lackbTitles.length);
console.log('현재있는 목록', saved.length);
for(let i = 0; i < saved.length; i++) {
  // console.log(saved[i]);
}

const downLoad = []
for(let i = 0; i < lackbTitles.length; i++) {
  if(!saved.includes(lackbTitles[i])) {
    downLoad.push(lackbTitles[i])
    console.log(lackbTitles[i]);
  }
}
console.log(downLoad.length);

// console.log(titles);
// const lines = input.
/*
index가 5일때, 원래라면 5뒤의 문자는 f인데
a 가 97이면 *b c *d e f는 각각 98, 99, 100, 101, 102 
skip 에 b, d가 포함되어있다 치면 c e f g h > 99 101 102 103 104 가 되어야함 
이때 skip에 포함되는지안되는지는 범위의 글자를 하나하나 따지면서 skip 에 있느닞 다져야하나
현재문자(97) <   < 마지막문자(97 + 5) 사이에 들어간다면 
간단하게 생각하면 97 + 5 = 102 에서 97 + 7(= 5 + 2) = 104가 되는 셈임 안에 몇개가 포함되어있는지만 구하면 
바로 제외한 n번째의 문자를 구할수있다.
*/