//순열
/*
const permutation = function(permu, rests, output) {
  if(rests.length == 0) {
    return output.push(permu)
  }
  rests.forEach((val, ind) => {
    const rest = [...rests.slice()]
  });
}
const input = [1, 2, 3, 4]
const output = []
permutation([], input, output)
*/

//조합
// input = [1,2,3,4] number = 3 4개중3개를 고르는 경우들
const getCombinations = function(arr, selectNumber) {
  const results = [];
  console.log(`${arr} 에서 ${selectNumber}개 뽑기시작`);
  console.log('현재조합배열', results);
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  arr.forEach((fixed, index, origin) => {
    console.log(`fixed : ${fixed} index: ${index} origin:${origin}`);
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    console.log(rest);
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    console.log('combinations', combinations);
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    console.log('attatched', attached);
    results.push(...attached); // 배열 spread syntax 로 모두다 push
    console.log('results', results);
  });
  return results; // 결과 담긴 results return
}
getCombinations([1, 2, 3, 4], 3)