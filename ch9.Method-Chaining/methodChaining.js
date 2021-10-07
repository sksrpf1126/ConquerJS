// 출처 : https://velog.io/@seungsang00/JavaScript-Method-Chaining
// 메서드가 객체를 반환하게 되면 메서드의 반환 값인 객체를 통해 또 다른 함수를 호출할 수 있다.
// 이러한 프로그래밍 패턴을 메서드 체이닝(Method Chaining)이라 부른다.

// 간단한 예시
// filter를 통해 짝수값만 출력하는 배열 반환 -> map으로 제곱값 구한 배열을 반환 -> foreach로 최종 배열 출력
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers
  .filter((v) => v % 2 === 0)
  .map((v) => v * v)
  .forEach((v) => {
    console.log(v)
  })

const Counter = function () {
  this.number = 0
}
Counter.prototype.plus = function (number) {
  this.number += 1
}
Counter.prototype.minus = function (number) {
  this.number -= 1
}

//체이닝은 반환된 값으로 다시 함수를 호출하여 사용하는 것이기 때문에 return 구문이 필요
Counter.prototype.chainingPlus = function (number) {
  this.number += 1
  return this
}
Counter.prototype.chainingMinus = function (number) {
  this.number -= 1
  return this
}

const objCounter = new Counter()

//코드가 길어짐.
objCounter.plus()
objCounter.plus()
objCounter.minus()
console.log('counter : ', objCounter.number)

const objCounter2 = new Counter()

objCounter2.chainingPlus().chainingPlus().chainingMinus()
console.log('counter2 : ', objCounter2.number)
