// map 일반 객체와 유사

const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)
map.set(0, 4)
map.set(true, 4)
console.log(map);

for(let [k, v] of map) {
  console.log(k, v);
}
// set 배열과 유사