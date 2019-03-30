var teamMap = L.map("map", {
    center: [39.50, -98.35],
    zoom: 5
  });
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(teamMap);

// loading in the csv to add team names to the dropdown menu
d3.csv("Resources/bball_school_data.csv", function(error, teams) {
  if (error) return (console.warn(error))
  
  var teamNames = teams.map(data => data.School)
  console.log(teamNames)
  var select = d3.select('#selTeam')

  select.on('change', function(d) {
    d3.select(this).value(teamNames)
  })

  select.selectAll('option')
    .data(teamNames)
    .enter()
    .append('option')
    .text(teamNames[i])
    })    
  



  //need to finish below location variable to pull
  //in the lat long of the tourney teams
  // var location = "tourney-teams.csv";

// d3.json(newtry, function(response) {

//   console.log(response);

//   for (var i = 0; i < response.length; i++) {
//     var location = response[i].location;

//     if (location) {
//       L.marker([location.coordinates[1], location.coordinates[0]]).addTo(teamMap);
//     }
//   }

// })