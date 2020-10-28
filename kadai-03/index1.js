// 生まれた日を入力
const day = parseInt(process.argv[2])

if (day % 3 === 0) {
    console.log('あなたは温厚な性格です')
} else if (day % 3 === 1) {
    console.log('あなたは慎重な性格です')
} else {
    console.log('あなたは傲慢な性格です')
}