/* 당연히 JS로도 CSS 디자인을 조작할 수 있지만, 직접 color = "red" 이렇게 값을 주는 것보다는 아래처럼 css에 clicked와 같은 따로 지정한
 * 클래스 이름을 아래처럼 className으로 주어서, css를 직접 조작하는 방법을 피하는 것이 더 낫다.
 */

const h1 = document.querySelector('div.hello:first-child h1') //css선택자로 선택가능

// className을 통한 방법
// 하지만 이전의 class를 상관하지 않고 모든걸 교체해 버리기 때문에 문제가 발생할 수 있음.
function handleClick() {
  const clickedClass = 'clicked sexy-font' //유지보수에 더 좋아지며 여러 클래스 이름 또한 줄 수 있음.
  if (h1.className === clickedClass) {
    h1.className = ''
  } else {
    h1.className = clickedClass
  }
}

// classList을 통한 방법 (class들을 목록으로 작업할 수 있게끔 해줌)
function handleClick2() {
  const clickedClass = 'clicked' //유지보수에 더 좋아지며 여러 클래스 이름 또한 줄 수 있음.

  //h1의 classList가 clicked를 포함하고 있는지 확인하는 문법
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass) //clicked 클래스 제거 문법
  } else {
    h1.classList.add(clickedClass)
  }
}

// toggle을 이용한 방법
// 위 방법보다 편한 방법으로, toggle은 토큰이 존재하면 그 토큰을 제거하고, 토큰이 없다면 토큰을 추가하는 on/off와 같은 느낌으로 사용이 가능하다.
function handleClick3() {
  //const clickedClass = 'clicked'

  h1.classList.toggle('clicked') //단 한번만 사용하기 떄문에 굳이 위 변수를 선언을 안해도 됨. 단 한줄로 위 방법들을 구현....
}

h1.addEventListener('click', handleClick3)
