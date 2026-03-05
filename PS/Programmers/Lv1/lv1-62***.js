function mySolution(s, skip, index) {
  // s = "aukks"  skip = "wbqd" index = 5
  const sArr = [...s]
  const newStrArr = sArr.map((char) => {
    // console.log(`${char}의 ascii코드`, char.charCodeAt(0));
    const rangeCodes = []
    let charCode = char.charCodeAt(0)
    for(let i = 0; i < index; i++) { 
      if ((charCode + 1) > 122) {
        charCode = ((charCode + 1) % 122) + 96
      } else {
        charCode += 1
      }
      rangeCodes.push(charCode)
      // console.log(arr);
    }
    console.log(`index 범위의 rangeCodes`, rangeCodes);

    const skipCodes = [...skip].map((char, idx) => skip.charCodeAt(idx))
    console.log(`skip코드들`, skipCodes);
    const nums = skipCodes.reduce((num, code) => {
      if(rangeCodes.includes(code)) num++
      return num
    }, 0)
    console.log(nums, "개포함");
    let newCharCode = rangeCodes[rangeCodes.length - 1] + nums
    // newCharCode = (newCharCode > 122) ? (newCharCode - 122) + 97 : newCharCode
    if(newCharCode > 122) newCharCode = (newCharCode - 122) + 96
    console.log(newCharCode);
    console.log('계산된 새문자열', String.fromCharCode(newCharCode));
    return String.fromCharCode(newCharCode)
  })
  const ans = newStrArr.join('')
  console.log(ans);
  return ans
  // s = "eirp" skip = ""
  // 토큰 기준 Index 범위의 ascii 코드 배열
  // const sArr = [98, 99, 100, 101, 102]
  // skip 문자열 > ascii코드 배열화
  // const skipCodes = [...skip].map((char, idx) => skip.charCodeAt(idx))
  // // 토큰기준 ascii 코드 배열에, skip ascii 코드가 몇개 포함되어있는지 계산
  // const nums = skipCodes.reduce((num, code) => {
  //   if(sArr.includes(code)) num++
  //   return num
  // }, 0)
  // let newCharCode = sArr[sArr.length - 1] + nums
  // newCharCode = (newCharCode > 122) ? (newCharCode - 122) + 97 : newCharCode
  // console.log(newChar);
}

function solution1(s, skip, index) {
  var answer = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let arr = [...alphabet];

  s = s.split('');
  skip = skip.split('');

  for(let i = 0; i < skip.length; i++) {
      arr = arr.filter(e => e !== skip[i]);
  } // skip을 제외한 arr 반환
  console.log(arr)
  for(let i = 0; i < s.length; i++) {
      let idx = 0;
      idx = arr.indexOf(s[i]);
      idx += index;

      if(idx > arr.length - 1) {
          idx %= arr.length
      }

      answer += arr[idx];
  }
  console.log(answer)
  return answer;
}

function solution2(s, skip, index) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                    "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
  console.log(alphabet)
  return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
}
// solution("aukks", "wbqd", 1) // [98, 100, 113, 119] a : 97 이고 index가 5 > 
console.log(solution2("zzzz", "abcd", 3)) // [98, 100, 113, 119] a : 97 이고 index가 5 > 
console.log(solution2("xyza", "bcde", 4)) // 반례!!! 옮긴거가 skip의요소일수있다.
// console.log("z".charCodeAt(0)); // z 의 ascii 코드값 122
// console.log("a".charCodeAt(0)); // a 의 ascii 코드값 97
function getArr(num, index) {
  const arr = []
  for(let i = 0; i < index; i++) { 
    if ((num + 1) > 122) {
      num = ((num + 1) % 122) + 96
    } else {
      num += 1
    }
    arr.push(num)
    // console.log(arr);
  }
  console.log(arr);
}
// getArr(121, 3)
// getArr(122, 3)
// getArr(120, 4)
// 더한 newCharCode가 122 초과일경우 처리
// if(newCharCode > 122) {
//   newCharCode = (newCharCode - 122) + 97
// }
/*
a : 97 
index : 5
98, 99, 100, 101, 102 이배열 돌면서 reduce로 2개가 어디서 나온 2개일까


*/

// console.log("abc".charAt(2)); // 해당 index의 문자 반환
// console.log("abc".charCodeAt(1)); // 해당 index 문자의 ascii코드 반환
// console.log("z".charCodeAt(0));




/*
s	      skip	  index	result
"aukks"	"wbqd"	5	    "happy"

a(97) > index 5 > 102 "wbqd" [98, ]

a : [b, c, d, e, f] > [c, e, f, g, h] > index가 5면 배열 길이가 5가될때까지 반복 b, d는 스킵하면서
index가 5일때, 원래라면 5뒤의 문자는 f인데
a 가 97이면 *b c *d e f는 각각 98, 99, 100, 101, 102 
skip 에 b, d가 포함되어있다 치면 c e f g h > 99 101 102 103 104 가 되어야함 
이때 skip에 포함되는지안되는지는 범위의 글자를 하나하나 따지면서 skip 에 있느닞 다져야하나
현재문자(97) <   < 마지막문자(97 + 5) 사이에 들어간다면 
간단하게 생각하면 97 + 5 = 102 에서 97 + 7(= 5 + 2) = 104가 되는 셈임 안에 몇개가 포함되어있는지만 구하면 
바로 제외한 n번째의 문자를 구할수있다.
*/