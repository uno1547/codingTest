// 구명보트
// 실패
// 투포인터를 통해 풀수있다고함
function solution(people, limit) {
    const sorted = people.sort((a, b) => a - b)
    let i = 0
    let j = sorted.length - 1
    let cnt = 0
    
    while (i <= j) {
        if (sorted[i] + sorted[j] <= limit) {
            i++
        }
        j--
        cnt++
    }
    
    return cnt   
}