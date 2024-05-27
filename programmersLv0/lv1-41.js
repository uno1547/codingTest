// 두개 뽑아서 더하기
//지난번에 봤던 조합 (n개중 3개를 뽑기) 이번에는 n개중에 2개뽑기
const numbers = [2,1,3,4,1]
const result = []
for(let i = 0; i < numbers.length - 1; i++) {
    let sum = 0
    for(let j = i + 1; j < numbers.length; j++) {
        sum = numbers[i]+numbers[j]
        result.push(sum)
    }
}
const set = new Set(result)
// set를 통해서 원소의 중복제거가능
console.log(set)
// 다시 전개해서 배열로 반환
return [...set].sort((a, b) => a - b)