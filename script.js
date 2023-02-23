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

computer.currentRoll = rollType[randomIndex];

console.log('the computer rolled a ' + computer.currentRoll)