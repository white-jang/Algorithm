function solution(s)
{
    let answer = 0;
    s = s.split("");
    let stack = [];
    
    // 길이가 홀수인 경우 
    if(s.length % 2 == 1)
        return answer;
    
    for (let i=0; i<s.length; i++) {
        if (stack[stack.length-1] === s[i]) {
            stack.pop();
            continue;
        }
        
        stack.push(s[i]);
        
        if(s.length - i < stack.length)
            return 0
    }

    return 1;
}
