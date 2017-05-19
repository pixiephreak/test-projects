var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoicGl4aWVwaHJlYWsiLCJhIjoiY2oydng0ZXJrMDA2YTJycW9kdWUza3ZrMSJ9.m2fu1nocZw5xQjz1F6ZvqQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v9',
center: [-74.50, 40], // starting position
zoom: 9 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
