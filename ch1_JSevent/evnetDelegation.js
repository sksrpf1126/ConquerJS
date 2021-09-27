//참고한 사이트 : https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/

// 요소들을 새로이 추가할 때 일일이 이벤트를 추가하지 않기 위해 이벤트 버블링을 이용
// 제일 상위 부모인 itmeList에 click이벤트를 추가하고, checkbox만 이벤트 동작되게 event객체를 이용
// label의 for 속성은 id로 연결된 태그와 그룹이 맺어지는데 이때, 형제관계로 맺어지는 것이 아닌, label이 자식으로 맺어져서
// 이벤트 버블링이 발생이 된다.

const itemList = document.querySelector('.itemList')

//for 속성 제거 후 INPUT만 동작되게 하는 방법.
itemList.addEventListener('click', function (e) {
  console.log(e) //아래 방법과 동일하게 for 속성 제거하여도, label, itemList 를 눌러도 if문 이전까진 동작
  if (e.target.nodeName === 'INPUT') {
    alert('clicked')
  }
})

// 출처 : https://powerku.tistory.com/116
// closest(position, text)
// 현재 엘리멘트에서 가장 가까운 조상을 반환합니다.
// 만약 조상이 없다면 null값을 반환 합니다. 자기 자신 또한 포함됨.
// itemList.addEventListener('click', function (e) {
//   const input = e.target.closest('input') // 자기 자신을 포함해서 가장 가까운 input태그를 찾음
//   console.log(input) //여기까진 label 클릭시에도 동작
//   // null이 아니라면
//   if (!input) {
//     alert('clicked')
//   }
// })
