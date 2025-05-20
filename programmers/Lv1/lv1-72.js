// 성격유형 검사하기
/*
1 - RT
2 - CF
3 - JM
4 - AN


*/
const map = {

}

const solution = (survey, choices) => {
  const slip = {
    R : 0, T : 0,
    C : 0, F : 0,
    J : 0, M : 0,
    A : 0, N : 0
  }
  let result = ""

  for(let i = 0; i < survey.length; i++) {
    // survey[i] = "NA" or "AN", choices[i] = 1 ~ 7 
    const [firstChar, secondChar] = [survey[i][0], survey[i][1]] // fC, sC = N, A
    const score = choices[i]
    // score에 따라 분기 처리
    if (score < 4) {
      slip[firstChar] += (4 - score)
    } else if(score > 4) {
      slip[secondChar] += (score - 4)
    } else { // 4일때
      null
    }


  }
  result += (slip.R >= slip.T) ? "R" : "T"
  result += (slip.C >= slip.F) ? "C" : "F"
  result += (slip.J >= slip.M) ? "J" : "M"
  result += (slip.A >= slip.N) ? "A" : "N"
  return result
}

// 간단 푸리
function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT","CF","JM","AN"];

  types.forEach((type) =>
      type.split('').forEach((char) => MBTI[char] = 0)
  )

  choices.forEach((choice, index) => {
      const [disagree, agree] = survey[index];

      MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}