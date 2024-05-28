//명예의 전당
const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]
const k = 4
const rankers = []
const minScores = []
for(let i = 0; i < score.length; i++) {
  if(i < k) { // 0 1 2 
    rankers.push(score[i])
    console.log(i, score[i], '가추가');
    // rankers.sort((a, b) => b - a)
    // minScores.push(rankers[k-1])
  } else if (score[i] > rankers[k - 1]) { //명예의 전당최하점보다 높을경우 
    console.log(i, score[i], '가추가');
    rankers.splice(k - 1, 1, score[i])
    // rankers.sort((a, b) => b - a)
  }
  rankers.sort((a, b) => b - a)
  // minScores.push(rankers[k-1]) 
  //이렇게 하면 초기 1번째2번째 값은없어서 안들어감
  minScores.push(rankers[k - 1] ? rankers[k - 1] : Math.min(...rankers))
}
console.log(minScores);