// 카펫

function solution(brown, yellow) {
    const divs = []
    for(let i = 1; i <= brown+yellow; i++) {
        if((brown+yellow)%i == 0) divs.push(i)
    }
    
    for(let i = 0; i < divs.length / 2 ; i++) {
        const [width, height] = [divs[divs.length-1 - i], divs[i]]
        if((width - 2) * (height - 2) == yellow) return [width, height]
    }
}