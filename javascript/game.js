import blockMove from "./functions/blockMove.js";
import addBlock from "./functions/addBlock.js";
import resizeBlock from "./functions/resizeBlock.js";

const testBtn = document.getElementById("btn")
const parentTest = document.getElementById("game_region")


let counter = 1
let prevBlock = document.getElementById("box-0")
console.log(prevBlock.getBoundingClientRect())

let range = {"leftLimit": 180, "rightLimit": 228}
let newBlockWidth = 48

testBtn.addEventListener('click', ()=>{
	game()
})

let game = async()=>{
	let isGameOver = await gameLoop()
	if (isGameOver){
		console.log("done")
	}else{
		game()
	}
}


function gameLoop (){
	return new Promise(resolve=>{
		let currentBlock = addBlock(counter, newBlockWidth, prevBlock, parentTest)
		let fixBlockInfo = blockMove(currentBlock, 5)
		parentTest.style.backgroundPosition = `left 0px bottom -${counter * 50}px`
		fixBlockInfo.then(res => {
			range = resizeBlock(res, currentBlock, range)
			newBlockWidth = currentBlock.offsetWidth
			prevBlock = currentBlock
			let gameOver = showResult(range)
			counter ++
			resolve (gameOver)
		})
	})
}


const showResult = (range) => {
	if (range){
		return false
	}else{
		return true
	}
}


