// 소수 만들기 
function solution(nums) { //3개를 조합뽑는 코드 이건 그냥 외워두면 편할지도
  for(let i = 0; i < nums.length - 2; i++) {
    for(let j = i + 1; j < nums.length - 1; j++) {
      for(let k = j + 1; k < nums.length; k++) {
        console.log(i, j, k);
      }
    }
  }
}
solution([1, 2, 3, 4, 5])

function solution(nums) {
  //고른 3개의 숫자에 대한 합배열 선언
  const sums = []
  for(let i = 0; i < nums.length - 2; i++) {
      for(let j = i + 1; j < nums.length - 1; j++) {
          for(let k = j + 1; k < nums.length; k++) {
              sums.push(nums[i] + nums[j] +nums[k])
          }
      }
  }
  // 합배열 sums에 대해 각 합이 소수인지 판별후, 소수인경우의수를 반환하도록 reduce실행
  const answer = sums.reduce((num, val) => {
      let isPrime = true
      //소수 판별 매번 이런식으로 하면 안좋을듯 
      for(let i = 2; i <= val; i++) {
          if((val % i == 0) && (i != val)) {
              isPrime = false
              break
          }
      }
      if(isPrime) {
          num++
      }
      return num
  }, 0)
  return answer
}


/*
0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
0 3 4
1 2 3
1 2 4
1 3 4
2 3 4
*/ 