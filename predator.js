"use strict"
let Predator = (function () {
  let carnivores = [];
  let herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      //Create an XHR to load carnivores
      let loader = new XMLHttpRequest();
        // Set the value of the private array
        //Listen for when the load event is broadcast
        //and execute an anonymous callback
        loader.addEventListener("load", function () {
          //set the value of the private array
        carnivores = JSON.parse(this.responseText).carnivores;
        console.log("carnivores", carnivores);
        
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        listCarnivores(carnivores);
        // callbackToInvoke(carnivores);
      });
        loader.open("GET", "carnivores.json");
        loader.send();
    },

    loadHerbivores: function (callbackToInvoke) {
      //Create an XHR to load carnivores
      let loader = new XMLHttpRequest();
        // Set the value of the private array
        //Listen for when the load event is broadcast
        //and execute an anonymous callback
        loader.addEventListener("load", function () {
          //set the value of the private array
        herbivores = JSON.parse(this.responseText).herbivores;
        console.log("herbivores", herbivores);
        
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        listHerbivores(herbivores);
        // callbackToInvoke(carnivores);
      });
        loader.open("GET", "herbivores.json");
        loader.send();
    }
  }
})();

function listCarnivores (carnivores) {
  let list = document.getElementById("carnivores-list");
  let outputString = "";

        for (var i = 0; i < carnivores.length; i++) {
          let currentCarnivore = carnivores[i];
        console.log("currentCarnivore", currentCarnivore);
        //Build up Dom string
        outputString += `<h1>${currentCarnivore.Name}</h1>`;
        outputString += `<h5>${currentCarnivore.Family}</h5>`;
         
      }
      list.innerHTML += outputString;
};

function listHerbivores (herbivores) {
  let list = document.getElementById("herbivores-list");
  let outputString = "";

        for (var i = 0; i < herbivores.length; i++) {
          let currentHerbivore = herbivores[i];
        console.log("currentHerbivore", currentHerbivore);
        //Build up Dom string
        outputString += `<h1>${currentHerbivore.Name}</h1>`;
        outputString += `<h5>${currentHerbivore.Family}</h5>`;
         
      }
      list.innerHTML += outputString;
}
  
// Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.
// Create an IIFE with the name of Predator.
// Predator should have two private arrays to store carnivores and herbivores.
// Predator should expose two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
// In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded to then display those animals in your DOM. Example given below.
// In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded