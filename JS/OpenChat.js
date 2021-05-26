function solution(record) {
  let answer = [];

  //배열 생성
  let newArr = record.map((str) => str.split(" "));

  //uid와 nickName match
  // ***Leave인 경우 undefined 고려하기 (예외처리!)
  let nickNameSet = {};
  for (let i = 0; i < newArr.length; i++) {
    // Leave를 제외한 나머지 Enter, Change인 경우
    if (newArr[i].length === 3) {
      // obj형으로 변환해서 바꾼 uid-nickname 쌍 저장
      nickNameSet[newArr[i][1]] = newArr[i][2];
    }
  }

  // 출력
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === "Enter") {
      answer.push(nickNameSet[newArr[i][1]] + "님이 들어왔습니다.");
    } else if (newArr[i][0] === "Leave") {
      answer.push(nickNameSet[newArr[i][1]] + "님이 나갔습니다.");
    }
  }

  return answer;
}
