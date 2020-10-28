//最⼤の数を⼊⼒する
const max = parseInt(process.argv[2])

//3の倍数の時に特別なメッセージ
for(let n = 1 ; n < max + 1 ; n = n + 1){
    if(n % 3 === 0){
       console.log('こんにちは')
    }else{
       console.log(n)
   }
}