function solution(nums) {
    let answer = 0;
    let set = new Set(nums);
    let n = nums.length / 2;
    
    if (n >= set.size)
        answer = set.size;
    else
        answer = n;
    
    return answer;
}
