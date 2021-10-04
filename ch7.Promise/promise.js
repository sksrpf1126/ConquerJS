//출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises
// https://programmingsummaries.tistory.com/325
// https://poiemaweb.com/es6-promise
// promise 기초

//==============================================
//함수안에 return 을 통해 promise 객체를 반환
const _promise = (param) => {
  return new Promise((res, rej) => {
    //비동기 처리
    setTimeout(() => {
      if (param) {
        res('성공적으로 반환')
      } else {
        rej('실패...')
      }
    }, 1000)
  })
}

//error 컨트롤 방법 1
//기본적으로 then(첫번째 콜백함수, 두번째 콜백함수)이며, 첫번째 콜백함수는 성공시, 두번째 콜백함수는 에러발생(실패)시에 반환된다.
//하지만 이 방법은 첫번째 콜백함수에서 발생하는 에러를 잡지 못한다.
//함수호출로 사용
_promise(false).then(
  (res) => {
    console.log(res)
  },
  (rej) => {
    console.log(rej)
  }
)
//error 컨트롤 방법 2 catch 사용
//catch 메서드를 호출하면 내부적으로 then(undefined, onRejected)을 호출 , 내부적으로 then을 한번 더 호출함으로써, 첫번째 then에 대한 후속처리가
//가능해지는 것 --> 이러면 위의 문제인 첫번째 콜백함수에 발생하는 에러 또한 컨트롤이 가능함
//함수호출로 사용
_promise(true)
  .then((res) => {
    console.log(res)
    throw new Error('에러발생')
  })
  .catch((rej) => {
    //false일 때에 rej값 -> promise 객체 만들 때 반환하는 rej값
    //true 일 때에 rej값 -> 위 첫번째 then에서의 Error 객체
    console.log('error', rej)
  })
//결론 : catch구문을 사용할 것

//==============================================

//위 방법은 함수를 통해 promise 객체를 반환해서 사용하는 방법
//이 방법은 return이 아닌 바로 객체를 만들고 할당을 하여 사용
//==============================================

const _promise2 = new Promise((res, rej) => {
  //비동기 처리
  setTimeout(() => {
    console.log('==============================================')
    if (new Date() % 2 === 0) {
      res('성공적으로 반환')
    } else {
      rej('실패...')
    }
  }, 1000)
})

//함수호출이 아닌 객체로 사용
//처음에 에러가 안 날 경우 1번 3번 4번 실행
//처음에 에러가 날 경우  2번 3번 4번 실행
_promise2
  .then((res) => {
    //1
    console.log(res)
  })
  .catch((err) => {
    //2
    console.log('첫 번째 에러', err)
  })
  .then(() => {
    //3
    console.log('에러 이후에도 후속작업 가능')
    throw new Error('에러 객체 반환')
  })
  .catch(() => {
    //4
    console.log('두 번째 에러 ')
  })
//==============================================
// 이 외에 Promise.all 메소드로 여러 프로미스 객체들을 한번에 모아서 처리할 수 있습니다.
// 이 메소드는 모든 프로미스가 성공하면 then, 하나라도 실패하면 catch로 연결
console.log('동기')
