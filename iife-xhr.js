"use strict"
function showCarnivores (carnivores) {
	console.log("carnivores", carnivores);
}

function showHerbivores () {

}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);