// const nums = prompt("세 수를 입력하세요. (띄어쓰기로 구분합니다.)")
//   .split(" ")
//   .map(Number);

function solution(a, b, c) {
  const nums = [a, b, c];
  const result = Math.min(...nums);
  // Math.min 함수는 배열에 사용할 수 없으므로 ES6의 구조 분해 할당을 이용하여 쪼갠 다음 전달
  return result;
}

console.log(solution(2, 5, 1));
