function solution(arr) {
  // let answer = 0;
  // let sortedArr = arr.sort((a, b) => a - b).splice(0, 7);
  // let result = [];
  // for (let n of sortedArr) {
  //   if (answer < 100) {
  //     answer += n;
  //     result.push(n);
  //   }
  // }
  // return result;

  let answer = arr; // 얕은 복사
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
