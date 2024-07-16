//카드뭉치
/*
const cards1 = ["i", "water", "drink"]
const cards2 = ["want", "to"]
const goal = ["i", "want", "to", "drink", "water"]
//위 예시에서 index1 = [0, 2, 1] index2 = [0, 1] 이므로
index1의 오름차순조건에서 걸러지지만
#1
const cards1 = [D, A]
const cards2 = [E, B]
const goal = ["A", "B"] 일경우에는 
index1 = [1] index2 = [1] 로 goal의 length비교도 통과하고 
각 index1, index2오름차순 검사도 통과한다.
하지만 이 케이스는 카드를 사용하지않고 다음카드로 넘어갈수없다는 조건에 위배된다 아마도??
#2
const cards1 = [A]
const cards2 = [B]
const goal = ["A", "B"] 일경우에는 
#3
const cards1 = [A, D, Next]
const cards2 = [B]
const goal = ["A", "Next", "B"] 일경우에는 
index1 = [0, 2]
index1 = [1]
안쓰는 단어 사이에 껴있으면 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다. 조건에 위배됌
이건 'goal의 원소는 cards1과 cards2의 원소들로만 이루어져 있습니다.'조건에 처음부터 위배되는거 아닌가 싶은데
cards1 cards2에있는걸로만 만들수있다 라고치고 
***** index1, index2 의 원소들이 row(연속) 인지 checck하는거 넣어줌 

const index1 = []
const index2 = []
for(let i = 0; i < goal.length; i++) {
  const curChar = goal[i]
  const indexFromCards1 = cards1.indexOf(curChar)
  const indexFromCards2 = cards2.indexOf(curChar)

  if (indexFromCards1 != -1) {
    index1.push(indexFromCards1)
  }
  if (indexFromCards2 != -1) {
    index2.push(indexFromCards2)
  }
}

if(index1.length + index2.length == goal.length) {
  let isValid1 = true
  let isValid2 = true
  for(let i = 0; i < index1.length-1; i++) {
    if(index1[i] > index1[i+1]) {
      isValid1 = false
      break
    }
  }
  for(let i = 0; i < index2.length-1; i++) {
    if(index2[i] > index2[i+1]) {
      isValid2 = false
      break
    }
  }
  return isValid1 && isValid2 ? "Yes" : "No"
}
*/

const index1 = [0, 2, 1]
const index2 = [0, 1]
const goal = [1,2,3,4,5]
if(index1.length + index2.length == goal.length) {
  let isValid1 = true
  let isValid2 = true
  for(let i = 0; i < index1.length - 1; i++) {
    if (index1[i] > index1[i+1]) {
      isValid1 = false
      break
    }
  }
  for(let i = 0; i < index2.length - 1; i++) {
    if (index2[i] > index2[i+1]) {
      isValid2 = false
      break
    }
  }
  console.log(isValid1 ? '1번은 오름차순' : '1번은 오름차순아님');
  console.log(isValid2 ? '2번은 오름차순' : '2번은 오름차순아님');
}

// 다른사람 풀이보니깐 제한사항의 '순서대로한장씩 사용, 사용하지않고 다음카드 불가' 등을
//염두해두고 shift쓴듯 조건을 보고 좀더 생각을 하면 간단하게 끝나네
