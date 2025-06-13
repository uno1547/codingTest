// JadenCase 문자열 만들기
/*
모든 단어의 첫문자가 대문자이고, 그외는 모두 소문자
첫문자가 알파벳 아닐때는 pass

숫자는 단어의 첫문자로만
공백문자가 연속해서 나올수있다.
*/
const solution = (s) => {
  const tokens = s.split(" ")
  console.log(tokens);
  const norTokens = tokens.map(str => str.toLowerCase())
  const JadenCase = norTokens.map(token => {
    // 빈문자열은 pass
    if(token == '') return token

    const jadenToken = `${token[0].toUpperCase()}${token.slice(1)}`
    return jadenToken
  })
  const ans = JadenCase.join(" ")
  return ans

}

solution("3people  unFollowed me")

// 문자열 분리후 각 문자에 대한 처리 진행할때 빈문자열이 끼면 undefined로 인한 오류 발생가능!!! 조심 오 charAt 는 index초과한 값에 대해 '' 반환 Undefined가 안나온다는 특징