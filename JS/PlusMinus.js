function solution(absolutes, signs) {
    let answer = 0;
    
    for (let i=0; i<absolutes.length; i++) {
        if (signs[i] === false) {
            absolutes[i] = -absolutes[i];
        }
    }
    
    absolutes.forEach(a=> {
        answer += a;
    })
    
    return answer;
}
