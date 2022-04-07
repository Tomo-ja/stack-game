const $resultLastScore = document.getElementById("result_last-score")
const $bestScore = document.getElementById("best-score")
const $faceTryAgain = [...document.getElementsByClassName("result_try-again")]
const $faceMode = [...document.getElementsByClassName("result_mode")]
const $faceScore = [...document.getElementsByClassName("result_score")]

const bestScore = localStorage.getItem("bestScore")
const lastScore = localStorage.getItem("lastScore")
const mode = localStorage.getItem("mode")

$resultLastScore.innerText = lastScore
if (bestScore === lastScore){
	$bestScore.innerText = "new record"
}else{
	$bestScore.innerText = bestScore
}

$faceMode.forEach(face =>{
	face.children[0].innerText = mode
})
$faceScore.forEach(face =>{
	face.children[0].innerText = lastScore
})

$faceTryAgain.forEach(face =>{
	face.addEventListener("click", ()=>{
		window.open('../../index.html', '_self')
	})
})