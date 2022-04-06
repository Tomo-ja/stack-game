import blockMove from "./functions/blockMove.js";
import addBlock from "./functions/addBlock.js";
import resizeBlock from "./functions/resizeBlock.js";

const testBtn = document.getElementById("btn")
const parentTest = document.getElementById("game_region")

let counter = 1
let prevBlock = document.getElementById("box-0")

let range = {"leftLimit": 280, "rightLimit": 328}
let newBlockWidth = 48


testBtn.addEventListener('click', ()=>{

	let currentBlock = addBlock(counter, newBlockWidth, prevBlock, parentTest)
	let fixBlockInfo = blockMove(currentBlock, 48, 5)
	parentTest.style.backgroundPosition = `left 0px bottom -${counter * 50}px`
	fixBlockInfo.then(res => {
		range = resizeBlock(res, currentBlock, range)
		newBlockWidth = currentBlock.offsetWidth
		prevBlock = currentBlock
		showResult(range)
		counter ++
	})
})

const showResult = (range) => {
	if (range){
		return
	}else{
		console.log("done")
	}
}


