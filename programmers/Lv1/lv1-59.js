// 다트게임 
// let dartResult = "10S2T3T"
const dict = {"S" : 1,"D" : 2,"T" : 3}
const option = {"*" : 2, "#" : -1}
// const length = dartResult.length;

// 주어진문자열을 앞에서부터 한개씩검사하고 자르면서 파싱함
/* 익명1의 방법
while(dartResult[0]){
    const cur = parseInt(dartResult)
    const len = cur ? (cur+ "").length : 1;
    if(Number.isInteger(cur)) dartScore.push([cur]);
    else dartScore[dartScore.length - 1].push(dartResult[0]);
    dartResult = dartResult.slice(len)
}
console.log(dartScore);
*/

// gpt의 방법
/*
function splitString(str) {
  const parts = [];
  let currentPart = "";

  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      // Check if the current character is a digit
      if (!isNaN(parseInt(char))) {
          // If currentPart is not empty, push it to parts array
          if (currentPart !== "") {
              parts.push(currentPart);
              currentPart = "";
          }
          // Start a new part with the current digit
          currentPart += char;
      } else {
          // Add the current character to the currentPart
          currentPart += char;
      }
  }

  // Push the last part to the parts array
  if (currentPart !== "") {
      parts.push(currentPart);
  }

  return parts;
}
*/



// 대충 흐름을 토대로 새로짜본

/*
cur = "10" > cur = "10S" > push(cur) >  

*/

// const str = "10S*2T3S";
let str = "10S2T3S";
const result = splitString(str);
console.log(result);
function splitString(str) {
  const parts = []
  let currentPart = ""

  while(true) {
    let cur = parseInt(str) // 10 || 1 || "S" || "*" 추출
    let len

    if(isNaN(cur)) { // 문자
      cur = str[0]
      len = 1

    } else { // 숫자
      len = String(cur).length
      
    }
    currentPart += cur
    str = str.slice(len)

    // 10S > S일때 push,초기화
    // 10S* > *일때 push,초기화
    // NaN 이면서 뒤에 첫글자가 숫자 
    // NaN 이면서 * 혹은 #
    // 10S2D > S에서 초기화 push / 10S# 일때 초기화 push
    if(isNaN(cur)) { // 문자이면서
      if(cur == "#" || cur == "*") { // * #이면 무조건 push,초기화
        parts.push(currentPart)
        currentPart = ""
      } else if(!isNaN(parseInt(str[0]))) {
        parts.push(currentPart)
        currentPart = ""
      }
    }

    if(str.length == 0) break
  }
  return parts
}

