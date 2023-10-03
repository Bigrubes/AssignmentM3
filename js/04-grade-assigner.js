
function grade(){
let score = prompt("Please choose a number between 1-100")
if (score > 100){
    alert("You chose a number greater than 100.  Please choose a number between 1-100")
}
else if(score<1){
    alert("You chose a number less than 1.  Please choose a number between 1-100")
}
else if (score<60){
    console.log("You received an F")
}
else if (score<70){
    console.log("You received a D")
}
else if (score<80){
    console.log("You received a C")
}
else if (score<90){
    console.log("You received a B")
}
else {(score<=100)
    console.log("You received a A")
}

}
