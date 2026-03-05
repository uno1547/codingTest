//약수의 합
function solution () {

}
const a = 4 // 1,2,3,6
const div = []
for (let i = 1; i <= a; i++) {
  if(a % i == 0) {
    div.push(i)
  }
}
console.log(div);