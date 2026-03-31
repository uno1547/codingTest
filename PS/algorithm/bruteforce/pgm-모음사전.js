// 26 / 3 / 20
function solution(word) {
  /*
  모든 단어를 만들어서 사전순으로 정렬,
  몇번째에 있는지 찾기
  */

  const alphabets = ["A", "E", "I", "O", "U"]
  const dictionary = []

  function makeWords(word) {
    if(word != "") {
      // console.log(`${word}추가`);
      dictionary.push(word)
    }

    if(word.length == 5) {
      return
    }

    for(let i = 0; i < alphabets.length; i++) {
      console.log(`${word} ${alphabets[i]}`);
      makeWords(word + alphabets[i])
    }
  }

  makeWords("")
  
  console.log(dictionary.indexOf(word) + 1);
  return dictionary.indexOf(word) + 1
  // console.log(dictionary);
}

// solution("AAAAE")
// solution("AAAE")
// solution("I")
// solution("EIO")

function solution2(target) {
  const alphabets = ["A", "E", "I", "O", "U"]
  let cnt = 0
  let ans = 0
  let flag = false

  function makeWord(word) {
    if(flag) return

    if(word != "") {
      cnt++
    }

    if(word == target) {
      ans = cnt
      flag = true
      return
    }

    if(word.length == 5) {
      return
    }

    for(let i = 0; i < alphabets.length; i++) {
      makeWord(word + alphabets[i])
    }
  }

  makeWord("")
  return ans
}

solution2("AAA") // 3이나와야함

