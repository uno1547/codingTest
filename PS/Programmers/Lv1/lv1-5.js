//자연수 뒤집어 배열로 만들기
function solution(n) {
  const numToArr = [...String(n)]
  return numToArr.reverse()
}
let num = 12345
const arr = []
do {
    arr.push(num%10);
    num = Math.floor(num/10);
    console.log(arr, num)
} while (num>0);

/*
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
*/