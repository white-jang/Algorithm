function solution(arr) {
  let result = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result += arr[i];
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  console.log(result);
  console.log(min);
}

arr = [12, 77, 38, 41, 53, 92, 85];
solution(arr);
