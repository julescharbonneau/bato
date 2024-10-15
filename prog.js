var map = L.map('map').setView([46.971695654090354,-1.3002190607684483], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([46.971695654090354,-1.3002190607684483]).addTo(map);

var circle = L.circle([46.97612515784068, -1.3130444708906186], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 700
}).addTo(map);
marker.bindPopup("<b>23 septembre 2024 9h30</b><br>température eau:</br><f>ph de l'eau:</f><g>profondeur de l'eau:</g>").openPopup();


var btn = document.querySelector("input");
var txt = document.querySelector("p");
var txt1 = document.querySelector("h1");
var txt2 = document.querySelector("br");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.value === "English") {
    btn.value = "francais";
    txt.textContent = "the page is in English. ";
	txt1.textContent = "the boat. ";
	txt2.textContent = "température eau: ";
  } else {
    btn.value = "English";
    txt.textContent = "la page est en francais.";
	txt1.textContent = "le bateau. ";
	txt2.textContent = "water temperature: ";
  }
}