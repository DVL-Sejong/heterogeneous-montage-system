var trafficConditionData;
var montageName;
function loadTrafficConditionData() {
  $.ajax({
    method: 'get',
    url: `static/traffic_condition.json`,
    dataType: 'json',
    cache: false
  }).done(function (data){
        trafficConditionData = data;
  });
}

function getTrafficConditionText(channel){
  $('#trafficConditionText').empty();
  $('#trafficConditionText').text(channelConditionData.direction);
  $('#trafficConditionPerText').text(channelConditionData.percent);
}

/*
function showDescription(){
  $('#showInfoButton').hide();
  $('#hideInfoButton').show();
  $('#moreDescription').show();
  showMoreMontageDescription();
}


function hideDescription(){
  $('#showInfoButton').show();
  $('#hideInfoButton').hide();
  $('#moreDescription').hide();
}
*/

$(document).ready(function() {
  //rankHeight = document.querySelector("#replaceRank").offsetHeight;
  $('#montageInfo').empty();
  $('#sns2').hide();
  montageName="유재석";
  //hideDescription();
  getMontageDescription();
  drawWordCloud2();

  getPersonVideo();
  drawMap();
  drawSimilarityBarChart();
  drawSimilarityPieChart();
  getPersonVideo2();
});

function runCCTVVideo2() {
  $.ajax({
    method: 'get',
    url: 'video/'+6411,
    cache: false
  }).done(function(html) {
    $('#cctv1')
      .removeClass('empty')
      .html(html);
    console.log('CCTV 재생: 6411');
    $('input[name=cctv_direction][value=ne]').prop('checked', true);
  });


  $.ajax({
    method: 'get',
    url: 'video/'+6332,
    cache: false
  }).done(function(html) {
    $('#cctv2')
      .removeClass('empty')
      .html(html);
    console.log('CCTV 재생: 6332');
    $('input[name=cctv_direction][value=ne]').prop('checked', true);
  });


  $.ajax({
    method: 'get',
    url: 'video/'+6331,
    cache: false
  }).done(function(html) {
    $('#cctv3')
      .removeClass('empty')
      .html(html);
    console.log('CCTV 재생: 6331');
    $('input[name=cctv_direction][value=ne]').prop('checked', true);
  });


  $.ajax({
    method: 'get',
    url: 'video/'+6270,
    cache: false
  }).done(function(html) {
    $('#cctv4')
      .removeClass('empty')
      .html(html);
    console.log('CCTV 재생: 6270');
    $('input[name=cctv_direction][value=ne]').prop('checked', true);
  });
}

function nextVideo(id){
  console.log("test",id);
  getNextPersonVideo(id);
  drawMap2();
  drawSimilarityPieChart2();
  drawSimilarityBarChart2();
  updatePersonPhoto();
  $('#sns1').hide();
  $('#sns2').show();
  $('#personName').text('Person 5');
  getPersonVideo3();
}

function updatePersonPhoto(){
  $('#personEye').attr('src', '../static/data/real/유재석2/눈.png');
  $('#personEyebrow').attr('src', '../static/data/real/유재석2/눈썹.png');
  $('#personMouse').attr('src', '../static/data/real/유재석2/입.png');
  $('#personHair').attr('src', '../static/data/real/유재석2/이마.png');
  $('#personNeck').attr('src', '../static/data/real/유재석2/목.png');
  $('#personNose').attr('src', '../static/data/real/유재석2/코.png');


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
                'border': '0px'
            });
}