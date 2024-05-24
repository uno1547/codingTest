//가장 가까운 같은 글자
function solution() {

}
const s = "foobar"
const sArr = [...s] 
const ans = []
for(let i = 0; i < sArr.length; i++) { // 0 1 2 3 4 5
  const curChar = sArr[i]
  let sameIndexes = []
  for(let j = i - 1; j >= 0; j--) {
    if(sArr[j] == curChar) { // 같은게 등장하면 해당인덱스 push
      sameIndexes.push(j)
    }
  }
  ans[i] = (sameIndexes.length == 0) ? -1 : i - Math.max(...sameIndexes)
}
// console.log(sArr);
//다른사람
const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });

