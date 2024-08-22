// 문자열 나누기 다시풀어봐야함
/*
"banana"
{
  n : 1
  rest : 1
}
['ba', 'na', 'na']

str = "banana"
x = "b"
"ba" > 개수같으니 > ["ba"] 추가

str = "nana"
x = "n"
"na" > 개수같으니 > ["ba", "na"]추가

str = "na"
x = "n"
"na" > 개수같으니 > ["ba", "na", "na"]

srt = ""




"abracadabra"
{
  r : 1
  rest : 0
}
['ab', 'ra', ]

"aaabbaccccabba"
{
  a : 4
  rest : 4 
}
["aaabbacc", "ccab", "ba"]
*/

//문자열로 ㄱ
function solution(s) {
  let ans = [];
  while (s.length > 0) {
      let x = s[0];  // 현재 첫 문자를 x로 설정
      let dic = { [x]: 0, rest: 0 };  // dic 초기화
      let i = 0;
      
      // 문자열을 순차적으로 탐색하며 dic을 업데이트
      while (i < s.length) {
          let cur = s[i];
          if (cur === x) {
              dic[x]++;
          } else {
              dic.rest++;
          }

          // 처음으로 rest가 x와 같아지는 지점을 찾는다.
          if (dic[x] === dic.rest) {
              break;
          }
          i++;
      }

      // 찾은 부분을 ans에 추가하고, s에서 해당 부분을 제거
      ans.push(s.slice(0, i + 1));
      s = s.slice(i + 1);
  }
  return ans.length;
}
// const ans = solution("banana")

function solution(s) {
  let ans = 0
  let cur 
  let cnt = 0

  for(let i = 0; i < s.length; i++) {
    if(cnt == 0) {
      ans++ //ans = 1
      cur = s[i] //cur = "b"
      cnt = 1 // cnt = 1
    } else {
      if(cur != s[i]) cnt--
      else cnt++
    }
  }
  return ans
}
console.log(solution("banana")); //3
console.log(solution("abracadabra")); //6
console.log(solution("aaabbaccccabba")); //3