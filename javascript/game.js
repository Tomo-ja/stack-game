import blockMove from "./functions/blockMove.js";
import addBlock from "./functions/addBlock.js";
import resizeBlock from "./functions/resizeBlock.js";
import displayObject from "./functions/displayObject.js";
import { colorData } from "./data/color.js";

const mode = localStorage.getItem("mode")
const bestScore = localStorage.getItem(`bestScore${mode}`)? parseInt(localStorage.getItem(`bestScore${mode}`)): 0

const $app = document.getElementById("app")
const appMarginLeft = $app.getBoundingClientRect().left
const $parentField = document.getElementById("game_field")
let $prevBlock = document.getElementById("box-0")

let counter = 1
let range = {"leftLimit": 225, "rightLimit": 425}
let newBlockWidth = 200


const checkColorIndex = (index) => {
	if(index < colorData.length){
		return index
	}else if (index == colorData.length){
		colorPicker = 0
		return 0
	}
}

let colorPicker = Math.floor(Math.random() * colorData.length)
let color = checkColorIndex(colorPicker)
$prevBlock.style.backgroundColor = colorData[color]
colorPicker ++

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
		let colorIndex = checkColorIndex(colorPicker)
		let currentBlock = addBlock(counter,colorData[colorIndex], newBlockWidth, $prevBlock, $parentField)
		
		let fixBlockInfo = blockMove(currentBlock, mode != "easy" && counter)
		$parentField.style.backgroundPosition = `left 0px bottom -${counter * 50}px`
		fixBlockInfo.then(res => {
			range = resizeBlock(res, currentBlock, range, appMarginLeft)
			newBlockWidth = currentBlock.offsetWidth
			$prevBlock = currentBlock
			let gameOver = showResult(range)
			counter ++
			colorPicker ++
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


game()
displayObject($app)