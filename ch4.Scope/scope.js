// 출처 : https://poiemaweb.com/es6-block-scope
// https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e

//ES5 var 은 함수 레벨 스코프, ES6이후에 등장한 let, const 는 블록 레벨 스코프
//es5 문법을 써야하는 경우가 아니라면 var 사용은 지양할 것
//var 은 아래와 같이 중복 선언!!!이 가능하기 때문에 자신이 실수로 똑같은 변수로 할당할 경우, 또는 협업을 하는 과정 중에 다른 팀원이 같은 이름으로
//변수를 사용할 경우에 잘못된 값이 할당이 될 수 있다. 아래처럼

// 1번째 코드
//==============================================

// var foo = 111 //전역변수

// console.log(foo) //111

// {
//   // block level scope
//   var foo = 222 // 중복 선언이며, function level scope 이므로 block level scope에 선언하여도 전역 변수로 할당
// }
// console.log(foo) //222

//==============================================

// block level scope인 let 키워드인 경우
// 2번째 코드
//==============================================

// let foo = 111 //전역 변수

// {
//   //block level scope
//   let foo = 222 //지역 변수
//   let boo = 333 //지역 변수
// }

// console.log(foo) //111  --> 전역 변수 foo
// console.log(boo) //boo is not defined

//==============================================

// scope chain --> 찾고자 하는 변수가 있을 경우 해당 스코프에서 찾고, 존재하지 않을 시 상위 스코프로 가서 찾는 것
// 3번째 코드
// outer에 name이 존재하지 않으므로 상위 스코프로 가서 찾음. inner 또한 동일
//==============================================

// let name = 'lim'

// function outer() {
//   console.log(name)
//   function inner() {
//     var animal = 'tiger'
//     console.log(name)
//   }
//   inner()
// }

// outer()
// console.log(animal) //animal is not defined --> 현재 스코프가 최상위 스코프이며, 최상위 스코프에 animal이 존재하지 않으므로 찾을 수 없음.

//==============================================

//렉시컬 스코핑(lexical scoping) ==> 스코프는 함수를 호출할 때가 아니라 선언할 때 생긴다
// 4번째 코드
//==============================================

let name = 'lim'

//함수가 선언되는 순간 nmae을 스코프를 통해 찾는다. log함수가 선언되는 순간 log 내의 name은 최상위 스코프 name을 참조하게 된다.
function log() {
  console.log(name) //lim
}

function wrapper() {
  let name = 'hong'
  log()
}

wrapper()

//==============================================
