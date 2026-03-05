// 한번만 등장한 문자 
const s = "abcabcadc"
let ans = ''
for(let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    let cnt = 0
    for(let j = 0; j < s.length; j++) {
        if(s[i] == s[j]) cnt++
    }
    // console.log(cnt);
    if(cnt == 1) ans+=s[i]
}
// console.log(ans);
//
let ans1 = []
for(let char of s) {
  if(s.indexOf(char) == s.lastIndexOf(char)) { //이것도 시간복잡도 n^2이라고함 indexof lastindex때문인듯
    ans1.push(char)
  }
}
console.log(ans1.sort().join(''));