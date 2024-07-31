const btnEl = document.querySelector("button#btn")
for(let i = 0; i < 4; i++) {
  btnEl.addEventListener("click", function() {
    console.log('anonymous handler');
  })
  btnEl.addEventListener("click", () => {
    console.log('arrow handler');
  })
}










/*
const listener1 = function() {
  console.log('anonymous refer')
}
const listener2 = () => {
  console.log('arrow refer');
}
function listener3() {
  console.log('declared refer');
}

for(let i = 0; i < 4; i++) {
  btnEl.addEventListener("click", listener1)
  btnEl.addEventListener("click", listener2)
  btnEl.addEventListener("click", listener3)
}
*/

// 참조없는 익명함수, 화살표함수

/*
*/
