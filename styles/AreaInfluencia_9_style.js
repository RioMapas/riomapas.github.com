var size = 0;
var placement = 'point';

    var fill_AreaInfluencia_9 = new ol.style.Fill();
var style_AreaInfluencia_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Sans-Serif\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("AREA_INFL") !== null) {
        labelText = String(feature.get("AREA_INFL"));
    }
    
        function rules_AreaInfluencia_9(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (AreaInfluencia_9rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}),fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    }
                    else if (AreaInfluencia_9rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        
        fill: fill_AreaInfluencia_9,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_AreaInfluencia_9(feature, value);
        ;

    return style;
};

    fill_AreaInfluencia_9.setColor(stripe(0.8000000000000003, 14.200000000000006, 330.0, '#f037e5'));