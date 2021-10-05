// 출처 : https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Async_await
// https://ko.javascript.info/async-await
//async await은 가장 최근의 나온 비동기 처리 문법으로 기존의 callback 이나 Promise 의 단점을 해소하고자 만들어졌다.
async function Hello() {
  return 'hello'
}

//동기적으로 실행
console.log(Hello()) //async 키워드가 있다면, return 값은 promise 객체로 감싸져서 반환이 됨.

//비동기적으로 실행 맨 밑 동기 log가 찍힌 후 실행
Hello().then((res) => {
  //promise 객체와 사용법 동일
  console.log(res)
})

//await 키워드에 대하여
async function a() {
  return 1
}
//await는 resolve로 리턴해주는 값을 꺼낸다
async function main() {
  let promise = a() // Promise {<resolved>: 1}
  let value = await a() // 1
  console.log('await x', promise, 'await o', value)
}
main()
//await 키워드를 만나면 프라미스가 처리될 때까지 기다림
//즉, 함수실행 자체는 비동기지만, 정의한 함수 내부에서는 동기적으로 실행됨
const githubInfo = async () => {
  let githubResponse = await fetch(`https://api.github.com/users/sksrpf1126`)
  let githubUser = await githubResponse.json()
  console.log(githubResponse)
  console.log(githubUser)
}

//비동기적으로 실행 맨 밑 동기 log가 찍힌 후 실행
githubInfo()

//async await 에러 처리
//아래 await에서 오류가 날 경우 throw new Error();로 에러를 던져줌
//그래서 promise의 .catch 방식 외에 아래처럼 try catch문으로 에러 처리가 가능함
async function f() {
  try {
    let response = await fetch('http://유효하지-않은-주소')
  } catch (err) {
    alert(err) // TypeError: failed to fetch
  }
}

f()

//.catch 에러 처리
async function f2() {
  let response = await fetch('http://유효하지-않은-url')
}

// f()는 거부 상태의 프라미스가 됩니다.
f2().catch(alert) // TypeError: failed to fetch // (*)

console.log('동기')
