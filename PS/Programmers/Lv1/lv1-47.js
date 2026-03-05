//추억점수
const names = ["may", "kein", "kain", "radi"]
console.log(names);
const yearning = [5, 10, 1, 3]
const photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
for (let i = 0; i < photo.length; i++) {
  const score = photo[i].reduce((acc, cur) => {
    acc += (names.indexOf(cur) != -1) ? yearning[names.indexOf(cur)] : 0
    return acc
  }, 0)
  photo[i] = score
}
console.log(photo);