const descriptions = document.getElementsByClassName("timelineSpotDescription");

function showDescription(spotPressed) {
	for (let i = 0; i < 6; i++) {
		descriptions.item(i).style.display = "none";
	}
	descriptions.item(spotPressed).style.display = "block";
}
