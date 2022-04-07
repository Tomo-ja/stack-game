
export default function displayObject (app){
	let counter = 1
	const speedOption = [5,6,8, 10, 12, 14, 16, 18, 20]
	const dropStartPosition = [0, 50, 100, 150, 200, 250, 275, 300, 325, 350, 400, 450, 520, 570]

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
	}, 300)
	
}

// left, animation-duration, animation-name, filter