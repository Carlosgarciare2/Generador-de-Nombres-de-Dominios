/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#url").innerHTML = generatorexcuse();
  });
  console.log("Hello Rigo from the console!");
};

let crea;
let pron = ["The", "Our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let nombres_url = "";
for (let p = 0; p < pron.length; p++) {
  for (let j = 0; j < adj.length; j++) {
    for (let n = 0; n < noun.length; n++) {
      console.log(pron[p] + adj[j] + noun[n] + ".com");
    }
  }
}

console.log(nombres_url);
