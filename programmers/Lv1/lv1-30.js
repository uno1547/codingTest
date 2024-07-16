//최대공약수와 최소공배수
// n과 m의 최대공약수, 최소공배수를 구하는 코드
function solution(n, m) {
  const nDivs = []
  for(let i = 1; i <= n; i++) {
    if(n % i == 0) nDivs.push(i)
  }
  //nDivs = [1, 2, 3, 6]
  const mDivs = []
  for(let j = 1; j <= m; j++) {
    if(m % j == 0) mDivs.push(j)
  }
  //mDivs = [1, 2, 3, 6, 9, 18]
  //최대공약수를 구해야함 nDivs, mDivs순회하면서 중복되는원소중 최댓값찾으면됨
  // 1. 순회하며 include하고있을경우 greatDivisor갱신
  /*
    let greatDivisor = 1
  for (let i = 0; i < nDivs.length; i++) {
    if (mDivs.includes(nDivs[i])) greatDivisor = nDivs[i]
  }
  console.log(greatDivisor);
  */
  // 2. filter로 순회하며
  const commonDivs = nDivs.filter((val) => mDivs.includes(val))
  const maxCommonDiv = Math.max(...commonDivs)
  // console.log(maxCommonDiv);
  //3. 인터넷에서 찾은 
  /*
  let getGCD = (num1, num2) => {
  let gcd = 1;

  for(let i=2; i <= Math.min(num1, num2); i++){
      if(num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  
  return gcd;
}
  */
  // 공배수중 가장작은 최소공배수를 찾아야함 이 정의로는 못하겠음;;
  // 최소공배수 찾는코드
  let getLCM = (num1, num2) =>{
    let lcm = 1;
      while(true){
        if((lcm % num1 == 0) && (lcm % num2 == 0)){
          break;
        }
        lcm++;
      }
      return lcm
  }
}
solution(9, 18)
/*

*/
//약수구하는코드들
//제일기본
let num = 8
let result = []
let index = 1
while(index <= num) {
  if(num % index == 0) result.push(index)
  index++
}
//시간복잡도를 O(N) > O(logN)으로 줄이기위해 제곱근활용하는코드
//약수는 num^1/2 를 기준으로 대칭으로 존재한다고함
//찾아보자 이것도 


//다른사람의 전체정담
function gcdlcm(a, b) {
  let r;
  for(let ab = a*b; ) {}
}