function solution(skill, skill_trees) {
    let answer = 0;
    
    for (let tree of skill_trees) {
        let isValid = true;
        const filterdTree = tree.split("").filter(v => skill.includes(v)).join("");        

        for (let i = 0; i < filterdTree.length; i++) {
            if (filterdTree[i] !== skill[i]) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            answer++;
        }
    }
    
    return answer;
}
