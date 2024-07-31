function methodin(){
  const hi = '2222';
  const gak = {
       'test1' : '1111',
       'test2' : function(){
              console.log('11111')
        }
  }

  gak.test2(); // 11111
  // console.log(gak.test1)
  // console.log(gak.test2)
  return {
       'ret1' : function(){
              console.log(gak.test1) // 1111
       },
       'ret2' : function(){
             console.log(gak.test2()) 
       }
  }
}

const test5 = methodin();
test5.ret1();
test5.ret2();