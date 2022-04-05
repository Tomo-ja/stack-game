import blockMove from "./functions/blockMove.js";
import addBlock from "./functions/addBlock.js";

const testBtn = document.getElementById("btn")
const parentTest = document.getElementById("game_region")

let counter = 1
let prevBlock = document.getElementById("box-0")

const range = {"leftLimit": 280, "rightLimit": 328}


testBtn.addEventListener('click', ()=>{
	prevBlock = addBlock(counter, prevBlock, parentTest)
	// console.log(prevBlock.clientWidth)
	console.log(prevBlock.getBoundingClientRect())
	blockMove(prevBlock, 48, 5)
	counter ++
})



