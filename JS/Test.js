function solution(answers) {
  let answer = [];
  let list = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let point = [0, 0, 0];

  // 정답 맞힌 수 찾기
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === list[0][i % 5]) point[0]++;
    if (answers[i] === list[1][i % 8]) point[1]++;
    if (answers[i] === list[2][i % 10]) point[2]++;
  }

  // 가장 높은 점수를 가진 사람 찾기
  let max = Math.max.apply(null, point);

  // 가장 높은 점수를 받은 사람이 여럿일 경우
  for (let k = 0; k < point.length; k++) {
    if (max === point[k]) answer.push(k + 1);
  }

  // 오름차순 정렬
  answer.sort((a, b) => a - b);

  return answer;
}
