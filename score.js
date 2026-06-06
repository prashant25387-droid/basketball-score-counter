let num1= document.getElementById("homescore")
let num2= document.getElementById("guestscore")
let homescore=0
let guestscore=0
function plusone(){
    homescore+=1
    num1.textContent=homescore
    
}
function plustwo(){
    homescore+=2
    num1.textContent=homescore

}
function plusthree(){
    homescore+=3
    num1.textContent=homescore
}

function one(){
    guestscore+=1
    num2.textContent=guestscore
    
}
function two(){
    guestscore+=2
    num2.textContent=guestscore

}
function three(){
    guestscore+=3
    num2.textContent=guestscore
}
