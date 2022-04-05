export default function addBlock(newId, prevBlock, playField){
	const newBlock = document.createElement("div")
	newBlock.classList.add("box")
	newBlock.setAttribute("id", `box-${newId}`)
	playField.insertBefore(newBlock, prevBlock)
	return newBlock
}