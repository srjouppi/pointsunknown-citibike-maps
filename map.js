mapboxgl.accessToken = 'pk.eyJ1Ijoic3Jqb3VwcGkiLCJhIjoiY2t4OTd2YnNvMmExcDJucG14cHB6ajJhOCJ9.YFxNr_U53BASB7Eb3IIGAQ';
var gradCyl = new mapboxgl.Map({
  container: 'gradCyl',
  style: 'mapbox://styles/srjouppi/cl3ugxgy5002a14pn5uchafvl',
  zoom: 3.5,
  maxZoom:9,
  minZoom:3,
  center: [-99, 38],
  projection: 'albers',
});

var mapStarts20 = new mapboxgl.Map({
    container: 'mapStarts20',
    style: 'mapbox://styles/srjouppi/cl4bwl6wl000m14qwqzwq7no2',
    // zoom: 10,
    // maxZoom:15,
    // minZoom:8,
    // center: [-74, 40.7],
    // // maxBounds: [
    // //     [-180, 15],
    // //     [-30, 72],
    // //   ],
    projection: 'albers',
});

// mapStarts20.on("load", function () {
//   mapStarts20.addLayer(
//       {
//       id: "citibike_starts_Sep20",
//       type: "circle",
//       source: {
//           type: "geojson",
//           data: "data/citiStartsSep20Geo.geojson",
//       },
      
//       paint: {
          
//           'circle-radius': {
//             'property': "tripCount",
//             'stops': [
//             [10, 2],
//             [14000, 10]
//             ]
//           },
//         },
//       },
//       //     "circle-color": [
//       //     "match",
//       //     ["get", "Winner"],
//       //     "Donald J Trump",
//       //     "#cf635d",
//       //     "Joseph R Biden Jr",
//       //     "#6193c7",
//       //     "Other",
//       //     "#91b66e",
//       //     "#ffffff",
//       //     ],
//       //     "circle-stroke-color": "#000000",
//       //     "circle-opacity": [
//       //     "step",
//       //     ["get", "WnrPerc"],
//       //     0.3,
//       //     0.4,
//       //     0.5,
//       //     0.5,
//       //     0.7,
//       //     0.6,
//       //     0.9,
//       //     ],
//       // },
//       // minzoom: 3,
//       // },
//       "waterway-label"
//       );
//     });
//   // );




// map.on('click', 'us_states_protests', function (e) {
//   var stateName = e.features[0].properties.NAME;
//   var encounters = e.features[0].properties.encounters;
//   var shot_tased = e.features[0].properties['shot or tased'];
//   var struck_beat = e.features[0].properties['struck or beat'];
//   var pushed_tackled = e.features[0].properties['pushed or tackled'];
//   var maced = e.features[0].properties.maced;
//   var other = e.features[0].properties.other;
//   // wnrPerc = (wnrPerc * 100).toFixed(0);
//   encounters = encounters.toLocaleString();
//   stateName = stateName.toUpperCase();
//   new mapboxgl.Popup()
//       .setLngLat(e.lngLat)
//       .setHTML('<h4>'+stateName+'</h4>'
//           +'<h2><span style="color:#61002F;">'+encounters+'</span> reports of police brutality against protesters.</h2>'
//           + '<br/>'
//           + '<p><b>Shot or tased:</b> '+shot_tased+'</p>'
//           + '<p><b>Struck or beat:</b> '+struck_beat+'</p>'
//           + '<p><b>Pushed or tackled:</b> '+pushed_tackled+'</p>'
//           + '<p><b>Tear gassed or maced:</b> '+maced+'</p>'
//           + '<p><b>Other:</b> '+other+'</p>')
//       .addTo(map);
// });
// // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
// map.on('mouseenter', 'us_states_protests', function () {
//   map.getCanvas().style.cursor = 'pointer';
// });
// // Change it back to a pointer when it leaves.
// map.on('mouseleave', 'us_states_protests', function () {
//   map.getCanvas().style.cursor = '';
// });

// map.on('click', 'us_counties_protests', function (e) {
//   var countyName = e.features[0].properties.NAME;
//   var encounters = e.features[0].properties.NUMPOINTS;
//   // wnrPerc = (wnrPerc * 100).toFixed(0);
//   encounters = encounters.toLocaleString();
//   countyName = countyName.toUpperCase();
//   new mapboxgl.Popup()
//       .setLngLat(e.lngLat)
//       .setHTML('<h4>'+countyName+'</h4>'
//           +'<h2>'+encounters+' reports of police brutality.</h2>')
//           // + '<br/>'
//           // + '<p><b>Shot or tased:</b> '+shot_tased+'</p>'
//           // + '<p><b>Struck or beat:</b> '+struck_beat+'</p>'
//           // + '<p><b>Pushed or tackled:</b> '+pushed_tackled+'</p>'
//           // + '<p><b>Tear gassed or maced:</b> '+maced+'</p>'
//           // + '<p><b>Other:</b> '+other+'</p>')
//       .addTo(map);
// });
// // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
// map.on('mouseenter', 'us_counties_protests', function () {
//   map.getCanvas().style.cursor = 'pointer';
// });
// // Change it back to a pointer when it leaves.
// map.on('mouseleave', 'us_counties_protests', function () {
//   map.getCanvas().style.cursor = '';
// });

// // GRADUATED CYLINDER MAP

// var gradCyl = new mapboxgl.Map({
//   container: 'gradCyl',
//   style: 'mapbox://styles/srjouppi/cl41wyb8m001x14tbpz0xnnu9',
//   zoom: 3.5,
//   maxZoom:9,
//   minZoom:3,
//   center: [-99, 38],
//   projection: 'albers',
// });

// gradCyl.on("load", function () {
//   gradCyl.addLayer(
//       {
//       id: "us_counties_centroids",
//       type: "circle",
//       source: {
//           type: "geojson",
//           data: "data/protestsCategorized.geojson",
//       },
      
//       paint: {
//           // 'circle-radius': ['5,']
//           'circle-radius': ['get','zoom_level'],
//           // ['interpolate', ['linear'], ['zoom'],
//           //     3, ['max', ['/', ['sqrt', ['abs', ['-', ['get', 'Trump'], ['get', 'Biden']]]], 40], 1],
//           //     9, ['max', ['/', ['sqrt', ['abs', ['-', ['get', 'Trump'], ['get', 'Biden']]]], 15], 5],
//           // ],
      
//           "circle-color": [
//           "match",
//           ["get", "category"],
//           "maced",
//           "#F29A2E",
//           "pushed or tackled",
//           "#F2811D",
//           "struck or beat",
//           "#D94711",
//           "shot or tased",
//           "#8C1A0F",
//           "#ffffff",
//           ],
//           "circle-opacity": .5,
//           // "circle-color": [
//           //   "match",
//           //   ["get", "Winner"],
//           //   "Donald J Trump",
//           //   "#cf635d",
//           //   "Joseph R Biden Jr",
//           //   "#6193c7",
//           //   "Other",
//           //   "#91b66e",
//           //   "#ffffff",
//           //   ],
//           // "circle-stroke-color": "#000000",
//           // "circle-opacity": [
//           // "step",
//           // ["get", "category"],
//           // 0.3,
//           // 0.5,
//           // 0.7,
//           // 0.9,
//           // ],
//       },
//       minzoom: 3,
//       },
//       "waterway-label"
//   );
//   gradCyl.addLayer(
//       {
//       id: "us_states_elections_outline",
//       type: "line",
//       source: {
//           type: "geojson",
//           data: "data/statesElections.geojson",
//       },
//       paint: {
//           "line-color": "grey",
//           "line-width": 0.7,
//       },
//       },
//       "us_counties_centroids"
//   );
//   gradCyl.addLayer(
//       {
//       id: "us_counties_elections_outline",
//       type: "line",
//       source: {
//           type: "geojson",
//           data: "data/countiesElections.geojson",
//       },
//       minzoom: 6,
//       paint: {
//           "line-color": "#ffffff",
//           "line-width": 0.25,
//       },
//       },
//       "us_states_elections_outline"
//   );
// });

// map.on('click', 'us_counties_centroids', function (e) {
//   var cityName = e.features[0].properties.city;
//   var incidentDate = e.features[0].properties.date_text;
//   var incidentDescription = e.features[0].properties.description;
//   var incidentCategory = e.features[0].properties.category;
//   // wnrPerc = (wnrPerc * 100).toFixed(0);
//   // encounters = encounters.toLocaleString();
//   // countyName = countyName.toUpperCase();
//   new mapboxgl.Popup()
//       .setLngLat(e.lngLat)
//       .setHTML('<h4>'+cityName+'</h4>'
//           +'<h1>'+incidentCategory+'</h1>'
//           + '<h2>'+incidentDate+'</h2>'
//           + '<h4>'+incidentDescription+'</h4>')
//           // + '<br/>'
//           // + '<p><b>Shot or tased:</b> '+shot_tased+'</p>'
//           // + '<p><b>Struck or beat:</b> '+struck_beat+'</p>'
//           // + '<p><b>Pushed or tackled:</b> '+pushed_tackled+'</p>'
//           // + '<p><b>Tear gassed or maced:</b> '+maced+'</p>'
//           // + '<p><b>Other:</b> '+other+'</p>')
//       .addTo(map);
// });
// // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
// map.on('mouseenter', 'us_counties_centroids', function () {
//   map.getCanvas().style.cursor = 'pointer';
// });
// // Change it back to a pointer when it leaves.
// map.on('mouseleave', 'us_counties_centroids', function () {
//   map.getCanvas().style.cursor = '';
// });