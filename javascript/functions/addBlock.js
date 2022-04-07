
export default function addBlock(newId, blockColor, width, prevBlock, playField){
	const newBlock = document.createElement("div")
	newBlock.classList.add("box")
	newBlock.style.width = `${width}px`
	// newBlock.style.opacity = `${1 - newId/30}`
	if (newId%2 === 0){
		newBlock.style.left = "650px"
	}else{
		newBlock.style.left = "-650px"
	}
	newBlock.style.backgroundColor = blockColor
	newBlock.setAttribute("id", `box-${newId}`)
	playField.insertBefore(newBlock, prevBlock)
	return newBlock
}