// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');


d3.json("https://raw.githubusercontent.com/RamonRossello/08MBID---Visualizacion-de-Datos/RamonRossello-text/accidentes_gravedad.json", function(data) {
var visualization = d3plus.viz()
.container("#viz1")
.data(data)
.type("box")
.id("ID")
.x("Gravedad")
.y("Tiempo medio")
.draw()
});