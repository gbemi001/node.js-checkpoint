array = process.argv
let sum = 0
let index = 2
for(; index<array.length; index++){
    sum +=Number(array[index])
}
console.log(sum)