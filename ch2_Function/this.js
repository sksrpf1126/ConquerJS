// 출처 : https://www.zerocho.com/category/JavaScript/post/5b0645cc7e3e36001bf676eb  ==> this

// this에 대한 총정리
// 화살표 함수는 항상 상위 함수의 this를 따른다.

//==============================================
console.log('전역 컨텍스트의 this : ', this)
;(function funcContext() {
  console.log('함수 컨텍스트의 this : ', this)
})()

const obj = {
  objfunc: function (word) {
    console.log(word, this)
  },
}

obj.objfunc('객체 메서드의 this ') //객체를 통해 메서드를 호출을 할 경우에 this는 객체를 가르킨다.
objfuncCopy = obj.objfunc
objfuncCopy('객체 메서드를 카피한 this ') //객체의 메서드를 가져올경우 this는 window를 가르키게 된다.

function Person(name, age) {
  this.name = name
  this.age = age
  console.log('생성자 함수의 this ', this)
}

//프로트타입에 sayHi 함수 추가
Person.prototype.sayHi = function () {
  console.log('프로트타입의 this ', this)
  console.log(this.name, this.age)
}

const lim = new Person('lim', 24)
lim.sayHi() //new 키워드를 통해 만들어진 객체의 this는 인스턴스(lim 자신)이 됨
console.dir(Person)
const seo = Person('seo', 24) // window 객체에 name, age가 들어가버리게 됨
//seo.sayHi() new 키워드를 안쓰면 Person에서는 window가 찍히고, 프로트타입에는 접근이 불가하다.

const h1Title = document.querySelector('.h1_title')

// 기본적으로 함수자체는 window 객체를 가르키게 되므로, 내부함수의 경우에 window가 찍히게 되는것
h1Title.addEventListener('click', function () {
  console.log('이벤트리스너 콜백함수 this ', this) //자기 자신 즉 h1Title
  function inner() {
    console.log('이벤트리스너 콜백함수 내부함수 this ', this) //window 객체..
  }
  inner()
})

// 해결방안
// bind, call, apply를 통해서도 this를 따로 할당할 수 있음.
h1Title.addEventListener('mouseover', function () {
  console.log('이벤트리스너 콜백함수 this ', this) //자기 자신 즉 h1Title
  inner = () => {
    console.log('이벤트리스너 콜백함수 내부함수 this ', this) //화살표 함수를 통해 상위 함수의 this를 가져와서 사용
  }
  inner()
})
//==============================================
