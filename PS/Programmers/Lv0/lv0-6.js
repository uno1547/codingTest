// 주사위 게임3
function solution(a, b, c, d) {
  const arr = [a, b, c, d]
  const set = new Set([a, b, c, d])
  console.log('set', set);
  const length = set.size
  console.log('set length', length);
  const dupSet = new Set(arr.filter((el, index) => arr.indexOf(el) != index))
  const dupEls = [...dupSet]
  console.log('dupSet', dupSet);
  let score = 0
  switch(length) {
      case 4: //다다를경우
        score = Math.min(a, b, c, d)
        break
      case 3: //2개같고 2개다름
        const p = dupEls[0]
        set.delete(p)
        let [q, r] = [...set]
        score = q * r
        break
      case 2: //2개같고 2개같고 아니면 3개같고 1개다름
        if (dupEls.length == 2) { // 2개같고 2개같고
          score = (dupEls[0] + dupEls[1]) * Math.abs(dupEls[0] - dupEls[1])
        } else { //3개같고 1개다름
          const p = dupEls[0]
          set.delete(p)
          const q = [...set][0]
          score = (10 * p + q)**2
        }
        break
      case 1: //4개같음
        score = 1111 * arr[0]
        break
  }
  console.log(score);
  return score
}
// solution(2, 2, 2, 2)
// solution(4, 1, 4, 4)
solution(6, 3, 3, 6)
// solution(2, 5, 2, 6)
// solution(6, 4, 2, 5)
/*
const arr = [1, 2, 2, 1]
const dupEls = arr.filter((el, index) => {
  if (arr.indexOf(el) != index) {
    console.log(`${index}번째 원소 ${el}`);
    return arr.indexOf(el) != index
  }
})
const dupSet = new Set(dupEls)
console.log(dupSet);
*/