const teamMembers = document.getElementsByClassName("member-team");
var firstMember = 0;
var lastMember = 3;

function scrollMembersToRight() {
	if (firstMember > 4) {
		firstMember = 0;
	} else if (lastMember > 4) {
		lastMember = 0;
	}
	teamMembers.item(firstMember).style.display = "none";
	teamMembers.item(lastMember).style.display = "block";
	firstMember++;
	lastMember++;
}

function scrollMembersToLeft() {
	if (firstMember > 4) {
		firstMember = 0;
	} else if (lastMember > 4) {
		lastMember = 0;
	}
	teamMembers.item(firstMember).style.display = "none";
	teamMembers.item(lastMember).style.display = "block";
	firstMember++;
	lastMember++;
}
