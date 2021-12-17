const button = document.getElementById('prank-button');

function sayDiego() {
	const name = prompt("Veuillez écrire un nom:");
	alert(name + " existe (et c sw4p qui l'approuve)");
}

button.addEventListener('click', sayDiego);