// N개의 최소공배수
function solution(arr) {
    const max = arr.sort((a, b) => b - a)[0]
    const rest = arr.slice(1)
    let tmp = 1
    while(true) {
        const maxMul = max * tmp // 4 8 12 16
        const isDiv = rest.filter(val => (maxMul % val) == 0)// 나머지들중 나누어떨어지는것들
        if(isDiv.length == rest.length) return maxMul
        tmp++
    }
}

// 유클리드 호제법 이라는게 있네