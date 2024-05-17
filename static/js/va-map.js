var map;
var timeline;
var edgeMode;
var channelConditionData;

var cctvData = {};
var mapNodeData = {};
var selectNode = {};
var placeData = {};
var trafficData = [];
var routeData = {};

var trafficDataQueue;
var trafficDataName;

var mapboxToken = 'pk.eyJ1Ijoia2hhcmlzbWExMSIsImEiOiJjazM1M3dra2cwZjM0M2NwZXhmdWEybHIyIn0.ALDvfHZ6cPKoika-aEL65A';

function drawMap() {
    // 지도 생성
    $('#map').empty();
    mapboxgl.accessToken = mapboxToken;
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kharisma11/ck9m5mk1b0ps11io8iets480d',
        center: [129.05, 35.16],
        zoom: 9.9
    });
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    // 지도 로드 시 호출되는 콜백
    map.on('load', function () {
        // 노드 아이콘을 사용하기 위해 지도에 추가함
        for (var i = 0; i <= 6; i++) {
            addImage(i);
        }
        addImage(52);

        for (var i = 10; i <= 13; i++) {
            addImage(i);
        }

        function addImage(i) {
            map.loadImage('static/img/node/' + i + '.png', function (error, image) {
                if (error)
                    throw error;
                map.addImage('node-' + i, image);
            });
        }

        /*
                // 장소 데이터(place_data.json) 요청
                $.ajax({
                    method: 'get',
                    url: 'static/place_data.json',
                    dataType: 'json',
                    cache: false,
                    async: false
                }).done(onPlaceDataResponse);*/

        // CCTV 데이터(cctv_data.json) 요청
        $.ajax({
            method: 'get',
            url: 'static/cctv_data_2.json',
            dataType: 'json',
            cache: false
        }).done(onCCTVDataResponse);
    });
    // 지도 내 이동 시 updateCCTVList(va-cctv-info.js) 호출
    // updateCCTVList는 CCTV info 패널의 Video sampling 섹션에 있는 CCTV 목록을 갱신하는 메소드임
    map.on('move', updateCCTVList);
    map.on('click', 'cctv', function (e) {
        // 지도에서 CCTV 아이콘 클릭 시 runCCTVVideo(va-cctv-info.js) 호출
        // runCCTVVideo는 Traffic CCTV Video 재생하는 메소드임
        var channel = e.features[0].properties.channel;
        runCCTVVideo(channel);

    });
    map.on('click', 'cctv2', function (e) {
        // 지도에서 CCTV 아이콘 클릭 시 runCCTVVideo(va-cctv-info.js) 호출
        // runCCTVVideo는 Traffic CCTV Video 재생하는 메소드임
        var channel = e.features[0].properties.channel;
        console.log(channel);
        if(channel==10){
            $('#cctv1').css({
                'border': '5px solid green'
            });
            $('#cctv2').css({
                'border': '0px'
            });
            $('#cctv3').css({
                'border': '0px'
            });
            $('#cctv4').css({
                'border': '0px'
            });
        }
        if(channel==11){
            $('#cctv1').css({
                'border': '0px'
            });
            $('#cctv2').css({
                'border': '5px solid green'
            });
            $('#cctv3').css({
                'border': '0px'
            });
            $('#cctv4').css({
                'border': '0px'
            });
        }
        if(channel==12){
            $('#cctv1').css({
                'border': '0px'
            });
            $('#cctv2').css({
                'border': '0px'
            });
            $('#cctv3').css({
                'border': '5px solid green'
            });
            $('#cctv4').css({
                'border': '0px'
            });
        }
        if(channel==13){
            $('#cctv1').css({
                'border': '0px'
            });
            $('#cctv2').css({
                'border': '0px'
            });
            $('#cctv3').css({
                'border': '0px'
            });
            $('#cctv4').css({
                'border': '5px solid green'
            });
        }

    });
    // CCTV 아이콘에 마우스 올릴 시 tooltip
    map.on('mouseenter', 'cctv', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var coordinates = e.features[0].geometry.coordinates.slice();
        var name = e.features[0].properties.name;
        var description = `${name}`;//`${name}`;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        popup
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });
    // CCTV 아이콘에서 마우스 떠날 때
    map.on('mouseleave', 'cctv', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    // 지도 아무 지점이나 누르면 콘솔에 좌표 출력함
    // 디버깅용
    map.on('click', function (e) {
        console.log(e.lngLat.toArray());
    });
}


function drawMap2() {
    // 지도 생성
    $('#map').empty();
    mapboxgl.accessToken = mapboxToken;
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kharisma11/ck9m5mk1b0ps11io8iets480d',
        center: [129.05, 35.16],
        zoom: 9.9
    });
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    // 지도 로드 시 호출되는 콜백
    map.on('load', function () {
        // 노드 아이콘을 사용하기 위해 지도에 추가함
        for (var i = 0; i <= 6; i++) {
            addImage(i);
        }
        for (var i = 10; i <= 13; i++) {
            addImage(i);
        }

        function addImage(i) {
            map.loadImage('static/img/node/' + i + '.png', function (error, image) {
                if (error)
                    throw error;
                map.addImage('node-' + i, image);
            });
        }
        // CCTV 데이터(cctv_data.json) 요청
        $.ajax({
            method: 'get',
            url: 'static/cctv_data_3.json',
            dataType: 'json',
            cache: false
        }).done(onCCTVDataResponse2);
    });
    // 지도 내 이동 시 updateCCTVList(va-cctv-info.js) 호출
    // updateCCTVList는 CCTV info 패널의 Video sampling 섹션에 있는 CCTV 목록을 갱신하는 메소드임
    map.on('move', updateCCTVList);
    map.on('click', 'cctv', function (e) {
        // 지도에서 CCTV 아이콘 클릭 시 runCCTVVideo(va-cctv-info.js) 호출
        // runCCTVVideo는 Traffic CCTV Video 재생하는 메소드임
        var channel = e.features[0].properties.channel;
        runCCTVVideo(channel);

    });
    map.on('click', 'cctv2', function (e) {
        // 지도에서 CCTV 아이콘 클릭 시 runCCTVVideo(va-cctv-info.js) 호출
        // runCCTVVideo는 Traffic CCTV Video 재생하는 메소드임
        var channel = e.features[0].properties.channel;
        console.log(channel);
        if(channel==10){
            $('#cctv1').css({
                'border': '5px solid green'
            });
            $('#cctv2').css({
                'border': '0px'
            });
            $('#cctv3').css({
                'border': '0px'
            });
            $('#cctv4').css({
                'border': '0px'
            });
        }
        if(channel==11){
            $('#cctv1').css({
                'border': '0px'
            });
            $('#cctv2').css({
                'border': '5px solid green'
            });
            $('#cctv3').css({
                'border': '0px'
            });
            $('#cctv4').css({
                'border': '0px'
            });
        }
        if(channel==12){
            $('#cctv1').css({
                'border': '0px'
            });
            $('#cctv2').css({
                'border': '0px'
            });
            $('#cctv3').css({
                'border': '5px solid green'
            });
            $('#cctv4').css({
                'border': '0px'
            });
        }
        if(channel==13){
            $('#cctv1').css({
                'border': '0px'
            });
            $('#cctv2').css({
                'border': '0px'
            });
            $('#cctv3').css({
                'border': '0px'
            });
            $('#cctv4').css({
                'border': '5px solid green'
            });
        }

    });
    // CCTV 아이콘에 마우스 올릴 시 tooltip
    map.on('mouseenter', 'cctv', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var coordinates = e.features[0].geometry.coordinates.slice();
        var name = e.features[0].properties.name;
        var description = `${name}`;//`${name}`;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        popup
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });
    // CCTV 아이콘에서 마우스 떠날 때
    map.on('mouseleave', 'cctv', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    // 지도 아무 지점이나 누르면 콘솔에 좌표 출력함
    // 디버깅용
    map.on('click', function (e) {
        console.log(e.lngLat.toArray());
    });
}

// 메인에서 요청한 CCTV 데이터 response되었을 때 호출됨
function onCCTVDataResponse(data) {
    cctvData = data;
    // CCTV 데이터를 지도에 반영하기 위해 geojson 형식으로 구성함
    var geojson = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };
    var geojson2 = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };
    var geojson3 = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };

    for (var id in cctvData) {
        var channel = cctvData[id];
        if (channel == undefined)
            continue;
        var direction = 0;
        if (channel.direction) {
            direction = channel.direction;
        }
        if (channel.channel == 0) {
            geojson2.data.features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [channel.x, channel.y]
                },
                properties: {
                    direction: direction,
                    channel: channel.channel,
                    name: channel.cctvStrtSecnNm
                }
            });
        } else if (channel.channel != 5 && channel.channel < 5 ) {
            geojson.data.features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [channel.x, channel.y]
                },
                properties: {
                    direction: direction,
                    channel: channel.channel,
                    name: channel.cctvStrtSecnNm
                }
            });
        } else if (channel.channel==5){
            geojson.data.features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [channel.x, channel.y]
                },
                properties: {
                    direction: 52,
                    channel: channel.channel,
                    name: channel.cctvStrtSecnNm
                }
            });
        }
        else{
            geojson3.data.features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [channel.x, channel.y]
                },
                properties: {
                    direction: direction,
                    channel: channel.channel,
                    name: channel.cctvStrtSecnNm
                }
            });
        }
    }

    var arrowGeoJSON = {
        type: 'FeatureCollection',
        features: []
    };

// 지도에 CCTV 데이터 반영
    map.addSource('range', geojson2);
    map.addLayer({
        id: 'range',
        type: 'symbol',
        source: 'range',
        layout: {
            'icon-image': 'node-{direction}',
            'icon-size': .2,
            'icon-allow-overlap': true
        }
    });

    for (var i = 1; i <= 4; i++) {
        arrowGeoJSON.features.push({
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: []
            }
        })
        arrowGeoJSON.features[i - 1].geometry.coordinates.push([cctvData[i].x, cctvData[i].y]);
        arrowGeoJSON.features[i - 1].geometry.coordinates.push([cctvData[i + 1].x, cctvData[i + 1].y]);
    }

    map.addSource('arrow', {
        type: 'geojson',
        data: arrowGeoJSON
    });

    // 화살표 스타일
    map.addLayer({
        id: 'arrow',
        type: 'line',
        source: 'arrow',
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': 'black', // 화살표 색상
            'line-width': 2, // 화살표 너비
            'line-opacity': 0.8 // 화살표 투명도
        },
        before: 'range'
    });

    map.addSource('cctv', geojson);
    map.addLayer({
        id: 'cctv',
        type: 'symbol',
        source: 'cctv',
        layout: {
            'icon-image': 'node-{direction}',
            'icon-size': .15,
            'icon-allow-overlap': true
        },
        before: 'arrow'
    });

    map.addSource('cctv2', geojson3);
    map.addLayer({
        id: 'cctv2',
        type: 'symbol',
        source: 'cctv2',
        layout: {
            'icon-image': 'node-{direction}',
            'icon-size': .15,
            'icon-allow-overlap': true
        },
        before: 'cctv'
    });

// Video sampling 섹션의 CCTV 목록 갱신
    updateCCTVList();
    mapNodeData = geojson;
    console.log(mapNodeData);
}
function onCCTVDataResponse2(data) {
    cctvData = data;
    // CCTV 데이터를 지도에 반영하기 위해 geojson 형식으로 구성함
    var geojson = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };
    var geojson2 = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };
    var geojson3 = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };

    for (var id in cctvData) {
        var channel = cctvData[id];
        if (channel == undefined)
            continue;
        var direction = 0;
        if (channel.direction) {
            direction = channel.direction;
        }
        if (channel.channel == 0) {
            geojson2.data.features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [channel.x, channel.y]
                },
                properties: {
                    direction: direction,
                    channel: channel.channel,
                    name: channel.cctvStrtSecnNm
                }
            });
        } else if (channel.channel <= 6 ) {
            geojson.data.features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [channel.x, channel.y]
                },
                properties: {
                    direction: direction,
                    channel: channel.channel,
                    name: channel.cctvStrtSecnNm
                }
            });
        }
        else{
            geojson3.data.features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [channel.x, channel.y]
                },
                properties: {
                    direction: direction,
                    channel: channel.channel,
                    name: channel.cctvStrtSecnNm
                }
            });
        }
    }

    var arrowGeoJSON = {
        type: 'FeatureCollection',
        features: []
    };

// 지도에 CCTV 데이터 반영
    map.addSource('range', geojson2);
    map.addLayer({
        id: 'range',
        type: 'symbol',
        source: 'range',
        layout: {
            'icon-image': 'node-{direction}',
            'icon-size': .2,
            'icon-allow-overlap': true
        }
    });

    for (var i = 1; i <= 5; i++) {
        arrowGeoJSON.features.push({
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: []
            }
        })
        arrowGeoJSON.features[i - 1].geometry.coordinates.push([cctvData[i].x, cctvData[i].y]);
        arrowGeoJSON.features[i - 1].geometry.coordinates.push([cctvData[i + 1].x, cctvData[i + 1].y]);
    }

    map.addSource('arrow', {
        type: 'geojson',
        data: arrowGeoJSON
    });

    // 화살표 스타일
    map.addLayer({
        id: 'arrow',
        type: 'line',
        source: 'arrow',
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': 'black', // 화살표 색상
            'line-width': 2, // 화살표 너비
            'line-opacity': 0.8 // 화살표 투명도
        },
        before: 'range'
    });

    map.addSource('cctv', geojson);
    map.addLayer({
        id: 'cctv',
        type: 'symbol',
        source: 'cctv',
        layout: {
            'icon-image': 'node-{direction}',
            'icon-size': .15,
            'icon-allow-overlap': true
        },
        before: 'arrow'
    });

    map.addSource('cctv2', geojson3);
    map.addLayer({
        id: 'cctv2',
        type: 'symbol',
        source: 'cctv2',
        layout: {
            'icon-image': 'node-{direction}',
            'icon-size': .15,
            'icon-allow-overlap': true
        },
        before: 'cctv'
    });

// Video sampling 섹션의 CCTV 목록 갱신
    updateCCTVList();
    mapNodeData = geojson;
    console.log(mapNodeData);
}


// 트래픽 데이터 요청하는 메소드
function loadTrafficData(filename) {
    trafficDataQueue = filename;
    $.ajax({
        method: 'get',
        url: `static/${filename}.json`,
        dataType: 'json',
        cache: false
    }).done(onTrafficDataResponse);
}


// 트래픽 데이터 response될 때
function onTrafficDataResponse(data) {
    trafficDataName = trafficDataQueue;
    trafficData = data;
    for (var traffic of trafficData) {
        routeData[traffic.from + '-' + traffic.to] = traffic;
    }

    // timeline
    var volume = [];
    for (var i = 0; i < 24; i++)
        volume[i] = 0;
    for (var traffic of trafficData) {
        for (var tpb of traffic.traffic) {
            volume[tpb.time] += tpb.volume;
        }
    }
    //drawTimeline(now, volume);

    // routes
    //drawRoutes();
}

function drawSpeedModeEdges() {
    loadTrafficData('traffic_data_f');
}
