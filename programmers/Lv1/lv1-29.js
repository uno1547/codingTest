//직사각형 별찍기
/* 입출력 받는 코드
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ").map(Number)
    const [a, b] = [n[0], n[1]]
    console.log(a);
    console.log(b);
});
*/
//repeat를 사용하는것도 가능하다 알아두자
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ").map(Number)
    const [a, b] = [n[0], n[1]]
    let str = ''
    for(let i = 0; i < b; i++) { //m행출력(세로)
        let line = ''
        for(let j = 0; j < a; j++) { //n열출력(가로)
            line += '*'
        }
        console.log(line)
    }
});