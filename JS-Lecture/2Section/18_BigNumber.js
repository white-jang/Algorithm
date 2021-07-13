function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  for (let n of arr) {
    if (n > answer[0]) {
      answer.push(n);
    }
  }

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
