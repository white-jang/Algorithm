function solution(s) {
  let answer = 0;
  let mid = Math.floor((s.length - 1) / 2);
  if (s.length % 2 != 0) {
    answer = s[mid];
  } else {
    answer = s[mid] + s[mid + 1];
  }
  return answer;
}
console.log(solution("good"));
