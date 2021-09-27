//참고한 사이트 : https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
// 이벤트 캡쳐는 이벤트 버블링과 반대되는 개념으로, 상위(부모) 에서 하위(자식)의로 내려가는 방식이다.

const divs = document.querySelectorAll('div')

const logEvent = (e) => {
  console.log(e.currentTarget.className)
}

//
// divs.forEach((div) => {
//   div.addEventListener('click', logEvent, {
//     capture: true, //default 값은 false
//   })
// })

const divThree = document.querySelector('.three')
const divTwo = document.querySelector('.two')

divThree.addEventListener('mouseover', logEvent, { capture: true })
divTwo.addEventListener('mouseover', logEvent, { capture: true })
