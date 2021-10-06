// 출처 : https://aljjabaegi.tistory.com/312
//map과 reduce처럼 배열에 사용하는 함수로써, 조건에 맞는 값만 배열 객체로 반환하는 함수

const testArray = [1, 2, 3, 4, 5]
const newArray = testArray.filter(function (element) {
  return element <= 3
})
console.log(newArray)

//대표적으로 json 데이터 중에 원하는 데이터만을 추출할 수 있음!
const testJson = [
  { name: '이건', salary: 50000000 },
  { name: '홍길동', salary: 1000000 },
  { name: '임신구', salary: 3000000 },
  { name: '이승룡', salary: 2000000 },
]

const newJson = testJson.filter(function (element) {
  console.log(element)
  return element.name == '이건'
})
console.log('newObj')
console.log(newJson)
