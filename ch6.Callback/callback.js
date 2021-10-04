// 함수 표현식으로 일단 만들어 본 callback 예제
// 일반적으로 콜백함수란 다른 함수에 매개변수로 넘겨준 함수를 의미한다
// Hello의 funcName이 콜백함수가 되는 것
const Hello = function (funcName) {
  console.log(funcName + '님, 안녕하세요')
}

const namePrint = function (name) {
  console.log(name)
  return name
}

Hello(namePrint('lim'))

// 아래의 내용을 위해서 이벤트루프 선행학습 필수
// callback은 call + back의 용어로 전화를 다시 준다는 의미로써도 사용이 된다.
// 그래서 일반적으로 비동기 함수와 콜백함수의 조합을 통해, 동기와는 달리 언제 실행이 되고 반환이 될지 모르는(정확히는 call stack이 비었을 때 실행) 비동기 함수의 끝을 알기위해
// 또는 끝난 뒤에 어떠한 코드가 작동되기 위해 콜백함수를 인자로 전달함으로써 사용이 된다.
// 아래는 대표적인 비동기함수중 하나인 이벤트리스너이다.
const h1Title = document.querySelector('.h1_title')

// 2번째 인자인 함수가 콜백함수가 되는 것이다.
h1Title.addEventListener('click', function () {
  console.log('이벤트리스너 콜백함수')
})

/*
  setTimeout(콜백함수, 타이머, 3번째 인자부터는 첫번째 인자인 콜백함수의 인자의 값으로 들어감)
  출처 : https://velog.io/@yujo/JS%EC%BD%9C%EB%B0%B1-%EC%A7%80%EC%98%A5%EA%B3%BC-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%A0%9C%EC%96%B4
  아래는 또다른 대표적인 비동기 함수인 setTimeout 함수를 통해 콜백지옥을 구현한 것이다.
  1초 뒤에 에스프레소 적고, 또 1초 뒤에 아메리카노 적고, 또 1초 뒤에 모카를 적고 ...
  특정 비동기 함수가 끝난 뒤에 무엇의 행위를 해라(비동기 함수가 끝남을 알려라)라는 식이 중첩이 된다면 그것은 곧 콜백지옥이라는
  아래처럼 매우 가독성이 떨어지는 코드가 될 것이다.
  이러한 문제를 해결하기 위해 대표적으로 나온 문법이 promise와 async await 문법(ch7)
*/

// 10만번의 반복문을 돌리면 어느정도 시간이 걸린다. 3초의 시간이 걸린다고 했을 경우에 0.5초 뒤에 실행하기로 한 비동기 타이머 함수의 경우에는 언제
// 실행이 되는가? 그것은 동기작업이 다 끝난 뒤에 0.5초 뒤에 실행하도록 하기 때문에 3초의 딜레이에 의한 3.5초 뒤 실행이 될 것이다.
// 그래서 비동기가 언제 실행이 될지 예측하기가 힘들다는 것

// for (let i = 0; i <= 100000; i++) {
//   console.log(i)
// }

setTimeout(
  (name) => {
    let coffeeList = name
    console.log(coffeeList) //첫번째 출력

    setTimeout(
      (name) => {
        coffeeList += ', ' + name
        console.log(coffeeList) //두번째 출력

        setTimeout(
          (name) => {
            coffeeList += ', ' + name
            console.log(coffeeList) //세번째 출력

            setTimeout(
              (name) => {
                coffeeList += ', ' + name
                console.log(coffeeList) //네번째 출력
              },
              500,
              'Latte'
            )
          },
          500,
          'Mocha'
        )
      },
      500,
      'Americano'
    )
  },
  500,
  'Espresso'
)
