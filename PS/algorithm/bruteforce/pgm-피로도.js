// 26 / 3 / 18
// 브루트포스
function solution(k, dungeons) {
  // 탐색위해 idx배열생성
  const idxArr = Array.from({ length : dungeons.length }, (_, i) => i)
  // console.log(idxArr); // [0, 1, 2]
  
  // 모든 탐색 순서 저장
  const bucket = []
  function makeCombination(combination, rest) {
    // if(combination.length > 0) {
    if(combination.length == dungeons.length) { // 약간의 최적화
      bucket.push([...combination])
      // console.log(bucket);
    }

    for(let i = 0; i < rest.length; i++) {
      const picked = rest[i]
      const nextRest = [...rest]
      nextRest.splice(i, 1)
      // makeCombination([...combination].push(picked), nextRest) 이렇게 되면 push의 반환값인 배열길이가 넘겨지므로 버그발생
      makeCombination([...combination, picked], nextRest)
    }
  }

  makeCombination([], idxArr)
  console.log(bucket);

  // 탐색하면서 최대 던전수 갱신
  let answer = 0
  for(let i = 0; i < bucket.length; i++) {
    let hp = k
    const route = bucket[i]
    console.log(`탐색순서는 ${route}`);
    
    let maxNum = 0 
    for(let j = 0; j < route.length; j++) {
      const [reqHP, usedHP] = dungeons[route[j]]
      console.log(`최소피로도${reqHP} 소모피로도${usedHP}`);
      // 최소필요피로도 부족시 탐험 불가
      if(reqHP > hp) {
        console.log('탐험불가!');
        break;
      }
      hp -= usedHP
      maxNum++
      console.log(`피로도${usedHP}소모해서 ${hp}로 탐험${maxNum} 번 완료`);
    }

    console.log(`기존 최댓값 ${answer} 현탐험 방문값 ${maxNum}`);
    if(maxNum > answer) answer = maxNum
  }

  return answer
}

// 백트래킹
function solution2(k, dungeons) {
  let answer = 0
  const idxArr = Array.from({ length: dungeons.length }, (_, i) => i);

  function explore(hp, maxNum, rest) {
    // 최대 탐험 횟수 갱신
    if(maxNum > answer) {
      answer = maxNum
    }

    for(let i = 0; i < rest.length; i++) {
      const picked = rest[i]
      const [reqHP, usedHP] = dungeons[picked]

      if (hp >= reqHP) {
        const nextRest = [...rest]
        nextRest.splice(i, 1)
        explore(hp - usedHP, maxNum + 1, nextRest)
      }
    }
  }

  explore(k, 0, idxArr); // 초기 체력 k, 깬 횟수 0으로 탐험 시작
  return answer
}

solution(80, [[80,20],[50,40],[30,10]])