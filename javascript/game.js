import blockMove from "./functions/blockMove.js";
import addBlock from "./functions/addBlock.js";
import resizeBlock from "./functions/resizeBlock.js";

const mode = localStorage.getItem("mode")
const appMarginLeft = document.getElementById("app").getBoundingClientRect().left
const bestScore = localStorage.getItem(`bestScore${mode}`)? parseInt(localStorage.getItem(`bestScore${mode}`)): 0
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
		localStorage.setItem("lastScore", counter - 2)
		if (bestScore < counter-2){
			localStorage.setItem(`bestScore${mode}`, counter -2)
		}
		await new Promise(resolve=>{setTimeout(resolve, 1000)})
		window.open("../view/result.html", "self")
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


