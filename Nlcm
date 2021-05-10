function solution(arr) {
    let answer = 0;
    
    const gcd = (a, b) => b ? gcd(b, a%b) : a;
    const lcm = (a, b) =>  a * b / gcd(a, b);
    
    while (arr.length > 1) {
        let temp = lcm(arr[0], arr[1]);
        arr.shift();
        arr.shift();
        arr.unshift(temp);
    }
  
    answer = arr[0];
    
    return answer;
}
