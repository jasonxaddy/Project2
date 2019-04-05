var teamMap = L.map("map", {
    center: [39.50, -98.35],
    zoom: 5,
    zoomControl: true
  });
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(teamMap);

<<<<<<< HEAD

  //function to add schools location markers using lat/long
var school_markers = "school_markers.json";

=======
// loading in the csv to add team names to the dropdown menu
var select = d3.select('#selTeam')

d3.csv("Resources/bball_school_data.csv", function(error, teams) {
  if (error) return (console.warn(error))
  
  var teamNames = teams.map(data => data.School)
  console.log(teamNames)
  
  for (var i = 0; i < teamNames.length; i++) {
    select.selectAll('option')
      .data(teamNames)
      .enter()
      .append('option')
      .text(teamNames[i])
      .property('value', teamNames[i])
  }

  select.on('change', function(d) {
    d3.select(this).value(teamNames)
    })
  })    
  
>>>>>>> f7599443e7f59e73bc05dc027533cd50f8936dd8

d3.json(school_markers, function(response) {

  for (var m = 0; m < response.length; m++) {
    var myIcon = L.icon({
      iconUrl: response[m].schoolIcon,
      iconSize: [25, 25],
      iconAnchor: [22, 22],
      popupAnchor: [-10, -20],
    });
    L.marker([response[m].LATITUDE, response[m].LONGITUDE], {icon: myIcon}).addTo(teamMap)
    .bindPopup(`${response[m].School}<br>
                ${response[m].CITY}, ${response[m].STABBR}<br>
                Conference: ${response[m].Conference}<br>
                Record: ${response[m].Record}<br>
                Overall Seed: ${response[m]['Overall Seed']}<br>
                <hr>
                Admission Rate: ${response[m].ADM_RATE}%<br>
                Average SAT: ${response[m].SAT_AVG}`)
    .openPopup()
  }

});


teamMap.scrollWheelZoom.disable();


//dropdown menu with zoom
var select = d3.select('#selTeam')

d3.json('school_markers.json', function(error, teams) {
  if (error) return (console.warn(error))

  const optionSelection = select.selectAll('option').data(teams)

  optionSelection.enter()
    .append('option')
    .text(d => d.School)
    .attr('value', (d, i) => i)

  select.on('change', () => {
      var index = select.property('value')
      var d = teams[index]
      var zoom = 10
      var lat = d.LATITUDE
      var long = d.LONGITUDE
      teamMap.setView([lat, long], zoom)
    })
  })