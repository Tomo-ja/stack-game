
export default function displayObject (app){
	let counter = 1
	const speedOption = [4, 6, 8, 10, 12, 14, 16, 18, 20]
	const dropStartPosition = [10, 70, 130, 180, 220, 260, 280, 300, 320, 340, 380, 420, 480, 540, 600]

	setInterval(()=>{
		const color = Math.round(Math.random())
		const speed = speedOption[Math.floor(Math.random() * speedOption.length)]
		const dropPosition = dropStartPosition[Math.floor(Math.random()* dropStartPosition.length)]
		const objectElement = document.createElement("img")

		objectElement.src = `../images/icon_object_${counter}.svg`
		objectElement.classList.add("object")
		// pick color
		if(color === 0){
			objectElement.classList.add("object-white")	
		}else{
			objectElement.classList.add("object-black")
		}
		//pick shape
		if (counter === 5){
			counter = 1
		}else{
			counter ++
		}
		// set speed
		objectElement.style.animationDuration = `${speed}s`
		//set position
		objectElement.style.left = `${dropPosition}px`

		app.appendChild(objectElement)
	}, 500)
	
}

// left, animation-duration, animation-name, filter