export default async function blockMove(box, speed=0){
	// init set up
	const  MAX_BOX_X = 650 - box.offsetWidth;
	let keyPressed = false;
	let SPEED = speed;
	document.onkeydown = keyDown;
	box.posX = box.offsetLeft;
	box.velX = 5 + (Math.round(SPEED / 5));
	console.log(box.velX)
	box.move = true; 


	// make box move then once stop, return the final position of the box
	const data = await init()
	return new Promise(resolve=>{
		resolve(data)
	})

	// set stop box function, init position, make a loop
	function init() {
		return new Promise(resolve =>{
			let timerId = setInterval(()=>{
				moveLoop()
				if (keyPressed){
					resolve(box.getBoundingClientRect())
					clearInterval(timerId)
				}
			},33);
		})
	}

	// stop a box moving by press "S"
	function keyDown(e) {
		if( !e ) {
			e = window.event;
		}
		if( e.keyCode == 83 ) {
			keyPressed = true;
		}
	}

	// loop function. even though box stop moving, loop is still working behind
	function moveLoop() {
		handleInput()
		moveBox()
	}

	// when "S" is pressed, if box is moving, then stop them. if box is stopping, then move them
	// and finish one time pressed event by setting keyPressed = false
	function handleInput() {
		if( keyPressed && box.move) {
			box.move = false;
		}
	}

	function moveBox() {
	// will only change position if box.move is true
		if (box.move) {
			box.posX += box.velX;

			// if box touch left side of ege, make box bound
			if( box.posX <= 0 ) {
				box.posX = 0;
				box.velX = -box.velX;
			}
			// if box touch right side of ege, make box bound
			if( box.posX >= MAX_BOX_X ) {
				box.posX = MAX_BOX_X;
				box.velX = -box.velX;
			}
		
			// Update the left and top CSS properties.
			box.style.left = box.posX + "px";
		}
	}
}