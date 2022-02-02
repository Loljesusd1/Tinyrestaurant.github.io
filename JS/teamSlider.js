const teamMembers = [
	`
		<p><img src="IMG/adrian-team.png" class="img-team" alt="Adrian Zamora, CEO de Tiny Restaurant">
	      <br>
		<p><B class="name-team">Adrian Zamora</B><br>CEO & Programming Director
		  <br>
		  <br>
		  <img class="img-red-team"  src="IMG/instagram.png"> <a href="https://instagram.com/zamoradrian78" target="_blank">Instagram</a>
	`,
	`
		<p><img src="IMG/gabriel-team.png"class="img-team" alt="Gabriel Hernandez, CO-CEO de Tiny Restaurant" >
		<p><b class="name-team">Gabriel Hernandez</b><br>Co-CEO & Blockchain Programming Director
		  <br>
		  <br>
		  <img class="img-red-team"  src="IMG/gorjeo.png"> <a href="https://twitter.com/IllustredJelly" target="_blank" >Twitter</a>
	`,
	`
		<p><img src="IMG/jesus-team.png"class="img-team" alt="Jesus Rivas, CO-CEO de Tiny Restaurant"  >
		<p><b class="name-team">Jesus Rivas</b><br>Co-CEO & Co-Programming Director
	      <br>
	      <br>
		  <img class="img-red-team" src="IMG/instagram.png">  <a href="https://www.instagram.com/yiisus.r/" target="_blank">Instagram</a>
	`,
	`
		<p><img src="IMG/julio-team.png"class="img-team" alt="Julio Cesar. Diseñador de Tiny Restaurant" >
		<p><b class="name-team">Julio Cesar</b><br>Graphic Design Director
	      <br>
	      <br>
		  <img class="img-red-team" src="IMG/instagram.png">  <a href="https://instagram.com/billy.moonshine/" target="_blank">Instagram</a>
	`,
	`
		<p><img src="IMG/arnaldo-team.png" class="img-team" alt="Arnaldo Diaz, Director de marketing de Tiny Restaurant" >
		<p><b class="name-team">Arnaldo Dìaz</b><br>Marketing Director
		  <br>
		  <br>
		  <img class="img-red-team" src="IMG/instagram.png">  <a href="https://instagram.com/without_sleeping" target="_blank">Instagram</a>
	`
]

const teamContainers = document.getElementsByClassName("member-team");

function scrollMembersToRight() {
	teamMembers.push(teamMembers[0]);
	teamMembers.shift();
	for (let i = 0; i <= 2; i++) {
		teamContainers.item(i).innerHTML = teamMembers[i];
	}
}

function scrollMembersToLeft() {
	teamMembers.unshift(teamMembers[teamMembers.length - 1]);
	teamMembers.pop();
	for (let i = 0; i <= 2; i++) {
		teamContainers.item(i).innerHTML = teamMembers[i]
	}
}
