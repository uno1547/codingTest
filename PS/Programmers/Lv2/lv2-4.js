// 이진 변환 반복하기
// s가 "1" 이될때까지 s에 이진변환할때, 이진변환의 횟수와 변환과정에서 제거된 모든 0의 개수
const solution1 = (s) => {
  const ans = [0, 0] // 횟수, 지운 0의개수

  while(true) {
    // 계속 반복하다가 s가 "1" 이면 break
    if(s == "1") break
    // const trimmed = [...s].map()
    // map은 시간 많이걸리려나, For문의 continue로 줄일수있나?
    ans[0]++
    // 이진변환 진행
    let tmp = ""
    for(let i = 0; i < s.length; i++) {
      if(s[i] == "0") {
        // s = s.slice(i,) // 이건 시간복잡도 초과의 원인이될것같고, idx변하면서 스캔에 누락이 발생함 > 자르는 과정없이
        ans[1]++ // 지운 0개수 + 1
        continue
      }
      tmp += "1"
    }
    // tmp = "1111"
    const newStr = tmp.length.toString(2)
    console.log(newStr);
    s = newStr
    // 읽으면서 0이면 지움처리를 해야하는데, splice(i, 1) 로 0을 지워나가면 시간이 더들 것같은느낌? 그냥 해보고 나중에 수정해볼까
    // const length = str.
  }
  console.log(ans);
  return ans
}

// solution("1") 
// solution("10") 
// solution("01110") 
// solution("1111111") 
// solution("110010101001") 



function solution(s) {
    const result = [0, 0]

    while(s != "1") {
        // 모든 0 제거
        result[0]++
        let tmp = ""
        // console.log(s)
        console.log(`s : ${s}`);
        for(let i = 0; i < s.length; i++) {
            if(s[i] == "0") {
                result[1]++
                continue
            }
            tmp += "1"
        }
        console.log(`0제거된 tmp : ${tmp}`);
        console.log(`0제거된 result : ${result}`);
        // 길이를 2진법 문자로 표현
        const digit = tmp.length.toString(2)
        console.log(`0제거된 tmp의 길이의 이진표현 : ${digit}`);
        // result[0] = length.toString(2)
        s = digit
    }
    console.log(result);
    return result
}

// solution("110010101001") 
// solution("01110") 
solution("1111111") 

// solution("1") 
// solution("10") 