/*
"" && "" => ""   "#" || x => "#"
0 0 > 0
0 1 > 1

n	5
[9, 20, 28, 18, 11]
01001      
[30, 1, 21, 17, 28]
11110 
출력	["#####","# # #", "### #", "# ##", "#####"]
*/
/*
n	6
arr1	[46, 33, 33 ,22, 31, 50]
arr2	[27 ,56, 19, 14, 14, 10]
출력	["######", "### #", "## ##", " #### ", " #####", "### # "]
 */
/*
const str1 = '5';
console.log(str1.padStart(2, '0'));
*/
const n = 6
const arr1 = [46, 33, 33 ,22, 31, 50]
const arr2 = 	[27 ,56, 19, 14, 14, 10]
const ans = []
for(let i = 0; i < n; i++) {
  let binary1 = [...arr1[i].toString(2).padStart(n, '0')]
  console.log(binary1);
  let binary2 = [...arr2[i].toString(2).padStart(n, '0')]
  console.log(binary2);
  let binary3 = binary1.map((val, index) => {
    const dig1 = Number(binary1[index])
    const dig2 = Number(binary2[index])
    // console.log(dig1, dig2);
    const dig3 = dig1 || dig2
    return dig3 ? '#': ' '
  }).join('')
  ans.push(binary3)
}
console.log(ans);