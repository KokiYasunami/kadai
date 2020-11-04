//３秒待ってhelloと表示、２秒待ってbyeと表示
setTimeout(() => { 
    console.log('hello')
    setTimeout(()=>{
        console.log('bye') 
   }, 2000)
}, 3000)