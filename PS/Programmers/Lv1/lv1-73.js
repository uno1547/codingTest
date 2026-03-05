function solution(wallpaper) {
    let [minI, minJ, maxI, maxJ] = [wallpaper.length, wallpaper[0].length, 0, 0]
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] != "#") continue
            if(i < minI) minI = i
            if(j < minJ) minJ = j
            if(i > maxI) maxI = i
            if(j > maxJ) maxJ = j
        }
    }
    return [minI, minJ, maxI+1, maxJ+1]
}
// 다른푸리
function solution(wallpaper) {
    let left = [];
    let top = [];
    let right = []
    let bottom = [];
    wallpaper.forEach((v,i) => {
        [...v].forEach((val,ind) => {
            if(val === "#") {
                left.push(i)
                top.push(ind)
                right.push(i + 1)
                bottom.push(ind + 1)
            }
        })
        console.log(left, top, right, bottom, '실행');
    })
    return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)]
}
solution([".#...", "..#..", "...#."])