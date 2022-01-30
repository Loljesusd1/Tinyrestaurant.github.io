const timelineSpots = document.getElementsByClassName("timelineSpots");
const descriptions = document.getElementsByClassName("timelineSpotDescription");

function showDescription(spotPressed) {
	for (let i = 0; i < 6; i++) {
		descriptions.item(i).style.display = "none";
	}
	descriptions.item(spotPressed).style.display = "block";
}

window.addEventListener("load", () => {
	for (let i = 0; i < 6; i++) {
		timelineSpots.item(i).addEventListener("click", () => {showDescription(i)});
	}
})
