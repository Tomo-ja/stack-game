export default function displayObject (app){
	let counter = 1

	const objectElement = document.createElement("img")

	objectElement.src = `../images/icon_object_${counter}.svg`
	objectElement.classList.add("object")

	app.appendChild(objectElement)


	// setInterval(()=>{
	// 	const objectElement = document.createElement("img")

	// 	objectElement.src = `../../images/icon_object_${counter}.svg`
	// 	objectElement.classList.add("object")
	
	// 	app.appendChild(objectElement)
	// }, 1000)
	
}

// left, animation-duration, animation-name, filter