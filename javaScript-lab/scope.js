// javascript의 두가지 scope : global, local(= function level)
// 어느스코프에서 선언되었냐에 따라 해당 유효범위를 가지게 된다. global 에선언 > 전역변수 / function에서선언 > 지역변수
// 다른말로 자바스크립트에서 기본적으로 localscope를 가지려면 function내부여야한다는 말이다. 블록에서 선언하는 행위는 scope를 생성하지못한다.(let, const는 예외)
/*
function func() {
  console.log(x); // undefined hoisting되어 선언은 된상태, undefined
  if(true) {
    var x = 1 // if 내에서 선언했지만 if블럭 외부에서 접근이가능하다(다른말로 block에대해서 scope를 생성할수없다)
  }
  console.log(x); // 할당이이루어진 이후라서 1이찍힘
}
func()
*/

// 위의 예에서 알수있는것은 javaScript에서는 기본적으로 blockscope를 생성할수없다.
// 아래 코드를 보자

/*
var x = 0; // 전역변수
{
  var x = 1; //얘는 지역변수아님 !! function내부의 선언에 대해서만 scope를 가지므로 얘는 전역 변수임
  console.log(x); // 1
}
console.log(x);   // 1
*/

/*
let y = 0;
{
  let y = 1; // let을 사용하면 지역scope생성, 얘는 지역변수 block scope
  console.log(y); // 1
}
console.log(y);   // 0
*/


/*
var global = 'global';

function foo() {
  var local = 'local';
  console.log(global); //global
  console.log(local); //local
}
foo();

console.log(global); //global
console.log(local); // Uncaught ReferenceError: local is not defined
*/

// 자바스크립트 특성상, 전역변수를 생성하기 쉽다


/*
var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);

  function bar() {  // 내부함수
    console.log(x); // local
  }

  bar();
}
foo(); // local
console.log(x); // global
*/

/*
var x = 10;

function foo(){
  var x = 100;
  console.log(x); //100

  function bar(){   // 내부함수
    x = 1000;
    console.log(x); // ? 1000
  }

  bar();
}
foo();
console.log(x); // ? 10
*/


var x = 1;

function foo() {
  var x = 10;
  bar(); 
}

function bar() {
  console.log(x); // 1s
}

foo(); // ? // 1
bar(); // ? // 1

// 위 예제가 의미하는바 : 자바스크립트는 렉시컬스코프(정적스코프)를 따른다. 렉시컬스코프란 선언위치에따라 스코프 및 상위스코프가 결정되는것이다.
// 따라서 bar이 선언된곳은 전역이므로, bar의상위스코프는 전역으로 고정된다.

