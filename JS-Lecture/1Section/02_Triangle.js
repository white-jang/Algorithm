// 삼각형의 기준. (짧은 막대+짧은 막대)가 가장 긴 막대보다 작거나 같으면 안 된다.

function solution(a, b, c) {
  let answer = "YES";
  let max = 0; // 가장 긴 막대
  let sum = a + b + c; // 짧은 막대+짧은 막대 계산용

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  sum = sum - max; // 가장 긴 막대로 정해진 값 빼기

  if (sum < max) answer = "NO";

  return answer;
}

console.log(solution(6, 7, 11));
