/* 일반적인 프로미스 선언*/
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('데이터 불러오기 완료!!');
    const data = 'data'
    resolve(data)
  }, 1000);
}).then((resolvedData) => console.log(resolvedData))
*/


/*프로미스를 반환하는 함수*/
/*
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('데이터 불러오기 완료')
      const data = 'data'
      resolve(data)
    }, 3000);
  })
}
const promise = getData()
promise.then((data) => console.log(data))
console.log('데이터를 받은 이후 처리'); // 어찌됐던 바깥쪽 동기 코드들과의 순서도 맞춰줘야함
*/

// .then() 은 항상 새로운 프로미스를 반환한다
// promise.then(() => promise) 가 아니라
// promise.then(() => value) 라면, value는 프로미스로 감싸져서 state : resolved된상태로 반환 즉시실행


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = 'data'
    resolve(data)
    console.log(promise); // {state:"fulfilled", result : "undefined"}
  }, 3000);
})
console.log(promise); // {state:"pending", result : "undefined"}
promise.then((data) => {
  //******** then 안에서 일반 값을 return 하게 되면, promise로 감싸진뒤 resolve된 fulfilled상태인 promise로 반환된다고함 Q .then()은??
  //*********/ catch 역시 마찬가지로 값을 return 하면 resolved 프로미스를 반환 > 따라서 예외처리를 한 catch로 Resolved반환하면서 그이후에 then()으로 체이닝을 가능하게한다.
  return // 이게 promise에 감싸져 {state : "fulfilled", result : "undefined"}로 넘어가는듯 그래서 아래 then에서 받을수있는거고?
  return data // 이게 promise에 쌓여서 {state : "fulfilled", result : "data"}로 넘어가는듯 그래서 아래 then에서 받을수있는거고?
}).then((data) => console.log(data))


/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('비동기1 작업 끝')
  }, 3000);
})
console.log('동기1작업');
promise.then((res) => console.log(res)) // promise가 이행되고나면 자동으로 then 메서드가 호출된다.
console.log('동기1작업');
*/

/*
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('비동기2 작업 끝')
    }, 3000);
  })
  let result = await promise // async 함수 내에서 프로미스가 이행될때까지 기다림
  console.log(result);
}
console.log('동기2작업');
f()
console.log('동기2작업');
*/

/////////////////////////////////////// modern js info 문제 1
/*
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}
loadJson('no-such-user.json')
  .catch(alert);
*/

/*
async function loadJson(url) {
  const response = await fetch(url) // fetch가 이행되길 기다림 
  // fetch는 프로미스를 반환한다. fetch().then((res) => console.log(res))  fetch가 완료되면 결과를 출력하는코드
  if(response.status == 200) {
    return response.json()
  }
  throw new Error(response.status)
}
const result = await loadJson("https://jsonplaceholder.typicode.com/posts/1") // 이것도 결국 response.json()으로 프로미스를 반환받는것임
console.log(result);
// loadJson('11no-such-user.json')

*/


/////////////////////////////////////// modern js info 문제 1
/*
function getResponse() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
    }, 3000);
  })
  return promise
}
const a = getResponse() //함수를 호출하는 즉시 내부에서 프로미스 생성, pending 인 프로미스 반환
console.log('다른 동기 작업');
a.then((res) => console.log(res))
*/


///////////////////////////////////////// modern js info 문제2
async function wait() {
  await new Promise(resolve => setTimeout(() => {
    resolve('비동기 작업 끝!!')
  }, 3000))

  return 10 // 프로미스로 감싸져서 반환
}

function f() {
  const promise = wait() // promise에는 promise{status:Fulfilled, result : 10}인 프로미스가 할당됨
  promise.then((res) => console.log(res))
}

f()