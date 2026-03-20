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
solution("EIO")