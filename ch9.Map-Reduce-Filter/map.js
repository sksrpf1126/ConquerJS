// 출처 : https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// arr.map(callback(currentValue, index, array)

const arr = [10, 30, 50, 70, 90]

arr.map((value, index, array) => {
  console.log('v : ', value, 'index : ', index, 'array : ', array)
})
// v는 현재 값, index는 현재 인덱스, array는 배열 그 자체
// v :  10 index :  0 array :  [ 10, 30, 50, 70, 90 ]
// v :  30 index :  1 array :  [ 10, 30, 50, 70, 90 ]
// v :  50 index :  2 array :  [ 10, 30, 50, 70, 90 ]
// v :  70 index :  3 array :  [ 10, 30, 50, 70, 90 ]
// v :  90 index :  4 array :  [ 10, 30, 50, 70, 90 ]

//map은 return 할 경우 새로운 배열 객체를 만들어서 반환함
const arrPlus = arr.map((v) => v + 10)
console.log('arrPlus : ', arrPlus) // arrPlus :  [ 20, 40, 60, 80, 100 ]
