import blockMove from "./functions/blockMove.js";
import addBlock from "./functions/addBlock.js";
import resizeBlock from "./functions/resizeBlock.js";
import { colorData } from "./data/color.js";

const mode = localStorage.getItem("mode")
const bestScore = localStorage.getItem(`bestScore${mode}`)? parseInt(localStorage.getItem(`bestScore${mode}`)): 0


const appMarginLeft = document.getElementById("app").getBoundingClientRect().left
const parentTest = document.getElementById("game_field")
let counter = 1
let prevBlock = document.getElementById("box-0")

let range = {"leftLimit": 225, "rightLimit": 425}
let newBlockWidth = 200

let colorCounter = 0


let game = async()=>{
	let isGameOver = await gameLoop()
	if (isGameOver){
		localStorage.setItem("lastScore", counter - 2)
		if (bestScore < counter-2){
			localStorage.setItem(`bestScore${mode}`, counter -2)
		}
		await new Promise(resolve=>{setTimeout(resolve, 500)})
		window.open("../view/result.html", "_self")
	}else{
		game()
	}
}

function gameLoop (){
	return new Promise(resolve=>{
		let colorIndex = checkColorIndex(colorCounter)
		let currentBlock = addBlock(counter,colorData[colorIndex], newBlockWidth, prevBlock, parentTest)
		let fixBlockInfo = blockMove(currentBlock, counter)
		parentTest.style.backgroundPosition = `left 0px bottom -${counter * 50}px`
		fixBlockInfo.then(res => {
			range = resizeBlock(res, currentBlock, range, appMarginLeft)
			newBlockWidth = currentBlock.offsetWidth
			prevBlock = currentBlock
			let gameOver = showResult(range)
			counter ++
			colorCounter ++
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

const checkColorIndex = (index) => {
	if(index < colorData.length){
		return index
	}else if (index == colorData.length){
		colorCounter = 0
		return 0
	}
}


game()