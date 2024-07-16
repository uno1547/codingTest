// 동기
/*
이전작업이 완료되어야 다음작업을 수행(싱글스레드이기 때문이다.)
순차적으로 진행 > 단점으로 특정작업이 오래걸릴경우 전체 실행시간에 영향을 줄수있다.
*/

// 비동기
/*
작업의 완료를 기다리지않고, 다른작업을 동시에 수행할수있는 특성을 이야기함(ex) DOM, setTimeout, ajax, fetch) 같은 작업들이 비동기처리에 해당된다.
이들은 메인 스레드가 다른곳에 인가해서처리후 콜백함수를 받아 실행하는 방식 > 백그라운드에 요청해서 처리하게되 멀티로 작업을 동시에 처리하는것과 동일
보통 다른곳이라는건 WEB APIS 를 칭한다.

자바스크립트의 콜스택은 싱글스레드이지만, WEB APIS 들은(크롬에서) 멀티스레드이기에 동시작업처리가 가능한것이다.
WEB API (타이머, 네트워크요청, 이벤트 처리) 등의 브라우저 제공 API를 총칭

// 콜백 : 함수를 인자로 넘겨주어, 파라미터로 받은후 특정시점에 호출할수있게 하는것
전체 시간을 줄이기위해 등장한 비동기 처리, 하지만 단점이있다. 콜스택 > webapi > callback Queue > call Stack 을 거치면서
비동기적으로 동작함에따라 기존 동기적인 처리들과 비동기적인 처리들사이에 순서가 필요한경우
비동기 처리는 순서에 구속받지않고 처리되기때문에 또 문제가 발생한다.

이를 해결하기 위해(비동기로 인한 순서파괴, 순차적 실행이 필요할경우) 등장한 방법이 콜백함수를 활용하는것이다. 인자로써 함수를 넘겨주어, 특정 작업(비동기) 이후에 실행됨을 보장한다
하지만 비동기 처리를 위한 콜백함수를 연속으로 사용할경우 콜백 지옥 발생 
*/
/*
기존의 코드 : 순차적으로 실행됨을 기대하고 작성했지만, setTimeout은 별도 api를 통해 비동기 처리되기에, 의도치않은 결과를 발생시킨다.
function getDB() {
  let data
  setTimeout(() => {
    data = 100;
  }, 3000);

  return data
}
const value = getDB()
console.log(value);
*/

/*
수정된 코드 : 콜백함수를 이용하여, 비동기처리가포함된경우, 실행순서를 보장해준다.
function getDB(callBack) {
  let data
  setTimeout(() => {
    data = 100;
    callBack(data)
  }, 3000);
}

// const value = getDB((data) => console.log(data))
const value = getDB(function(data) {
  console.log(data)
})
// console.log(value);
*/

// 결론적으로콜백함수는 비동기를 순서보장을 위해 사용하는 편법이지, 근본적인 해결책이 되지못한다.
// 이에 비동기처리를 위한 객체 promise 가 탄생했다.

// promise : 비동기 작업의 완료 혹은 실패를 나타내는 객체

// promise는 세가지상태(pending, fulfilled, reject)를 가진다.

// Pending
/*
new Promise() // Pending
new Promise((resolve, reject) => {

})
참고로 executor함수는 promise 객체가 생성될때 즉시 실행된다.
*/

// Fulfilled
/*
new Promise((resolve, reject) => {
  resolve() 
}) // promise의 인자로 들어가는 콜백에서 resolve가 호출되면 이 프로미스는 Fulfilled상태

//Fulfilled 상태의 프로미스에 .then()을 이용해 처리값을 받을수있다.
const fulFilledPromise = new Promise((resolve, reject) => {
  resolve()
}).then((resolvedData) => console.log(resolvedData))
*/

// Rejected
/*
new Promise((resolve, reject) => {
  reject() 
}) // promise의 인자로 들어가는 콜백에서 reject가 호출되면 이 프로미스는 Rejected상태
*/
/*
const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error!'))
  }, 3000);
// }).then((err) => console.log(err)) // 둘이뭐가 다른거지 아래랑 then으로 받을수도있다는 말인가 ㄴㄴ then이면 reject때 에러 처리 못함
}).catch((err) => console.log(err)) 
*/


const newPr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('5초가 지났다')
    const result = 'failure'
    if(result == 'success') {
      resolve(result)
    } else {
      reject(new Error("이건 실패"))
    }
  }, 5000)
// }).then((resolvedData) => console.log(resolvedData)) // then으로 에러를 받을수있다. 
})
.then((data) => console.log(data))
.catch((err) => console.log(err)) // 위에 문장이랑 차이가 뭐임 그냥 이렇게 써있으니깐 이거쓰자
// console.log(newPr); //처음에는 pending상태 5초후에는 resolve함수가 실행 > fulfilled상태로 바뀜


/*
const newPr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hi')
  }, 3000);
// }).then((data) => console.log(data))
}).then().then((data) => console.log(data)) // 바로 받는거랑 차이없음
*/






