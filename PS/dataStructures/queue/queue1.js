//1158번 요세푸스 문제 모르겟음
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number)
let [n, k] = input
class Node {
  constructor(x) {
    this.data = x
    this.link = ++x
  }
  
}
