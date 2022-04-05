export default function blockMove(box, boxWidth, speed){
	const  MAX_BOX_X = 600 - boxWidth;
	let keyPressed = false;
	let SPEED = speed;
	init()

	// set stop box function, init position, make a loop
	function init() {
	document.onkeydown = keyDown;
	box.posX = box.offsetLeft;
	box.velX = SPEED;
	box.move = true; 
	setInterval(gameLoop,33);
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
	function gameLoop() {
	handleInput()
	moveBox()
	}

	// when "S" is pressed, if box is moving, then stop them. if box is stopping, then move them
	// and finish one time pressed event by setting keyPressed = false
	function handleInput() {
	if( keyPressed ) {
		if (box.move == true) {
		box.move = false;
		} else {
		box.move = true;
		}
		keyPressed = false;
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