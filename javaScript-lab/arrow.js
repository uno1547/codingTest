/*
const object = {
  name : '윤오',
  main : function() {
    const innerFunction = function() { //일반함수 내부의 this는 호출한객체를 가리킨다. > innerFunction() 한 객체는 window기에 this가 window임
      // console.log(this);
    }
    innerFunction()
  },
  main2 : function() {
    console.log(this); // this의 바깥 scope를 찾기위해 this를 작성한곳은 일반함수안 > 얘는 호출객체에 따라 달라질듯
    const innerFunction = () => { // 화살표함수 내부의 this는 선언위치를 감싸는 scope의 this를 가져옴 선언 위치가 중요하다 
      console.log(this);
    }
    innerFunction()
  }
}
const object2 = {
  name : '주휘',
  method : object.main2
}
object.main() // main함수 실행시, innerFunction 내부의 this window!!
object.main2() // 첫번째 this는 당연히 object가리키고, innerFunction 안의 this는 바깥
// 스코프의 this 얘는 익명함수 에서 정의된 this > 호출객체에 따라 달라짐
object2.method() // object2, 
*/

const object = {
  name : '윤오',
  main : function() {
    const innerFunction = function() {
      console.log(this); // 일반함수내의 this > 호출될때 결정
    }
    innerFunction() // 여기서 innerFunction 을 호출한 객체는 window임
  },
  main2 : function() {
    const innerFunction = () => {
      console.log(this); //화살표함수의 this는 함수를 감싸는 scope의 this
    }
    //this 여기에 this가 있다고 치면 일반함수 내부의 this > 호출시점에 결정
    innerFunction()
  }
}
object.main2() //
