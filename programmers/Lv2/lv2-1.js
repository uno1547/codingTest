// 올바른 괄호
/*
()()	true
(())()	true
)()(	false
(()(	false



*/
const solution = (s) => {
  const stack = []
  for(let i = 0; i < s.length; i++) {
    stack.push(s[i])
    if(stack[stack.length - 2] == "(" && stack[stack.length - 1] == ")") {
      stack.pop()
      stack.pop()
    }
  }
  return stack.length == 0
}
// solution("()()")
// solution("(())()")
// solution(")()(")
solution("(()(")