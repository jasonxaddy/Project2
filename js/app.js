var myMap = L.map("map").setView([39.8283, -98.5795], 13)
   
  
  // Adding tile layer to the map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibHVjeXNoYXc0IiwiYSI6ImNqdGdld3JpMzAzZG00NHAyeHpoNHJycTgifQ.aJ2iV_a8xhm7z0dKsSETIg", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
  }).addTo(myMap);