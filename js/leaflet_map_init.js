// Initialize Leaflet.js Map
var map = L.map('interactive-map').setView([48.8588443, 2.2943506], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Add example markers
L.marker([48.8588443, 2.2943506]).addTo(map).bindPopup('<b>Eiffel Tower</b><br>Paris, France').openPopup();
L.marker([51.5074, -0.1278]).addTo(map).bindPopup('<b>Big Ben</b><br>London, UK');
