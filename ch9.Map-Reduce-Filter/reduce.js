// 출처 : https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d

// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
const oneTwoThree = [10, 15, 20, 25]

//초깃값이 존재하지 않는다면, 첫번째 인덱스의 값이 되고, 첫번째[0] 인덱스의 값을 더한것으로 간주되어, 두번째[1] 인덱스부터 더해진다.
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i)
  return acc + cur
})

console.log(result)

//reduce로 map 함수 구현하기

const oneTwoThreeReduce = oneTwoThree.reduce((acc, cur) => {
  acc.push(cur)
  return acc
}, [])

console.log('reduce로 map 구현', oneTwoThreeReduce, typeof oneTwoThreeReduce) //배열로 만들어짐

//reduce로 map과 filter 동시에 구현하기

const oneTwoThreeLast = oneTwoThree.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur)
  }
  return acc
}, [])

console.log(
  'reduce로 map과 filter 구현',
  oneTwoThreeLast,
  typeof oneTwoThreeLast
) //배열로 만들어짐
