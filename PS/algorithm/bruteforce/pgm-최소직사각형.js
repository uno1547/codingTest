// 26 / 3 / 16
function solution(sizes) {
  /*
    새 명함 사이즈의 길이에서 기존 지갑 크기보다 큰게 나오면 대체해야함
  */
  const min = []
  const max = []

  sizes.forEach(size => {
    min.push(Math.min(...size))
    max.push(Math.max(...size))
  })

  return Math.max(...min) * Math.max(...max)
}

