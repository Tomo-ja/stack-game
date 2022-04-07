
// control modal ------------------------------------------------------------
const $modal = document.getElementById("info_modal")
const $openModalBtn = document.getElementById("into_modal_open-btn")
const $closeModalBtn = document.getElementById("info_modal_close-btn")

$openModalBtn.addEventListener("click",()=>{
	$modal.style.display = "block"
	$openModalBtn.style.opacity = 0
})
$closeModalBtn.addEventListener("click", ()=>{
	$modal.style.display = "none"
	$openModalBtn.style.opacity = 1
})

// set a mode of next game -------------------------------------------------
const $boxFaces = [...document.getElementsByClassName("box_face")]
$boxFaces.forEach($face => {
	$face.addEventListener("click", (e)=>{
		const mode = checkMode(e.target)
		localStorage.setItem("mode", mode)
		window.open("../../view/game.html", "_self")
	})
})
const checkMode = (clickedFace) =>{
	let mode = clickedFace.innerText.toLowerCase()
	return mode
}