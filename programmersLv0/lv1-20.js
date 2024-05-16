//콜라츠 추측
let n = 626331
let tmp = 0
while(n != 1) {
  if (tmp >= 500) {
    tmp = -1 
    break
  }
  if (n % 2) { //홀수이면
    console.log(`${n}은 홀수이므로`);
    n = n * 3 + 1
    console.log(`새로운 n: ${n}`);
  } else {
    console.log(`${n}은 짝수이므로`);
    n /= 2
    console.log(`새로운 n: ${n}`);
  }
  tmp += 1
  console.log(`현재tmp : ${tmp}`);
}
console.log(tmp);
return tmp
//맞히긴했는데 잘모르겟다