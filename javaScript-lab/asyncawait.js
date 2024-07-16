// async
// 비동기 함수를 정의하는 키워드 
/*
function getName() {
  return "name"
}
const user = getName()
console.log(user)
*/
// async 함수의 특성
/*
async function asygetName() { //async 붙여주면 프로미스를 반환하는 비동기 함수가된다!!
  return "name" //값을 반환하면 fulfilled(resolved)된 프로미스가 반환된다 와 비슷?
}
const asyuser = asygetName()
console.log(asyuser); //Promise {<fulfilled>: 'name', result : 'name'}
*/

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('데이터를 불러왔어요!!');
      // const data = '서버의 데이터'
      // resolve(data)
      resolve()
    }, 3000);
  })
}

async function makeDataReq() {
  // const data = getData()
  await getData() // 비동기작업(프로미스)가 완료될때까지 기다려주는게 await이다.
  const result = await getData() // 기다린 프로미스의 result를 사용가능
  return "데이터"
}

// const date = makeDataReq() //반환한 프로미스
// date.then((name) => console.log(name)) //프로미스.then으로 불러옴

//Fetch API

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users") //promise 반환
  const data = await response.json() // json 메서드도 프로미스를 반환한다.
  console.log(data);
}
fetchData()