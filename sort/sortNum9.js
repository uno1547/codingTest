//10814번 한번에 성공 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
// console.log(input)
let Nums = Number(input[0])
let members = []
for(i = 1; i <= Nums; i++) {
  let member = {}
  member.age = Number(input[i].split(' ')[0])
  member.name = input[i].split(' ')[1]
  member.order = i
  members.push(member)
}
// console.log(members)
members.sort(function(a, b) {
  if(a.age == b.age) { //나이가 같으면 순서 오름차순으로 정렬  자바스크립트 기본적으로 키가 같은값이면 들어온 순서대로 정렬해준다고함 ;; 
    return a.order - b.order
  } else { //나이가 다르면 나이 오름차순으로 정렬
    return a.age - b.age
  }
})
let result = ""
for(i = 0; i < Nums; i++) {
  result += `${members[i].age} ${members[i].name}\n`
}
console.log(result)
// console.log(members)
