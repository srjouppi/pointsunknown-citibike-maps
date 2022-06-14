mapboxgl.accessToken = 'pk.eyJ1Ijoic3Jqb3VwcGkiLCJhIjoiY2t4OTd2YnNvMmExcDJucG14cHB6ajJhOCJ9.YFxNr_U53BASB7Eb3IIGAQ';
var mapStarts20 = new mapboxgl.Map({
    container: 'mapStarts20',
    style: 'mapbox://styles/srjouppi/cl4bwl6wl000m14qwqzwq7no2',
    zoom: 10,
    maxZoom:15,
    minZoom:8,
    center: [-73.96, 40.75],
    maxBounds: [
        [-180, 15],
        [-30, 72],
      ],
    projection: 'albers',
});

mapStarts20.on("load", function () {
      mapStarts20.addLayer(
          {
          id: "citibike_starts_Sep20",
          type: "circle",
          source: {
              type: "geojson",
              data: "https://raw.githubusercontent.com/srjouppi/pointsunknown-datasets/main/citiStartsSep20Geo.geojson",
          },
          
          paint: {
            'circle-color': ['interpolate', ['linear'], ['get', 'tripCount'],
                10, '#ffffff',
                2000, '#01E1F0',
                14000, '#0B5351'
            ],
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': {
            'property': "tripCount",
            'stops': [
            [10, 2],
            [14000, 10]
            ],
             },
        //   "circle-opacity": [
        //   "step",
        //   ["get", "tripCount"],
        //   0.3,
        //   0.5,
        //   0.7,
        //   0.9,
        //   ],
            // "circle-color": {
            //     'property': 'tripCount',
            //     'stops': [[1,'#E6CCD8'],[60, '#E02916'],[200,'#61120A']]
            //   },
            // "circle-outline-color": "#999",
           },
        },
      "waterway-label"      
      );
    });


    // Map September 2020 Stops

    var mapStops20 = new mapboxgl.Map({
        container: 'mapStops20',
        style: 'mapbox://styles/srjouppi/cl4bwl6wl000m14qwqzwq7no2',
        zoom: 10,
        maxZoom:15,
        minZoom:8,
        center: [-73.96, 40.75],
        maxBounds: [
            [-180, 15],
            [-30, 72],
          ],
        projection: 'albers',
    });
    
    mapStops20.on("load", function () {
          mapStops20.addLayer(
              {
              id: "citibike_stops_Sep20",
              type: "circle",
              source: {
                  type: "geojson",
                  data: "https://raw.githubusercontent.com/srjouppi/pointsunknown-datasets/main/citiStopsSep20Geo.geojson",
              },
              
              paint: {
                'circle-color': ['interpolate', ['linear'], ['get', 'tripCount'],
                    10, '#ffffff',
                    2000, '#01E1F0',
                    14000, '#0B5351'
                ],
                'circle-stroke-color': '#4d4d4d',
                'circle-stroke-width': 0.5,
                'circle-radius': {
                'property': "tripCount",
                'stops': [
                [10, 2],
                [14000, 10]
                ],
                 },
            //   "circle-opacity": [
            //   "step",
            //   ["get", "tripCount"],
            //   0.3,
            //   0.5,
            //   0.7,
            //   0.9,
            //   ],
                // "circle-color": {
                //     'property': 'tripCount',
                //     'stops': [[1,'#E6CCD8'],[60, '#E02916'],[200,'#61120A']]
                //   },
                // "circle-outline-color": "#999",
               },
            },
          "waterway-label"      
          );
        });
// September 2021 Starts

var mapStarts21 = new mapboxgl.Map({
    container: 'mapStarts21',
    style: 'mapbox://styles/srjouppi/cl4bwl6wl000m14qwqzwq7no2',
    zoom: 10,
    maxZoom:15,
    minZoom:8,
    center: [-73.96, 40.75],
    maxBounds: [
        [-180, 15],
        [-30, 72],
      ],
    projection: 'albers',
});

mapStarts21.on("load", function () {
      mapStarts21.addLayer(
          {
          id: "citibike_starts_Sep21",
          type: "circle",
          source: {
              type: "geojson",
              data: "https://raw.githubusercontent.com/srjouppi/pointsunknown-datasets/main/citiStartsSep21Geo.geojson",
          },
          
          paint: {
            'circle-color': ['interpolate', ['linear'], ['get', 'tripCount'],
                10, '#ffffff',
                2000, '#F000E2',
                14000, '#54004F'
            ],
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': {
            'property': "tripCount",
            'stops': [
            [10, 2],
            [14000, 10]
            ],
             },
        //   "circle-opacity": [
        //   "step",
        //   ["get", "tripCount"],
        //   0.3,
        //   0.5,
        //   0.7,
        //   0.9,
        //   ],
            // "circle-color": {
            //     'property': 'tripCount',
            //     'stops': [[1,'#E6CCD8'],[60, '#E02916'],[200,'#61120A']]
            //   },
            // "circle-outline-color": "#999",
           },
        },
      "waterway-label"      
      );
    })
// September 2021 Stops

var mapStops21 = new mapboxgl.Map({
    container: 'mapStops21',
    style: 'mapbox://styles/srjouppi/cl4bwl6wl000m14qwqzwq7no2',
    zoom: 10,
    maxZoom:15,
    minZoom:8,
    center: [-73.96, 40.75],
    maxBounds: [
        [-180, 15],
        [-30, 72],
      ],
    projection: 'albers',
});

mapStops21.on("load", function () {
      mapStops21.addLayer(
          {
          id: "citibike_stops_Sep21",
          type: "circle",
          source: {
              type: "geojson",
              data: "https://raw.githubusercontent.com/srjouppi/pointsunknown-datasets/main/citiStopsSep21Geo.geojson",
          },
          
          paint: {
            'circle-color': ['interpolate', ['linear'], ['get', 'tripCount'],
                10, '#ffffff',
                2000, '#F000E2',
                14000, '#54004F'
            ],
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': {
            'property': "tripCount",
            'stops': [
            [10, 2],
            [14000, 10]
            ],
             },
        //   "circle-opacity": [
        //   "step",
        //   ["get", "tripCount"],
        //   0.3,
        //   0.5,
        //   0.7,
        //   0.9,
        //   ],
            // "circle-color": {
            //     'property': 'tripCount',
            //     'stops': [[1,'#E6CCD8'],[60, '#E02916'],[200,'#61120A']]
            //   },
            // "circle-outline-color": "#999",
           },
        },
      "waterway-label"      
      );
    });
// Create the popup
mapStarts20.on('click', 'citibike_starts_Sep20', function (e) {
    var stationName = e.features[0].properties['start station name'];
    var starts = e.features[0].properties.tripCount;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>'+stationName+'</h4>'
            +'<h2>Total Starts: '+starts+'</h2>')
        .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
mapStarts20.on('mouseenter', 'citibike_starts_Sep20', function () {
    map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
mapStarts20.on('mouseleave', 'citibike_starts_Sep20', function () {
    map.getCanvas().style.cursor = '';
});