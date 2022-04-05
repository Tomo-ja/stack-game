import blockMove from "./functions/blockMove.js";
import addBlock from "./functions/addBlock.js";

const testBtn = document.getElementById("btn")
const parentTest = document.getElementById("game_region")

let counter = 1
let prevBlock = document.getElementById("box-0")


testBtn.addEventListener('click', ()=>{
	prevBlock = addBlock(counter, prevBlock, parentTest)
	blockMove(prevBlock, 48, 5)
	counter ++
})



