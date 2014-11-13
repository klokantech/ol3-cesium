var ol2d = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    center: ol.proj.transform([25, 20], 'EPSG:4326', 'EPSG:3857'),
    zoom: 3
  })
});

var ol3d = new olcs.OLCesium(ol2d);
var scene = ol3d.getCesiumScene();
var terrainProvider = new Cesium.CesiumTerrainProvider({
  url: '//cesiumjs.org/stk-terrain/tilesets/world/tiles'
});
scene.terrainProvider = terrainProvider;

ol3d.setEnabled(true);
var camera = ol3d.getCamera();

var infoDiv = document.getElementById('infoDiv');
var printInfo = function() {
  infoDiv.innerHTML = 'Center: ' + Math.ceil(camera.getCenter()[0]) 
          + ', ' + Math.ceil(camera.getCenter()[1]) + '<br />' +
          'Distance: ' + Math.ceil(camera.getDistance()) + '<br />' +
          'Heading: ' + camera.getHeading() + '<br />' +
          'Tilt: ' + camera.getTilt() + '<br />' +
          '<i>Position:</i> ' + Math.ceil(camera.getPosition()[0]) 
          + ', ' + Math.ceil(camera.getPosition()[1]) + '<br />' +
          '<i>Altitude:</i> ' + Math.ceil(camera.getAltitude()) + '<br />';
};
setInterval(printInfo, 100);
