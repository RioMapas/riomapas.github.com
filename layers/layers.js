var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_AreaProyecto_1 = new ol.format.GeoJSON();
var features_AreaProyecto_1 = format_AreaProyecto_1.readFeatures(json_AreaProyecto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaProyecto_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AreaProyecto_1.addFeatures(features_AreaProyecto_1);var lyr_AreaProyecto_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaProyecto_1, 
                style: style_AreaProyecto_1,
                title: '<img src="styles/legend/AreaProyecto_1.png" /> AreaProyecto'
            });var format_UsoActualSuelo_2 = new ol.format.GeoJSON();
var features_UsoActualSuelo_2 = format_UsoActualSuelo_2.readFeatures(json_UsoActualSuelo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsoActualSuelo_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UsoActualSuelo_2.addFeatures(features_UsoActualSuelo_2);var lyr_UsoActualSuelo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UsoActualSuelo_2, 
                style: style_UsoActualSuelo_2,
                title: '<img src="styles/legend/UsoActualSuelo_2.png" /> UsoActualSuelo'
            });var format_UnidadHidrogeologica_3 = new ol.format.GeoJSON();
var features_UnidadHidrogeologica_3 = format_UnidadHidrogeologica_3.readFeatures(json_UnidadHidrogeologica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadHidrogeologica_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UnidadHidrogeologica_3.addFeatures(features_UnidadHidrogeologica_3);var lyr_UnidadHidrogeologica_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnidadHidrogeologica_3, 
                style: style_UnidadHidrogeologica_3,
    title: 'UnidadHidrogeologica<br />\
    <img src="styles/legend/UnidadHidrogeologica_3_0.png" /> 1<br />\
    <img src="styles/legend/UnidadHidrogeologica_3_1.png" /> 2<br />'
        });var format_UnidadGeomorfologicaIGAC_4 = new ol.format.GeoJSON();
var features_UnidadGeomorfologicaIGAC_4 = format_UnidadGeomorfologicaIGAC_4.readFeatures(json_UnidadGeomorfologicaIGAC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadGeomorfologicaIGAC_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UnidadGeomorfologicaIGAC_4.addFeatures(features_UnidadGeomorfologicaIGAC_4);var lyr_UnidadGeomorfologicaIGAC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnidadGeomorfologicaIGAC_4, 
                style: style_UnidadGeomorfologicaIGAC_4,
    title: 'UnidadGeomorfologicaIGAC<br />\
    <img src="styles/legend/UnidadGeomorfologicaIGAC_4_0.png" /> LeEsR<br />\
    <img src="styles/legend/UnidadGeomorfologicaIGAC_4_1.png" /> RadVaV<br />'
        });var format_UnidadGeologica_5 = new ol.format.GeoJSON();
var features_UnidadGeologica_5 = format_UnidadGeologica_5.readFeatures(json_UnidadGeologica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadGeologica_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UnidadGeologica_5.addFeatures(features_UnidadGeologica_5);var lyr_UnidadGeologica_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnidadGeologica_5, 
                style: style_UnidadGeologica_5,
    title: 'UnidadGeologica<br />\
    <img src="styles/legend/UnidadGeologica_5_0.png" /> Depositos Aluviales<br />\
    <img src="styles/legend/UnidadGeologica_5_1.png" /> Depositos Aluviales Recientes<br />\
    <img src="styles/legend/UnidadGeologica_5_2.png" /> Formacion Mongui<br />'
        });var format_Suelo_6 = new ol.format.GeoJSON();
var features_Suelo_6 = format_Suelo_6.readFeatures(json_Suelo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suelo_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Suelo_6.addFeatures(features_Suelo_6);var lyr_Suelo_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suelo_6, 
                style: style_Suelo_6,
    title: 'Suelo<br />\
    <img src="styles/legend/Suelo_6_0.png" /> 6c-1<br />\
    <img src="styles/legend/Suelo_6_1.png" /> 7s-1<br />'
        });var format_Pendiente_7 = new ol.format.GeoJSON();
var features_Pendiente_7 = format_Pendiente_7.readFeatures(json_Pendiente_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendiente_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pendiente_7.addFeatures(features_Pendiente_7);var lyr_Pendiente_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pendiente_7, 
                style: style_Pendiente_7,
    title: 'Pendiente<br />\
    <img src="styles/legend/Pendiente_7_0.png" /> 1-3%<br />\
    <img src="styles/legend/Pendiente_7_1.png" /> 3-7%<br />\
    <img src="styles/legend/Pendiente_7_2.png" /> 7-12%<br />'
        });var format_Biomas_8 = new ol.format.GeoJSON();
var features_Biomas_8 = format_Biomas_8.readFeatures(json_Biomas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biomas_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Biomas_8.addFeatures(features_Biomas_8);var lyr_Biomas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Biomas_8, 
                style: style_Biomas_8,
    title: 'Biomas<br />\
    <img src="styles/legend/Biomas_8_0.png" /> Helobiomas del Magdalena y Caribe<br />\
    <img src="styles/legend/Biomas_8_1.png" /> Zonobioma seco tropical del Caribe<br />'
        });var format_AreaInfluencia_9 = new ol.format.GeoJSON();
var features_AreaInfluencia_9 = format_AreaInfluencia_9.readFeatures(json_AreaInfluencia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaInfluencia_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AreaInfluencia_9.addFeatures(features_AreaInfluencia_9);var lyr_AreaInfluencia_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaInfluencia_9, 
                style: style_AreaInfluencia_9,
                title: 'AreaInfluencia'
            });var format_AreaConservacionAmbiental_10 = new ol.format.GeoJSON();
var features_AreaConservacionAmbiental_10 = format_AreaConservacionAmbiental_10.readFeatures(json_AreaConservacionAmbiental_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaConservacionAmbiental_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AreaConservacionAmbiental_10.addFeatures(features_AreaConservacionAmbiental_10);var lyr_AreaConservacionAmbiental_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaConservacionAmbiental_10, 
                style: style_AreaConservacionAmbiental_10,
                title: '<img src="styles/legend/AreaConservacionAmbiental_10.png" /> AreaConservacionAmbiental'
            });var format_PuntoMuestreoFlora_11 = new ol.format.GeoJSON();
var features_PuntoMuestreoFlora_11 = format_PuntoMuestreoFlora_11.readFeatures(json_PuntoMuestreoFlora_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntoMuestreoFlora_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PuntoMuestreoFlora_11.addFeatures(features_PuntoMuestreoFlora_11);cluster_PuntoMuestreoFlora_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PuntoMuestreoFlora_11
});var lyr_PuntoMuestreoFlora_11 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PuntoMuestreoFlora_11, 
                style: style_PuntoMuestreoFlora_11,
                title: '<img src="styles/legend/PuntoMuestreoFlora_11.png" /> PuntoMuestreoFlora'
            });

lyr_AreaProyecto_1.setVisible(true);lyr_UsoActualSuelo_2.setVisible(true);lyr_UnidadHidrogeologica_3.setVisible(false);lyr_UnidadGeomorfologicaIGAC_4.setVisible(false);lyr_UnidadGeologica_5.setVisible(false);lyr_Suelo_6.setVisible(false);lyr_Pendiente_7.setVisible(false);lyr_Biomas_8.setVisible(false);lyr_AreaInfluencia_9.setVisible(false);lyr_AreaConservacionAmbiental_10.setVisible(false);lyr_PuntoMuestreoFlora_11.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_AreaProyecto_1,lyr_UsoActualSuelo_2,lyr_UnidadHidrogeologica_3,lyr_UnidadGeomorfologicaIGAC_4,lyr_UnidadGeologica_5,lyr_Suelo_6,lyr_Pendiente_7,lyr_Biomas_8,lyr_AreaInfluencia_9,lyr_AreaConservacionAmbiental_10,lyr_PuntoMuestreoFlora_11];
lyr_AreaProyecto_1.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'SECTOR': 'SECTOR', 'OPERADOR': 'OPERADOR', 'PROYECTO': 'PROYECTO', 'NUM_ACT_AD': 'NUM_ACT_AD', 'FEC_ACT_AD': 'FEC_ACT_AD', 'ART_ACT_AD': 'ART_ACT_AD', 'CONTRATO': 'CONTRATO', 'DESCRIP': 'DESCRIP', 'NOMENCLAT': 'NOMENCLAT', 'OBSERV': 'OBSERV', 'AREA_HA': 'AREA_HA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'RuleID': 'RuleID', });
lyr_UsoActualSuelo_2.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'GRUPO_USO': 'GRUPO_USO', 'USO_ACT': 'USO_ACT', 'NOMENCLAT': 'NOMENCLAT', 'OBSERV': 'OBSERV', 'AREA_HA': 'AREA_HA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'RuleID': 'RuleID', });
lyr_UnidadHidrogeologica_3.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'NOMBRE': 'NOMBRE', 'NOMENCLAT': 'NOMENCLAT', 'POROSIDAD': 'POROSIDAD', 'EST_POROS': 'EST_POROS', 'COEFICIENT': 'COEFICIENT', 'COND_HIDR': 'COND_HIDR', 'TRANSMIS': 'TRANSMIS', 'CAR_HID_Q': 'CAR_HID_Q', 'ESPESOR_M': 'ESPESOR_M', 'AREA_HA': 'AREA_HA', 'CAPA_ESP': 'CAPA_ESP', 'LITOL': 'LITOL', 'OBSERV': 'OBSERV', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'RuleID': 'RuleID', });
lyr_UnidadGeomorfologicaIGAC_4.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'GEOESTRUC': 'GEOESTRUC', 'AMB_MORFOG': 'AMB_MORFOG', 'PAISAJE_GM': 'PAISAJE_GM', 'T_RELIEVE': 'T_RELIEVE', 'MAT_PARE_L': 'MAT_PARE_L', 'OBS_MAT_L': 'OBS_MAT_L', 'MAT_PARE_F': 'MAT_PARE_F', 'FORMA_TERR': 'FORMA_TERR', 'NOMB_UGEOM': 'NOMB_UGEOM', 'NOMENCLAT': 'NOMENCLAT', 'OBSERV': 'OBSERV', 'AREA_HA': 'AREA_HA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RuleID': 'RuleID', });
lyr_UnidadGeologica_5.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'EON': 'EON', 'ERA': 'ERA', 'PERIODO': 'PERIODO', 'EPOCA': 'EPOCA', 'EDAD': 'EDAD', 'NOMBRE': 'NOMBRE', 'NOMENCLAT': 'NOMENCLAT', 'AREA_HA': 'AREA_HA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'RuleID': 'RuleID', });
lyr_Suelo_6.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'N_UGM_IGAC': 'N_UGM_IGAC', 'N_UGM_SGC': 'N_UGM_SGC', 'SIMB_U_CAR': 'SIMB_U_CAR', 'TIPO_UN_CA': 'TIPO_UN_CA', 'PISO_TERM': 'PISO_TERM', 'PROV_HUM': 'PROV_HUM', 'RES_TAX_UC': 'RES_TAX_UC', 'CARACT_SUE': 'CARACT_SUE', 'CARACT_TR': 'CARACT_TR', 'CARACT_PGA': 'CARACT_PGA', 'CL_HIDROL': 'CL_HIDROL', 'CLASE': 'CLASE', 'OBSERV': 'OBSERV', 'AREA_HA': 'AREA_HA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RuleID': 'RuleID', });
lyr_Pendiente_7.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'PENDIENTE': 'PENDIENTE', 'NOMENCLAT': 'NOMENCLAT', 'AREA_HA': 'AREA_HA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'RuleID': 'RuleID', });
lyr_Biomas_8.set('fieldAliases', {'IDCLIMA': 'IDCLIMA', 'CLIMA': 'CLIMA', 'IDGEO': 'IDGEO', 'GEO': 'GEO', 'UNIDAD_GEO': 'UNIDAD_GEO', 'IDFUENTEGE': 'IDFUENTEGE', 'IDGBIOMA': 'IDGBIOMA', 'IDBIOMA': 'IDBIOMA', 'BIOMA': 'BIOMA', 'COB': 'COB', 'COBERTURA': 'COBERTURA', 'IDECO': 'IDECO', 'ECOSISTEMA': 'ECOSISTEMA', 'FUENTE': 'FUENTE', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RuleID': 'RuleID', });
lyr_AreaInfluencia_9.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'OPERADOR': 'OPERADOR', 'PROYECTO': 'PROYECTO', 'AREA_INFL': 'AREA_INFL', 'COMPONENTE': 'COMPONENTE', 'GRUPO_COMP': 'GRUPO_COMP', 'OBSERV': 'OBSERV', 'AREA_HA': 'AREA_HA', 'ID_AREAINF': 'ID_AREAINF', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'RuleID': 'RuleID', });
lyr_AreaConservacionAmbiental_10.set('fieldAliases', {'Id': 'Id', 'OPERADOR': 'OPERADOR', 'PROYECTO': 'PROYECTO', 'OBJETIVO': 'OBJETIVO', 'Area_Ha': 'Area_Ha', });
lyr_PuntoMuestreoFlora_11.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'OPERADOR': 'OPERADOR', 'PROYECTO': 'PROYECTO', 'NUM_ACT_AD': 'NUM_ACT_AD', 'FEC_ACT_AD': 'FEC_ACT_AD', 'ART_ACT_AD': 'ART_ACT_AD', 'VEREDA': 'VEREDA', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'NOMBRE': 'NOMBRE', 'ID_MUEST': 'ID_MUEST', 'N_COBERT': 'N_COBERT', 'NOMENCLAT': 'NOMENCLAT', 'T_MUEST': 'T_MUEST', 'AREA_UM_ha': 'AREA_UM_ha', 'LONGI_TR_m': 'LONGI_TR_m', 'CUERPO_AGU': 'CUERPO_AGU', 'PROFUND': 'PROFUND', 'DESCRIP': 'DESCRIP', 'FEC_MUEST': 'FEC_MUEST', 'ESTACIONAL': 'ESTACIONAL', 'LOCALIDAD': 'LOCALIDAD', 'COTA': 'COTA', 'COOR_ESTE': 'COOR_ESTE', 'COOR_NORTE': 'COOR_NORTE', 'RuleID': 'RuleID', });
lyr_AreaProyecto_1.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'SECTOR': 'TextEdit', 'OPERADOR': 'TextEdit', 'PROYECTO': 'TextEdit', 'NUM_ACT_AD': 'TextEdit', 'FEC_ACT_AD': 'DateTime', 'ART_ACT_AD': 'TextEdit', 'CONTRATO': 'TextEdit', 'DESCRIP': 'TextEdit', 'NOMENCLAT': 'TextEdit', 'OBSERV': 'TextEdit', 'AREA_HA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'RuleID': 'TextEdit', });
lyr_UsoActualSuelo_2.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'GRUPO_USO': 'TextEdit', 'USO_ACT': 'TextEdit', 'NOMENCLAT': 'TextEdit', 'OBSERV': 'TextEdit', 'AREA_HA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'RuleID': 'TextEdit', });
lyr_UnidadHidrogeologica_3.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'NOMBRE': 'TextEdit', 'NOMENCLAT': 'TextEdit', 'POROSIDAD': 'TextEdit', 'EST_POROS': 'TextEdit', 'COEFICIENT': 'TextEdit', 'COND_HIDR': 'TextEdit', 'TRANSMIS': 'TextEdit', 'CAR_HID_Q': 'TextEdit', 'ESPESOR_M': 'TextEdit', 'AREA_HA': 'TextEdit', 'CAPA_ESP': 'TextEdit', 'LITOL': 'TextEdit', 'OBSERV': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'RuleID': 'TextEdit', });
lyr_UnidadGeomorfologicaIGAC_4.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'GEOESTRUC': 'TextEdit', 'AMB_MORFOG': 'TextEdit', 'PAISAJE_GM': 'TextEdit', 'T_RELIEVE': 'TextEdit', 'MAT_PARE_L': 'TextEdit', 'OBS_MAT_L': 'TextEdit', 'MAT_PARE_F': 'TextEdit', 'FORMA_TERR': 'TextEdit', 'NOMB_UGEOM': 'TextEdit', 'NOMENCLAT': 'TextEdit', 'OBSERV': 'TextEdit', 'AREA_HA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RuleID': 'TextEdit', });
lyr_UnidadGeologica_5.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'EON': 'TextEdit', 'ERA': 'TextEdit', 'PERIODO': 'TextEdit', 'EPOCA': 'TextEdit', 'EDAD': 'TextEdit', 'NOMBRE': 'TextEdit', 'NOMENCLAT': 'TextEdit', 'AREA_HA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'RuleID': 'TextEdit', });
lyr_Suelo_6.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'N_UGM_IGAC': 'TextEdit', 'N_UGM_SGC': 'TextEdit', 'SIMB_U_CAR': 'TextEdit', 'TIPO_UN_CA': 'TextEdit', 'PISO_TERM': 'TextEdit', 'PROV_HUM': 'TextEdit', 'RES_TAX_UC': 'TextEdit', 'CARACT_SUE': 'TextEdit', 'CARACT_TR': 'TextEdit', 'CARACT_PGA': 'TextEdit', 'CL_HIDROL': 'TextEdit', 'CLASE': 'TextEdit', 'OBSERV': 'TextEdit', 'AREA_HA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RuleID': 'TextEdit', });
lyr_Pendiente_7.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'PENDIENTE': 'TextEdit', 'NOMENCLAT': 'TextEdit', 'AREA_HA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'RuleID': 'TextEdit', });
lyr_Biomas_8.set('fieldImages', {'IDCLIMA': 'TextEdit', 'CLIMA': 'TextEdit', 'IDGEO': 'TextEdit', 'GEO': 'TextEdit', 'UNIDAD_GEO': 'TextEdit', 'IDFUENTEGE': 'TextEdit', 'IDGBIOMA': 'TextEdit', 'IDBIOMA': 'TextEdit', 'BIOMA': 'TextEdit', 'COB': 'TextEdit', 'COBERTURA': 'TextEdit', 'IDECO': 'TextEdit', 'ECOSISTEMA': 'TextEdit', 'FUENTE': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RuleID': 'TextEdit', });
lyr_AreaInfluencia_9.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'OPERADOR': 'TextEdit', 'PROYECTO': 'TextEdit', 'AREA_INFL': 'TextEdit', 'COMPONENTE': 'TextEdit', 'GRUPO_COMP': 'TextEdit', 'OBSERV': 'TextEdit', 'AREA_HA': 'TextEdit', 'ID_AREAINF': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'RuleID': 'TextEdit', });
lyr_AreaConservacionAmbiental_10.set('fieldImages', {'Id': 'TextEdit', 'OPERADOR': 'TextEdit', 'PROYECTO': 'TextEdit', 'OBJETIVO': 'TextEdit', 'Area_Ha': 'TextEdit', });
lyr_PuntoMuestreoFlora_11.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'OPERADOR': 'TextEdit', 'PROYECTO': 'TextEdit', 'NUM_ACT_AD': 'TextEdit', 'FEC_ACT_AD': 'DateTime', 'ART_ACT_AD': 'TextEdit', 'VEREDA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'NOMBRE': 'TextEdit', 'ID_MUEST': 'TextEdit', 'N_COBERT': 'TextEdit', 'NOMENCLAT': 'TextEdit', 'T_MUEST': 'TextEdit', 'AREA_UM_ha': 'TextEdit', 'LONGI_TR_m': 'TextEdit', 'CUERPO_AGU': 'TextEdit', 'PROFUND': 'TextEdit', 'DESCRIP': 'TextEdit', 'FEC_MUEST': 'DateTime', 'ESTACIONAL': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'COTA': 'TextEdit', 'COOR_ESTE': 'TextEdit', 'COOR_NORTE': 'TextEdit', 'RuleID': 'TextEdit', });
lyr_AreaProyecto_1.set('fieldLabels', {'EXPEDIENTE': 'no label', 'SECTOR': 'no label', 'OPERADOR': 'no label', 'PROYECTO': 'no label', 'NUM_ACT_AD': 'no label', 'FEC_ACT_AD': 'no label', 'ART_ACT_AD': 'no label', 'CONTRATO': 'no label', 'DESCRIP': 'no label', 'NOMENCLAT': 'no label', 'OBSERV': 'no label', 'AREA_HA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'RuleID': 'no label', });
lyr_UsoActualSuelo_2.set('fieldLabels', {'EXPEDIENTE': 'no label', 'GRUPO_USO': 'no label', 'USO_ACT': 'no label', 'NOMENCLAT': 'no label', 'OBSERV': 'no label', 'AREA_HA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'RuleID': 'no label', });
lyr_UnidadHidrogeologica_3.set('fieldLabels', {'EXPEDIENTE': 'no label', 'NOMBRE': 'no label', 'NOMENCLAT': 'no label', 'POROSIDAD': 'no label', 'EST_POROS': 'no label', 'COEFICIENT': 'no label', 'COND_HIDR': 'no label', 'TRANSMIS': 'no label', 'CAR_HID_Q': 'no label', 'ESPESOR_M': 'no label', 'AREA_HA': 'no label', 'CAPA_ESP': 'no label', 'LITOL': 'no label', 'OBSERV': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'RuleID': 'no label', });
lyr_UnidadGeomorfologicaIGAC_4.set('fieldLabels', {'EXPEDIENTE': 'no label', 'GEOESTRUC': 'no label', 'AMB_MORFOG': 'no label', 'PAISAJE_GM': 'no label', 'T_RELIEVE': 'no label', 'MAT_PARE_L': 'no label', 'OBS_MAT_L': 'no label', 'MAT_PARE_F': 'no label', 'FORMA_TERR': 'no label', 'NOMB_UGEOM': 'no label', 'NOMENCLAT': 'no label', 'OBSERV': 'no label', 'AREA_HA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'RuleID': 'no label', });
lyr_UnidadGeologica_5.set('fieldLabels', {'EXPEDIENTE': 'no label', 'EON': 'no label', 'ERA': 'no label', 'PERIODO': 'no label', 'EPOCA': 'no label', 'EDAD': 'no label', 'NOMBRE': 'no label', 'NOMENCLAT': 'no label', 'AREA_HA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'RuleID': 'no label', });
lyr_Suelo_6.set('fieldLabels', {'EXPEDIENTE': 'no label', 'N_UGM_IGAC': 'no label', 'N_UGM_SGC': 'no label', 'SIMB_U_CAR': 'no label', 'TIPO_UN_CA': 'no label', 'PISO_TERM': 'no label', 'PROV_HUM': 'no label', 'RES_TAX_UC': 'no label', 'CARACT_SUE': 'no label', 'CARACT_TR': 'no label', 'CARACT_PGA': 'no label', 'CL_HIDROL': 'no label', 'CLASE': 'no label', 'OBSERV': 'no label', 'AREA_HA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'RuleID': 'no label', });
lyr_Pendiente_7.set('fieldLabels', {'EXPEDIENTE': 'no label', 'PENDIENTE': 'no label', 'NOMENCLAT': 'no label', 'AREA_HA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'RuleID': 'no label', });
lyr_Biomas_8.set('fieldLabels', {'IDCLIMA': 'no label', 'CLIMA': 'no label', 'IDGEO': 'no label', 'GEO': 'no label', 'UNIDAD_GEO': 'no label', 'IDFUENTEGE': 'no label', 'IDGBIOMA': 'no label', 'IDBIOMA': 'no label', 'BIOMA': 'no label', 'COB': 'no label', 'COBERTURA': 'no label', 'IDECO': 'no label', 'ECOSISTEMA': 'no label', 'FUENTE': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'RuleID': 'no label', });
lyr_AreaInfluencia_9.set('fieldLabels', {'EXPEDIENTE': 'no label', 'OPERADOR': 'no label', 'PROYECTO': 'no label', 'AREA_INFL': 'no label', 'COMPONENTE': 'no label', 'GRUPO_COMP': 'no label', 'OBSERV': 'no label', 'AREA_HA': 'no label', 'ID_AREAINF': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'RuleID': 'no label', });
lyr_AreaConservacionAmbiental_10.set('fieldLabels', {'Id': 'no label', 'OPERADOR': 'no label', 'PROYECTO': 'no label', 'OBJETIVO': 'no label', 'Area_Ha': 'no label', });
lyr_PuntoMuestreoFlora_11.set('fieldLabels', {'EXPEDIENTE': 'no label', 'OPERADOR': 'no label', 'PROYECTO': 'no label', 'NUM_ACT_AD': 'no label', 'FEC_ACT_AD': 'no label', 'ART_ACT_AD': 'no label', 'VEREDA': 'no label', 'MUNICIPIO': 'no label', 'DEPTO': 'no label', 'NOMBRE': 'no label', 'ID_MUEST': 'header label', 'N_COBERT': 'no label', 'NOMENCLAT': 'no label', 'T_MUEST': 'no label', 'AREA_UM_ha': 'no label', 'LONGI_TR_m': 'no label', 'CUERPO_AGU': 'no label', 'PROFUND': 'no label', 'DESCRIP': 'no label', 'FEC_MUEST': 'no label', 'ESTACIONAL': 'no label', 'LOCALIDAD': 'no label', 'COTA': 'no label', 'COOR_ESTE': 'no label', 'COOR_NORTE': 'no label', 'RuleID': 'no label', });
lyr_PuntoMuestreoFlora_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});