function solution(arr) {
  let answer;
  // let min=Number.MAX_SAFE_INTEGER;
  answer = Math.min(...arr);

  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] < min) min = arr[i];
  // }
  // answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
