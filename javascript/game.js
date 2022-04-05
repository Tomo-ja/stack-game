import blockMove from "./functions/blockMove.js";

const testBtn = document.getElementById("btn")
const parentTest = document.getElementById("game_region")

let counter = 1

testBtn.addEventListener('click', ()=>{
	const newBlock = document.createElement("div")
	newBlock.classList.add("box")
	newBlock.setAttribute("id", `box-${counter}`)
	const prevBlock = document.getElementById(`box-${counter - 1}`)
	parentTest.insertBefore(newBlock, prevBlock)
	counter ++
})


const box = document.getElementById("box-0")

blockMove(box, 48, 5)
