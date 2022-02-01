const teamMembers = document.getElementsByClassName("member-team");
var firstMember = 0;

function scrollMembersToRight() {
	var lastMember = firstMember + 3;
	if (lastMember > 4) {
		lastMember = firstMember - 2;
	}
	teamMembers.item(firstMember).style.display = "none";
	teamMembers.item(lastMember).style.display = "block";
	if (firstMember == 4) {
		firstMember = 0;
	} else {
		firstMember++;
	}
}

function scrollMembersToLeft() {
	var lastMember = firstMember + 3;
	if (lastMember > 4) {
		lastMember = firstMember - 2;
	}
	teamMembers.item(firstMember).style.display = "none";
	teamMembers.item(lastMember).style.display = "block";
	if (firstMember == 0) {
		firstMember = 4;
	} else {
		firstMember--;
	}
}
