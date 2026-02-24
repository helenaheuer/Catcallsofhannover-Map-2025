var wms_layers = [];


        var lyr_BasemapOSMStandard_0 = new ol.layer.Tile({
            'title': 'Basemap OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Stadtteile_1 = new ol.format.GeoJSON();
var features_Stadtteile_1 = format_Stadtteile_1.readFeatures(json_Stadtteile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtteile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtteile_1.addFeatures(features_Stadtteile_1);
var lyr_Stadtteile_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadtteile_1, 
                style: style_Stadtteile_1,
                popuplayertitle: 'Stadtteile',
                interactive: false,
                title: '<img src="styles/legend/Stadtteile_1.png" /> Stadtteile'
            });
var format_Stadtgrenze_2 = new ol.format.GeoJSON();
var features_Stadtgrenze_2 = format_Stadtgrenze_2.readFeatures(json_Stadtgrenze_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtgrenze_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtgrenze_2.addFeatures(features_Stadtgrenze_2);
var lyr_Stadtgrenze_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadtgrenze_2, 
                style: style_Stadtgrenze_2,
                popuplayertitle: 'Stadtgrenze',
                interactive: false,
                title: '<img src="styles/legend/Stadtgrenze_2.png" /> Stadtgrenze'
            });
var format_Weihnachtsmarkt_3 = new ol.format.GeoJSON();
var features_Weihnachtsmarkt_3 = format_Weihnachtsmarkt_3.readFeatures(json_Weihnachtsmarkt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Weihnachtsmarkt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Weihnachtsmarkt_3.addFeatures(features_Weihnachtsmarkt_3);
var lyr_Weihnachtsmarkt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Weihnachtsmarkt_3, 
                style: style_Weihnachtsmarkt_3,
                popuplayertitle: 'Weihnachtsmarkt',
                interactive: true,
                title: '<img src="styles/legend/Weihnachtsmarkt_3.png" /> Weihnachtsmarkt'
            });
var format_Maschseefest_4 = new ol.format.GeoJSON();
var features_Maschseefest_4 = format_Maschseefest_4.readFeatures(json_Maschseefest_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maschseefest_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maschseefest_4.addFeatures(features_Maschseefest_4);
var lyr_Maschseefest_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maschseefest_4, 
                style: style_Maschseefest_4,
                popuplayertitle: 'Maschseefest',
                interactive: true,
                title: '<img src="styles/legend/Maschseefest_4.png" /> Maschseefest'
            });
var format_Schtzenfest_5 = new ol.format.GeoJSON();
var features_Schtzenfest_5 = format_Schtzenfest_5.readFeatures(json_Schtzenfest_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schtzenfest_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schtzenfest_5.addFeatures(features_Schtzenfest_5);
var lyr_Schtzenfest_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schtzenfest_5, 
                style: style_Schtzenfest_5,
                popuplayertitle: 'Schützenfest',
                interactive: true,
                title: '<img src="styles/legend/Schtzenfest_5.png" /> Schützenfest'
            });
var format_Fuballstadion_6 = new ol.format.GeoJSON();
var features_Fuballstadion_6 = format_Fuballstadion_6.readFeatures(json_Fuballstadion_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fuballstadion_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fuballstadion_6.addFeatures(features_Fuballstadion_6);
var lyr_Fuballstadion_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fuballstadion_6, 
                style: style_Fuballstadion_6,
                popuplayertitle: 'Fußballstadion',
                interactive: true,
                title: '<img src="styles/legend/Fuballstadion_6.png" /> Fußballstadion'
            });
var format_Flohmarkt_7 = new ol.format.GeoJSON();
var features_Flohmarkt_7 = format_Flohmarkt_7.readFeatures(json_Flohmarkt_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flohmarkt_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flohmarkt_7.addFeatures(features_Flohmarkt_7);
var lyr_Flohmarkt_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flohmarkt_7, 
                style: style_Flohmarkt_7,
                popuplayertitle: 'Flohmarkt',
                interactive: true,
                title: '<img src="styles/legend/Flohmarkt_7.png" /> Flohmarkt'
            });
var format_Friedhof_8 = new ol.format.GeoJSON();
var features_Friedhof_8 = format_Friedhof_8.readFeatures(json_Friedhof_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Friedhof_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Friedhof_8.addFeatures(features_Friedhof_8);
var lyr_Friedhof_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Friedhof_8, 
                style: style_Friedhof_8,
                popuplayertitle: 'Friedhof',
                interactive: true,
                title: '<img src="styles/legend/Friedhof_8.png" /> Friedhof'
            });
var format_Park_9 = new ol.format.GeoJSON();
var features_Park_9 = format_Park_9.readFeatures(json_Park_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Park_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Park_9.addFeatures(features_Park_9);
var lyr_Park_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Park_9, 
                style: style_Park_9,
                popuplayertitle: 'Park',
                interactive: true,
                title: '<img src="styles/legend/Park_9.png" /> Park'
            });
var format_Einzelhandel_10 = new ol.format.GeoJSON();
var features_Einzelhandel_10 = format_Einzelhandel_10.readFeatures(json_Einzelhandel_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Einzelhandel_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Einzelhandel_10.addFeatures(features_Einzelhandel_10);
var lyr_Einzelhandel_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Einzelhandel_10, 
                style: style_Einzelhandel_10,
                popuplayertitle: 'Einzelhandel',
                interactive: true,
                title: '<img src="styles/legend/Einzelhandel_10.png" /> Einzelhandel'
            });
var format_RestaurantBarClub_11 = new ol.format.GeoJSON();
var features_RestaurantBarClub_11 = format_RestaurantBarClub_11.readFeatures(json_RestaurantBarClub_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestaurantBarClub_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestaurantBarClub_11.addFeatures(features_RestaurantBarClub_11);
var lyr_RestaurantBarClub_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestaurantBarClub_11, 
                style: style_RestaurantBarClub_11,
                popuplayertitle: 'Restaurant/Bar/Club',
                interactive: true,
                title: '<img src="styles/legend/RestaurantBarClub_11.png" /> Restaurant/Bar/Club'
            });
var format_PNV_12 = new ol.format.GeoJSON();
var features_PNV_12 = format_PNV_12.readFeatures(json_PNV_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNV_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNV_12.addFeatures(features_PNV_12);
var lyr_PNV_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNV_12, 
                style: style_PNV_12,
                popuplayertitle: 'ÖPNV',
                interactive: true,
                title: '<img src="styles/legend/PNV_12.png" /> ÖPNV'
            });
var format_StraenundWegesituation_13 = new ol.format.GeoJSON();
var features_StraenundWegesituation_13 = format_StraenundWegesituation_13.readFeatures(json_StraenundWegesituation_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StraenundWegesituation_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StraenundWegesituation_13.addFeatures(features_StraenundWegesituation_13);
var lyr_StraenundWegesituation_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StraenundWegesituation_13, 
                style: style_StraenundWegesituation_13,
                popuplayertitle: 'Straßen- und Wegesituation',
                interactive: true,
                title: '<img src="styles/legend/StraenundWegesituation_13.png" /> Straßen- und Wegesituation'
            });

lyr_BasemapOSMStandard_0.setVisible(false);lyr_Stadtteile_1.setVisible(true);lyr_Stadtgrenze_2.setVisible(true);lyr_Weihnachtsmarkt_3.setVisible(true);lyr_Maschseefest_4.setVisible(true);lyr_Schtzenfest_5.setVisible(true);lyr_Fuballstadion_6.setVisible(true);lyr_Flohmarkt_7.setVisible(true);lyr_Friedhof_8.setVisible(true);lyr_Park_9.setVisible(true);lyr_Einzelhandel_10.setVisible(true);lyr_RestaurantBarClub_11.setVisible(true);lyr_PNV_12.setVisible(true);lyr_StraenundWegesituation_13.setVisible(true);
var layersList = [lyr_BasemapOSMStandard_0,lyr_Stadtteile_1,lyr_Stadtgrenze_2,lyr_Weihnachtsmarkt_3,lyr_Maschseefest_4,lyr_Schtzenfest_5,lyr_Fuballstadion_6,lyr_Flohmarkt_7,lyr_Friedhof_8,lyr_Park_9,lyr_Einzelhandel_10,lyr_RestaurantBarClub_11,lyr_PNV_12,lyr_StraenundWegesituation_13];
lyr_Stadtteile_1.set('fieldAliases', {'fid': 'fid', 'STADTTLNAM': 'STADTTLNAM', 'STADTTLNR': 'STADTTLNR', 'STADTBZNAM': 'STADTBZNAM', 'STADTBZNR': 'STADTBZNR', 'GEMEINDE': 'GEMEINDE', 'SCALE': 'SCALE', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Stadtgrenze_2.set('fieldAliases', {'fid': 'fid', 'GEMEINDE': 'GEMEINDE', 'SCALE': 'SCALE', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Weihnachtsmarkt_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', });
lyr_Maschseefest_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', });
lyr_Schtzenfest_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', });
lyr_Fuballstadion_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', });
lyr_Flohmarkt_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', });
lyr_Friedhof_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', });
lyr_Park_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', });
lyr_Einzelhandel_10.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', });
lyr_RestaurantBarClub_11.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', '�ffentlicher Raum': '�ffentlicher Raum', });
lyr_PNV_12.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', });
lyr_StraenundWegesituation_13.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Bild': 'Bild', 'Mehr dazu auf @catcallsofhannover': 'Mehr dazu auf @catcallsofhannover', 'Datum': 'Datum', 'Y': 'Y', 'X': 'X', });
lyr_Stadtteile_1.set('fieldImages', {'fid': 'TextEdit', 'STADTTLNAM': 'TextEdit', 'STADTTLNR': 'TextEdit', 'STADTBZNAM': 'TextEdit', 'STADTBZNR': 'TextEdit', 'GEMEINDE': 'TextEdit', 'SCALE': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Stadtgrenze_2.set('fieldImages', {'fid': 'TextEdit', 'GEMEINDE': 'TextEdit', 'SCALE': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Weihnachtsmarkt_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Maschseefest_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Schtzenfest_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'CheckBox', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Fuballstadion_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'CheckBox', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Flohmarkt_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'CheckBox', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Friedhof_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'CheckBox', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Park_9.set('fieldImages', {'fid': 'TextEdit', 'ID': 'CheckBox', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Einzelhandel_10.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_RestaurantBarClub_11.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', '�ffentlicher Raum': 'TextEdit', });
lyr_PNV_12.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_StraenundWegesituation_13.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Bild': 'ExternalResource', 'Mehr dazu auf @catcallsofhannover': 'TextEdit', 'Datum': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Stadtteile_1.set('fieldLabels', {'fid': 'hidden field', 'STADTTLNAM': 'hidden field', 'STADTTLNR': 'hidden field', 'STADTBZNAM': 'hidden field', 'STADTBZNR': 'hidden field', 'GEMEINDE': 'hidden field', 'SCALE': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Stadtgrenze_2.set('fieldLabels', {'fid': 'hidden field', 'GEMEINDE': 'hidden field', 'SCALE': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Weihnachtsmarkt_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_Maschseefest_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_Schtzenfest_5.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_Fuballstadion_6.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_Flohmarkt_7.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_Friedhof_8.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_Park_9.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_Einzelhandel_10.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_RestaurantBarClub_11.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', '�ffentlicher Raum': 'hidden field', });
lyr_PNV_12.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_StraenundWegesituation_13.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Bild': 'no label', 'Mehr dazu auf @catcallsofhannover': 'header label - always visible', 'Datum': 'header label - always visible', 'Y': 'hidden field', 'X': 'hidden field', });
lyr_StraenundWegesituation_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});