function solution(s) {
  let answer = "";
  for (let c of s) {
    if (c === c.toUpperCase()) answer += c.toLowerCase();
    else answer += c.toUpperCase();
  }
  return answer;
}

console.log(solution("StuDY"));
