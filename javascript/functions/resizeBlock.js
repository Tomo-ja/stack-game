export default function resizeBlock(info, block, range){
	//get X position and width of block
	const {x, width} = info

	let difference = x - range.leftLimit
	let gameOver = false

	// first state for over left side, second for over right
	if (difference < 0){
		difference = Math.abs(difference)
		gameOver = checkOverBothRange(difference)
		if (!gameOver){
			block.style.left = `${range.leftLimit}px`
			block.style.width = `${width - difference}px`
			range.rightLimit -= difference
		}
	} else if(difference > 0 ){
		gameOver = checkOverBothRange(difference)
		if(!gameOver){
			block.style.width = `${width - difference}px`
			range.leftLimit = x
		}
	}

	return gameOver? false : range

	// check game over or not
	function checkOverBothRange(arr){
		return (width - arr <= 0) ? true : false
	}
}