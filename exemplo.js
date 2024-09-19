let contador = 0

for ( let i = 3; i < 10; i++){
    if (i === 3){
        continue
}
if (i === 7){
    break
}
contador++
console.log(`i: ${i}, contador : ${contador}`)
}