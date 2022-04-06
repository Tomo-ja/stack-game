export default function addBlock(newId, width, prevBlock, playField){
	const newBlock = document.createElement("div")
	newBlock.classList.add("box")
	newBlock.style.width = `${width}px`
	// newBlock.style.opacity = `${1 - newId/30}`
	if (newId%2 === 0){
		console.log("from right")
		newBlock.style.left = "650px"
	}else{
		console.log("from left")
		newBlock.style.left = "-650px"
	}
	newBlock.setAttribute("id", `box-${newId}`)
	playField.insertBefore(newBlock, prevBlock)
	return newBlock
}