//소수찾기
// const n = 5
// 1 2 3 4 5 6 7 8 9 10
/*
let cnt = 0
for(let i = 2; i <= n; i++) {
  const divisors = [1]
  for(let j = 2; j <= i; j++) {
    if(i % j == 0) {
      divisors.push(j)
      if(i != j) break
      else {
        console.log(`${i}는 소수`);
        cnt++
      }
        
    }
  }
}
console.log(cnt);

//가장기본적인 소수구하기 
//2부터 n-1까지 숫자를 순회하며, 사이에서 나눠지는 수가 존재하면 소수가 아님!!
let isPrime
for(let i = 2; i < n; i++) {
  if(n % i == 0) {
    isPrime = false
    break
  }
}
isPrime = true //시간복잡도 O(N)
*/
//개선 1 : 가운데 약수(제곱근) 까지만 나누어떨어지는지 확인

//개선 2 : 에라토스테네스의 체
/*
1. 2부터 N까지의 수를 나열하고
2. 2를 제외한 2의배수 모두제거
3. 3을 제외한 3의배수 모두제거
4. 5를 제외한 5의배수 모두제거
*/
const n = 26
const nums = []
for(let i = 2; i <= n; i++) {
  nums.push(i)
}

for(let i = 0; i < nums.length; i++) {
  let tmp = nums[i]
  //2
  
}