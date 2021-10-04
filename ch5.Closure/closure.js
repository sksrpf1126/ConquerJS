// 클러저를 완벽히 이해하기 위해서는 실행 컨텍스트에 대한 이해가 필요
// 실행 컨텍스트를 이해하면 호이스팅, 스코프, 클로저에 대한 이해를 할 수 있음.
// 출처 : https://poiemaweb.com/js-execution-context   ==> 실행 컨텍스트(best) 블록 레벨 스코프의 추가로 바뀐 부분이 약간 있음
// 출처 : https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0 ==> 실행 컨텍스트 및 클로저
// 출처 : https://poiemaweb.com/js-closure ==> 클로저

// 클로저는 스코프 / 컨텍스트 / 비공개 변수(자유 변수)와 함수의 관계 에 대하여 엮여있는 특성
// 외부함수의 실행 컨텍스트가 소멸되어도, 내부함수는 lexical scoping에 의해서 외부함수의 실행환경(이라기 보다는 활성 객체가 더 맞는 말)을 기억하고 있음 -> 클로저
// 단, 외부함수의 실행환경(활성객체)또한 메모리 공간이므로, 클로저를 잘못 사용할 경우 메모리 낭비가 이루어짐
// 클로저는 반환되는 내부 함수가 자신이 선언된 시점의 환경(스코프)를 기억을 하는 것
//==============================================

// function closureFunc() {
//   //아래 2개의 변수는 비공개 변수 또는 자유 변수
//   let privateNumber = 10
//   const privateName = 'lim'

//   function testFunc() {
//     console.log(
//       privateNumber,
//       '비공개 변수(함수)이자, 실행 시에 클로저로 동작이 됨'
//     )
//   }

//   return function privateFunc() {
//     privateNumber++
//     console.log(privateNumber + '   ' + privateName)
//     testFunc() //이 함수가 실행이 될 때에 외부함수인 closureFunc의 실행 컨텍스트는 이미 종료가 되었지만, 참조가 가능해진다 -> 클로저
//   }
// }

// const closureTest = closureFunc()
// closureTest()
// closureTest()

// // 위와 아래는 각각 독립적인 실행환경을 가지므로, 비공개 변수를 공유하지 않으므로 주의할 것
// const closureTest2 = closureFunc()
// closureTest2()
// closureTest2()

//==============================================

//zerocho 사이트 코드
//==============================================

var counter = function () {
  //count와 changeCount는 자유변수(함수)로 사용이 되는 것
  var count = 0
  function changeCount(number) {
    count += number
  }
  return {
    //이 함수가 선언된 시점에 스코프는 자신의 스코프, 외부함수(counter) 스코프, 전역 스코프를 기억 중이다.
    increase: function () {
      changeCount(1)
    },
    decrease: function () {
      changeCount(-1)
    },
    show: function () {
      alert(count)
    },
  }
}
var counterClosure = counter()
//increase 함수는 선언된 시점의 환경을 기억하므로 외부함수에 선언된 자유변수에 접근이 가능해지는 것
counterClosure.increase()
counterClosure.show() // 1
counterClosure.decrease()
counterClosure.show() // 0

//==============================================
