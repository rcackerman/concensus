// Layer groups for base layers and point layers
var bases = new L.LayerGroup(),
		points = new L.LayerGroup();

function style(feature) {
  return {
    fillColor: '#BF6FA0',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}
// Data sources

// Right now the data sources are hardcoded, since there are only 4
// TODO: - add data sources dynamically as users select layers
console.log("Starting data...");

function getShapeData( geoURL ) {
	$.getJSON( geoURL , function(data) {
		  var geolayer = L.geoJson(data, {
		  	style: style
		  });
		  geolayer.addTo(map);
		  console.log(geolayer);
	});
}

// var DetroitBlockGroup = getShapeData("/data/blockgroups.json");
// 		DetroitTract = omnivore.csv('data/DetroitTract2010.csv'),
// 		streetlights = L.geoJson(''),
// 		demographics = L.geoJson('');

// These are the type of layer groups the control panel will show

// var baseLayers = {
// 						"Census Block Groups": DetroitBlockGroup,
// 						// "Census Tracts": DetroitTract
// };

// var pointLayers = {
// 						"Street Lights": streetlights,
// 						"Demographics": demographics
// };

// // create map

var map = L.map('map', {
												center: [42.3540, -83.0523],
												zoom: 11,
												layers: []
});

L.tileLayer('http://api.tiles.mapbox.com/v3/rcackerman.h6ofgio1/{z}/{x}/{y}.png', {
            attribution: 'Made pretty by Mapbox'
          }).addTo(map);

getShapeData("/data/blockgroups.json");
// // TODO: use the legend as the control, rather than this
// L.control.layers(baseLayers, pointLayers).addTo(map);