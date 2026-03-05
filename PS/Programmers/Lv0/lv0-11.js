//세로 읽기
const my_string = "ihrhbakrfpndopljhygc"
const [m, c] = [4, 2]
let ans = ''
for(let i = 0; i <= my_string.length - m; i+=m) {
  const row = my_string.slice(i, i+m)
  ans += row[c-1]
}
console.log(ans);

// filter ㅋㅋㅋㅋ 대단핟
function solution(my_string, m, c) {
    return [...my_string].filter((_, i) => i % m === c - 1).join('');
}
// reduce
function solution(my_string, m, c) {
    return Array.from(my_string).reduce((word, v, i) => {
        return i % m + 1 === c ? word + v : word
    }, '')
}
// 기본
function solution(my_string, m, c) {
    var answer = '';

    for(let i = 0; i < my_string.length; i += m) {
        answer += my_string[i + c - 1]
    }
    return answer;
}
