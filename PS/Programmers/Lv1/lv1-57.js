// 실패율 성공!! 시간복잡도 개선필요
function solution(N, stages) {
  const result = new Array(N).fill(0).map((_, idx) => idx + 1)
  stages.sort((a, b) => a - b)
  result.sort((a, b) => {
      const aVisitNum = (stages.indexOf(a) == -1) ? 0 : stages.length - stages.indexOf(a)
      const aStuckNum = stages.lastIndexOf(a) - stages.indexOf(a) + 1
      const aFailure = (aVisitNum == 0) ? 0 : (aStuckNum / aVisitNum)
      
      const bVisitNum = (stages.indexOf(b) == -1) ? 0 : stages.length - stages.indexOf(b)
      const bStuckNum = stages.lastIndexOf(b) - stages.indexOf(b) + 1
      const bFailure = (bVisitNum == 0) ? 0 : (bStuckNum / bVisitNum)
      
      return bFailure - aFailure
  })
  return result
}
// 5, [2, 1, 2, 6, 2, 4, 3, 3]
function solution(N, stages) {
  const result = new Array(N).fill(0).map((_, idx) => idx + 1)
  const stageDic = stages.reduce((dic, val) => {
    if(dic[val]) dic[val]
  }, {})
  stages.sort((a, b) => a - b)
  result.sort((a, b) => {
      const aVisitNum = (stages.indexOf(a) == -1) ? 0 : stages.length - stages.indexOf(a)
      const aStuckNum = stages.lastIndexOf(a) - stages.indexOf(a) + 1
      const aFailure = (aVisitNum == 0) ? 0 : (aStuckNum / aVisitNum)
      
      const bVisitNum = (stages.indexOf(b) == -1) ? 0 : stages.length - stages.indexOf(b)
      const bStuckNum = stages.lastIndexOf(b) - stages.indexOf(b) + 1
      const bFailure = (bVisitNum == 0) ? 0 : (bStuckNum / bVisitNum)
      
      return bFailure - aFailure
  })
  return result
}

//4, [4, 4, 4, 4, 4]