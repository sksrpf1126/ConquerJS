// 출처 : https://hhyemi.github.io/2021/06/09/arrow.html
// https://velog.io/@jinsunee/javascript-%EC%9D%BC%EB%B0%98%ED%95%A8%EC%88%98regular-function%EC%99%80-%ED%99%94%EC%82%B4%ED%91%9C%ED%95%A8%EC%88%98arrow-function%EC%9D%98-%EC%B0%A8%EC%9D%B4
// https://ko.javascript.info/constructor-new => new 연산자 추가 내용
// 화살표 함수는 ES6문법

function func() {
  this.name = '하이'
  console.log(this)
  return {
    //객체 반환
    name: '바이',
    speak: function () {
      console.log('객체 내부에 선언된 함수에서의 this', this)
      console.log(this.name)
    },
  }
}

function arrFunction() {
  this.name = '하이'
  console.log(this)
  return {
    //객체 반환
    name: '바이',
    speak: () => {
      console.log('객체 내부에 선언된 화살표 함수에서의 this', this)
      console.log(this.name)
    },
  }
}

const normalFunc1 = new func() // new 를 통해 func가 실행된 후 this에 빈 객체를 할당 후 this.name 실행 암묵적으로 return this가 있지만 여기선 따로 객체를 반환
normalFunc1.speak() //기본 함수의 this는 함수를 소유하고 있는 객체를 가르킴

const arrFunc1 = new arrFunction()
arrFunc1.speak() //화살표 함수의 this는 언제나 상위 스코프의 this를 가르킴
// 결론 -> 일반 함수는 this가 정적이며, bind, call, apply를 통해서 this를 변경(할당)이 가능하지만 화살표 함수는 정적이므로 변경이 불가능하다.

//생성자 함수로 사용할 경우
function func2() {
  this.num = 1111
}

//화살표 함수의 경우 익명함수로 선언해야 한다
const arrFunction2 = () => {
  this.num = 2222
}

const normalFunc2 = new func2()
console.log(normalFunc2.num)

// const arrFunc2 = new arrFunction2() //error -> arrFunction2 is not a constructor

//2번째 출처에 화살표 함수를 사용하면 안되는 경우 중 하나인 addEventListener에서 콜백함수로 일반함수가 아닌 화살표 함수인 경우
const h1Title = document.querySelector('.h1_title')

//일반 콜백함수인 경우 this ->> <h1 class="h1_title">함수와 화살표 함수</h1>로 찍힘
h1Title.addEventListener('click', function () {
  console.log(this)
})

//화살표 함수의 this는 상위 스코프의 this를 가르키기 때문에 상위 스코프가 없는 경우 전역객체인 window 객체를 가르킴
h1Title.addEventListener('mouseover', () => {
  console.log(this) //window object
})

//프로토타입 공부 이후 추가할 내용
