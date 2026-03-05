var mergeAlternately = function (word1, word2) {
  //   let a =[...word1]  
  //   let b=[...word2]
  let c = ""
  let i = 0
  while (true) {
    if (!word1[i] && !word2[i]) break

    if(word1[i]) c+= word1[i]
    if(word2[i]) c+= word2[i]
    // c += word2[i]
    i++
  }
  console.log(c);
};

mergeAlternately("abc", "pqr")
mergeAlternately("ab", "pqrs")
mergeAlternately("abcd", "pq")