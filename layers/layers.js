var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASI_AR_DESAKEL_1 = new ol.format.GeoJSON();
var features_ADMINISTRASI_AR_DESAKEL_1 = format_ADMINISTRASI_AR_DESAKEL_1.readFeatures(json_ADMINISTRASI_AR_DESAKEL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_AR_DESAKEL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_AR_DESAKEL_1.addFeatures(features_ADMINISTRASI_AR_DESAKEL_1);
var lyr_ADMINISTRASI_AR_DESAKEL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_AR_DESAKEL_1, 
                style: style_ADMINISTRASI_AR_DESAKEL_1,
                popuplayertitle: 'ADMINISTRASI_AR_DESAKEL',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_AR_DESAKEL_1.png" /> ADMINISTRASI_AR_DESAKEL'
            });
var format_LP2BDILUAR01082025_2 = new ol.format.GeoJSON();
var features_LP2BDILUAR01082025_2 = format_LP2BDILUAR01082025_2.readFeatures(json_LP2BDILUAR01082025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LP2BDILUAR01082025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LP2BDILUAR01082025_2.addFeatures(features_LP2BDILUAR01082025_2);
var lyr_LP2BDILUAR01082025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LP2BDILUAR01082025_2, 
                style: style_LP2BDILUAR01082025_2,
                popuplayertitle: 'LP2B DILUAR 01082025',
                interactive: true,
                title: '<img src="styles/legend/LP2BDILUAR01082025_2.png" /> LP2B DILUAR 01082025'
            });
var format_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3 = new ol.format.GeoJSON();
var features_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3 = format_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3.readFeatures(json_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3.addFeatures(features_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3);
var lyr_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3, 
                style: style_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3,
                popuplayertitle: 'Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021_-_2041',
                interactive: true,
                title: '<img src="styles/legend/Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3.png" /> Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021_-_2041'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASI_AR_DESAKEL_1.setVisible(true);lyr_LP2BDILUAR01082025_2.setVisible(true);lyr_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASI_AR_DESAKEL_1,lyr_LP2BDILUAR01082025_2,lyr_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3];
lyr_ADMINISTRASI_AR_DESAKEL_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LP2BDILUAR01082025_2.set('fieldAliases', {'DESA': 'DESA', 'TUTUPAN': 'TUTUPAN', 'KECAMATAN': 'KECAMATAN', 'NAMA_WP': 'NAMA_WP', 'D_NOP': 'D_NOP', 'KP2B_TRBGN': 'KP2B_TRBGN', 'LP2B': 'LP2B', 'DUSUN': 'DUSUN', 'POKTAN': 'POKTAN', 'KP2B': 'KP2B', 'BUKANLBS': 'BUKANLBS', 'LUAS FIX': 'LUAS FIX', });
lyr_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'KODKWS': 'KODKWS', 'JNSRPR': 'JNSRPR', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'KKOP_1': 'KKOP_1', 'KP2B_2': 'KP2B_2', 'KRB_03': 'KRB_03', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ADMINISTRASI_AR_DESAKEL_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LP2BDILUAR01082025_2.set('fieldImages', {'DESA': '', 'TUTUPAN': '', 'KECAMATAN': '', 'NAMA_WP': '', 'D_NOP': '', 'KP2B_TRBGN': '', 'LP2B': '', 'DUSUN': '', 'POKTAN': '', 'KP2B': '', 'BUKANLBS': '', 'LUAS FIX': '', });
lyr_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'KODKWS': 'TextEdit', 'JNSRPR': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'KKOP_1': 'TextEdit', 'KP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ADMINISTRASI_AR_DESAKEL_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LP2BDILUAR01082025_2.set('fieldLabels', {'DESA': 'no label', 'TUTUPAN': 'no label', 'KECAMATAN': 'no label', 'NAMA_WP': 'no label', 'D_NOP': 'no label', 'KP2B_TRBGN': 'no label', 'LP2B': 'no label', 'DUSUN': 'no label', 'POKTAN': 'no label', 'KP2B': 'no label', 'BUKANLBS': 'no label', 'LUAS FIX': 'no label', });
lyr_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'KODKWS': 'no label', 'JNSRPR': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'KKOP_1': 'no label', 'KP2B_2': 'no label', 'KRB_03': 'no label', 'CAGBUD': 'no label', 'RESAIR': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Rencana_KP2B_Pola_Ruang_RTRW_Kabupaten_Jombang_Tahun_2021__2041_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});