//과일장수
const k = 4
const m = 3
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]
score.sort((a, b) => a - b)

const boxNum = Math.floor(score.length / m)
const trashNum = score.length % m
score.splice(0, trashNum)

console.log(boxNum, trashNum); // 4개의 박스에 나눠담아야한다 
/*
이때 이익 = 박스의 최저사과 점수 * 박스에 담긴 사과개수 이므로 
최대이익이 되기위해선 최저사과들을 한박스에 몰아야한다

또한 전체 사과를 담을 박스 개수가 정해지고 버려야하는 사과가 생길경우, 점수가 낮은사과부터 버리면 된다
뭐야 그러면 그냥 크기순으로 정렬하고 포장만 하면 되는거아님 
*/
let sum = 0
for(let i = 0; i < boxNum; i++) { // 0 1 2 3
  const box = score.slice(m * i, m * i + m)
  sum += Math.min(...box) * m
}
console.log(sum);

//다른사람의 풀이
let answer = 0;
const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
for (let i = 0; i < sortedScore.length; i += m) { // 어차피 크기순으로 정렬되어있으면 i+=m을 하면서 점수에 합산하면 됌(그게 점수 내는 방식으로 정해줫으니깐)
    answer += sortedScore[i] * m;
}
return answer;