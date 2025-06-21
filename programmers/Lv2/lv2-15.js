// 영어 끝말잇기
const solution = (n, words) => {
  const map = {}

  for(let i = 0; i < words.length; i++) {
    const word = words[i]
    if(i == 0) {
      map[word] = 1
      map["lastChar"] = word[word.length - 1]
      continue
    }
    
    const firstChar = word[0]
    const lastChar = word[word.length - 1]

    // ㅋㅋㅋ 만약에 주어진 단어가 lastChar일경우엔 문제되겠지만 모든 단어는 알파벳 소문자로만 이루어져있다고함
    if ((firstChar != map.lastChar) || map[word]) {  //안이어졌는지 이전에 쓴단어인지, 둘중 하나라도 해당하면 탈락
      return [(i % n) + 1, Math.floor((i / n) + 1)]
    }
    // 통과한 단어는 map 갱신처리
    map.lastChar = lastChar
    map[word] = (i % n) + 1
  }
  return [0, 0]
}


// console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
// console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
// console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));

// 중복여부만 따질경우엔 Set사용도 괜찮은 방법이라고함
const solution1 = (n, words) => {
  const used = new Set();
  used.add(words[0]);
  let lastChar = words[0][words[0].length - 1];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const firstChar = word[0];

    if (firstChar !== lastChar || used.has(word)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    used.add(word);
    lastChar = word[word.length - 1];
  }

  return [0, 0];
};
