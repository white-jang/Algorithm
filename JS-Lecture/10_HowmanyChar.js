function solution(s, t) {
  let answer = 0;
  for (let str of s) {
    if (str === t) answer++;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
