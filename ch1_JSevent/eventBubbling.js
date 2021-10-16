//참고한 사이트 : https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
// https://velog.io/@eunjin/JavaScript-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%BA%A1%EC%B3%90%EB%A7%81-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81-%EA%B0%9C%EB%85%90-%EB%B0%A9%EC%A7%80%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
// 이벤트 버블링은 하위(자식)에서 상위(부모)에게로 같은 이벤트일 경우에 전달되는 경우를 말한다.
// 상위 부모에게 클릭이벤트를 주면, 아래 자식들에게도 이벤트가 생기고, 자식들의 이벤트가 동작될 때 부모 이벤트가 동작되게 된다.

const divs = document.querySelectorAll('div')

const logEvent = (e) => {
  console.log(e.currentTarget.className)
  //e.stopPropagation() //원하는 화면요소 이벤트만 신경쓰고 싶을 때 (버블링 X 캡쳐링 X)
}

const logEvent2 = (e) => {
  console.log(e.currentTarget.className)
}

const divOne = document.querySelector('.one')
divOne.addEventListener('click', logEvent)

// one, two, three 3개의 div 모두 같은 이벤트를 할당 받았을 경우
// three의 같은 형제 four 추가 -> 같은 형제끼리는 이벤트 버블링 X 부모 자식 간에만 동작
// divs.forEach((div) => {
//   div.addEventListener('click', logEvent)
// })

// 이벤트 동작 이후 콜백함수 반환은 이벤트 버블링에 영향이 없다. 그대로 버블링 동작
// 단, 같은 이벤트(click, mouseover 등)일 경우에만 이벤트 버블링이 이루어짐
const divThree = document.querySelector('.three')
const divTwo = document.querySelector('.two')

//divThree.addEventListener('mouseover', logEvent)
divTwo.addEventListener('mouseover', logEvent2)
