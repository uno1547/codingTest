//문자열이 몇번 등장하는지 세기
const myString = "aaaa"
const pat = "aa"
let cnt = 0
for(let i = 0; i <= myString.length - pat.length; i++) {
  const sliced = myString.slice(i, i + pat.length)
  if (sliced == pat) cnt++
}
console.log(cnt);
