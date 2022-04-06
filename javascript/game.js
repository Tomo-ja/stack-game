import blockMove from "./functions/blockMove.js";
import addBlock from "./functions/addBlock.js";
import resizeBlock from "./functions/resizeBlock.js";

const appMarginLeft = document.getElementById("app").getBoundingClientRect().left
const testBtn = document.getElementById("btn")
const parentTest = document.getElementById("game_region")


let counter = 1
let prevBlock = document.getElementById("box-0")

let range = {"leftLimit": 295, "rightLimit": 355}
let newBlockWidth = 60

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
		let fixBlockInfo = blockMove(currentBlock, counter)
		parentTest.style.backgroundPosition = `left 0px bottom -${counter * 50}px`
		fixBlockInfo.then(res => {
			range = resizeBlock(res, currentBlock, range, appMarginLeft)
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


