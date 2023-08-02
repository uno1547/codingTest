function compare1(a, b) {
  if (a < b) {
    return -1
  }
  else if (a > b) {
    return 1
  }
  else return 0 
}
//arr.sort(compare1)
function compare2(a, b) { //ascending
  return a - b
} 
function compare3(a, b) { //descending
  return b - a
}
//arr.sort(compare2)
arr1.sort(function(a, b) {
  return a - b
})