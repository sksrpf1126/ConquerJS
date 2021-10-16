// 출처 : https://www.zerocho.com/category/JavaScript/post/573c2acf91575c17008ad2fc
// https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67 ==> 정말 도움된 사이트

/**
 * javaScript는 프로토타입 기반의 객체지향 언어이다.
 * 하지만 JS에서의 class 는 Java의 Class와는 개념이 다르다.
 * ES6에서 Class 문법이 등장하였지만, 그렇다고 JS가 Class 기반 객체지향 언어가 되는 것이 아니다. 왜냐하면 결국 Class 문법은 프로토타입을 이용하여
 * Java와 같은 다른 Class 기반 언어를 흉내낼 뿐이다.
 * 결국 JS를 객체지향 관점에서 완벽히 이해하기 위해서는 프로토타입을 알아야 한다는 것.
 * 위 사이트들에서 protoType(object, Link) constructor proto 의 관계에 대해 그림으로 좋게 설명이 되어있다.
 */

/* 1번째 코드 */
//class 문법이 아닌 프로토타입을 이용하여 class를 구현(흉내)하는 방법
//생성자 함수의 경우 첫글자는 대문자로 하는것이 규칙
//==============================================

// function Person(name, gender) {
//   this.name = name
//   this.gender = gender
//   this.Hello = function () {
//     console.log(this.name + '님 안녕하세요')
//   }
// }

// const lim = new Person('임성현', '남') //생성자 함수와 new 키워드를 통해 객체 생성
// lim.Hello()

// const hong = new Person('홍길동', '남')
// hong.Hello()

/* 이와 같은 방법으로 객체를 몇천, 몇만개를 만들게 된다면 중복되는 속성들 또한 불필요하게 만들어지는 것이며, 즉 불필요한 메모리 낭비가 발생 */
//==============================================

/* 2번째 코드 */
//생성자 함수에 protoType을 활용하여 중복되는 부분을 모든 객체가 공유해서 사용할 수 있도록 만들 수 있다 -> Java의 static 속성
//==============================================

// function Person(name, gender) {
//   this.name = name
//   this.gender = gender
// }

// //prototype 속성은 생성자 함수로 만들어진 모든 객체가 공유할 원형이다.
// Person.prototype.Hello = function () {
//   console.log(this.name, '님 안녕하세요')
// }

// const lim = new Person('임성현', '남')
// lim.Hello()

// const hong = new Person('홍길동', '남')
// hong.Hello()

//==============================================

/* 3번째 코드 */
//==============================================
function Person(name, gender) {
  this.name = name
  this.gender = gender
}

Person.prototype.Hello = function () {
  console.log(this.name, '님 안녕하세요')
}

const lim = new Person('임성현', '남')
console.log(lim)
//__proto__는 [[Prototype]]링크이다 테스트
console.log(lim.prototype) // undefined lim은 객체이므로 prototype이 아닌  [[prototype]] 즉 __proto__로 접근해야 한다.
console.log('객체 __proto__', lim.__proto__)

//결국 생성자 함수의 프로토타입의 생성자는 자기 자신을 가르키게 되는 것이므로 ture
console.log(Person.prototype.constructor === Person)

//__proto__는 객체를 만들 때 사용한 생성자 함수의 prototype을 가르키므로 이것 또한 true
console.log(Person.prototype === lim.__proto__)

//위 두개가 참이므로 결국은 lim.__proto__.constructor === Person.prototype.constructor 와 동일하다는 뜻이며, 아래 코드 또한 ture가 된다.
console.log(lim.__proto__.constructor === Person)
//==============================================
/**
 * 클래스 하면 떠오르는 것이 상속이다. 위의 복잡한 관계를 이용하여 프로트타입 체인이라는 기법을 통해서 상속을 구현(흉내)할 수 있다.
 * 이미 string, Array, function 등 모든 js 객체는 프로토타입 체인을 통해 이루어져 있으며, 모든 객체는 결국 Object의 자식이 되는 것이다.
 */

//위 생성자 함수를 class 문법으로 변환
// 여기서 hello() 는 PersonClass.prototype에 저장된다.
class PersonClass {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
  hello() {
    console.log(this.name, '님 안녕하세요')
  }
}

const kim = new PersonClass('kim', '남')
kim.hello() //kim 님 안녕하세요
