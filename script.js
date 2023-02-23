//button variables + Listeners 
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')

function click (){
    console.log('clicked')
}

rock.addEventListener('click', click)
paper.addEventListener('click', click)
scissors.addEventListener('click', click)





// create objects to store Computer Player rolls

const computer = {
    currentRoll: null
}
const player = {
    currentRoll: null
}

const rollType = ["Papyrus", "Scalpellus","Lapis"]

//Logic for choicing a random roll

const randomIndex = Math.floor(Math.random() * rollType.length)

//Set Computer Object Roll Field to the roll type at the Random Index

computer.currentRoll = rollType[randomIndex];

//Conditionals to keep track of who is winning 

console.log('the computer rolled a ' + computer.currentRoll)

if(computer.currentRoll === "Papyrus"){
    console.log("match")
} 



