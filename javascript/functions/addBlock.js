export default function addBlock(newId, width, prevBlock, playField){
	const newBlock = document.createElement("div")
	newBlock.classList.add("box")
	newBlock.style.width = `${width}px`
	newBlock.setAttribute("id", `box-${newId}`)
	playField.insertBefore(newBlock, prevBlock)
	return newBlock
}