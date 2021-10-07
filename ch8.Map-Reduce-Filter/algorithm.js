//출처 : https://programmers.co.kr/learn/courses/30/lessons/83201 --> 프로그래머스
// reduce, map filter를 활용하여 푼 프로그래머스 1단계

function solution(scores) {
  let answer = ''
  for (let i = 0; i < scores.length; i++) {
    const deleteScores = myScoreDeleteYn(getColumns(scores, i), i)
    const SUM = deleteScores.reduce((acc, cur) => acc + cur) //한 학생의 모든 점수를 더해서 반환
    answer += rating(SUM / deleteScores.length)
  }
  return answer
}

/**
 *
 * @param arr -> 2차원 배열
 * @param  indices -> 열 인덱스
 * @returns
 */
const getColumns = (arr, indices) => arr.map((row) => row[indices]) //2차원 배열에서 행이 아닌 열에 대해 한 줄 씩 반환

/**
 *
 * @param arr -> 하나의 열
 * @param i -> 인덱스
 * @returns
 */
const myScoreDeleteYn = (arr, i) => {
  const MAX = Math.max(...arr)
  const MIN = Math.min(...arr)

  //자기자신을 평가한 값이 최대값이나 최솟값이 아니라면
  if (arr[i] !== MAX && arr[i] !== MIN) {
    return arr // 바로 반환
  } else {
    // 최댓값이나 최솟값이라면
    const deleteArr = arr.filter((v) => arr[i] !== v) // 최댓값이나 최솟값 이외에 나머지 값으로 배열 객체 생성 및 반환
    if (deleteArr.length < arr.length - 1) {
      //자기자신이 평가한 값과 같은 값이 또 존재할 경우 그대로 반환
      return arr
    } else {
      //최댓값과 최솟값이 단 하나인 경우
      return deleteArr
    }
  }
}

// 평균값을 받아 학점을 매기는 함수
const rating = (avg) => {
  if (avg >= 90) {
    return 'A'
  } else if (avg >= 80) {
    return 'B'
  } else if (avg >= 70) {
    return 'C'
  } else if (avg >= 50) {
    return 'D'
  } else {
    return 'F'
  }
}

//test data
const newdata = [
  [100, 90, 98, 88, 65],
  [50, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
]

console.log(solution(newdata))
