
function coin(){
let choice = (prompt('Please select "heads" or "tails"'))

console.log(choice)
let heads = "heads"
let tails = "tails"

let coinFlip = Math.round(Math.random()* 100)
console.log(coinFlip)
if (coinFlip < 50){
    coinFlip = heads
}
    console.log(coinFlip)
if (coinFlip >= 50){
    coinFlip = tails
}
console.log(coinFlip)


if (coinFlip === tails){ 
    if(choice=== tails){
    alert("The flip was tails and you chose tails...you win!")
    }
}
if (coinFlip === tails) {
    if (choice === heads){
    alert("The flip was tails and you chose heads...you lose!")
    }
}
if (coinFlip  === heads ){
    if (choice === heads){
    alert("The flip was heads and you chose heads...you win!")
    }
}
if (coinFlip === heads){
    if (choice === tails){
    alert("The flip was heads and you chose tails...you lose!")
}
}
}