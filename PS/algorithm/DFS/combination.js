// 조합 
// 배열의 요소들중 m개를 뽑는 경우
// 재귀적으로 해결 동일과정이 비슷하게 이어져나감

function getCombinations(n, r) {
  console.log(`getCombinations(${n}, ${r})`);
  const results = []
  if(r == 1) {
    // console.log('크기1이므로 n 개별반환');
    console.log(`getCombinations(${n}, ${r}) 의 결과 ${n} 개별반환`);
    return n.map(val => [val])
  }
  
  n.forEach((el, idx, origin) => {
    const rest = origin.slice(idx + 1) // 고정 요소 제외 나머지 r - 1개
    // console.log(`el : ${el} rest : ${rest}`);
    const combinations = getCombinations(rest, r - 1) 
    // console.log('combinatins', combinations);
    const attached = combinations.map(combination => [el, ...combination])
    // console.log('attached', attached);
    results.push(...attached)
    console.log('results', results);
  });
  console.log(`getCombinations(${n}, ${r}) 의결과 result`);
  console.log(results);
  return results
}

const arr = [1, 2, 3, 4, 5]
const r = 3

const combinations = getCombinations(arr, r)
console.log(combinations);

const results1 = []
function getCombinations1(arr, r) {
  const results = []
  if (r == 1) {
    return arr.map(val => [val])
  }

  arr.forEach((el, idx, origin) => {
    const rest = origin.slice(idx + 1)
    const combinations = getCombinations(rest, r - 1)
    const attached = combinations.map(combination => [el, ...combination])
    results.push(...attached)
  })
  return results
}