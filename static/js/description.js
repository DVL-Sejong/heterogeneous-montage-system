var montageDescription;

function getMontageDescription() {
    $.ajax({
        method: 'get',
        url: `static/data/description/` + montageName + '.json',
        dataType: 'json',
        cache: false
    }).done(function (data) {
        montageDescription = data;
        showMoreMontageDescription();
        //$('#montageInfo').text(montageDescription.description.impression.description);
    });

}

function showMoreMontageDescription() {
    $('#faceInfo').empty();
    $('#faceInfo').html('<div class="header" style="text-align: center; margin-bottom: 5px; height: 20%; color: #FF8C00;">얼굴</div>'
        + '<div style="display: flex; justify-content: center; align-items: center; height: 80%; border: 2px solid #FF8C00; color: #FF8C00; border-radius: 0.5rem;">'
        + montageDescription.description.face.description + '</div>');
    $('#hairInfo').empty();
    $('#hairInfo').html('<div class="header" style="text-align: center; margin-bottom: 5px; height: 20%; color: #228B22;">머리</div>'
        + '<div style="display: flex; justify-content: center; align-items: center; height: 80%; border: 2px solid #228B22; color: #228B22; border-radius: 0.5rem;">'
        + montageDescription.description.hairstyle.description + '</div>');
    $('#eyebrowInfo').empty();
    $('#eyebrowInfo').html('<div class="header" style="text-align: center; margin-bottom: 5px; height: 20%; color: #663399;">눈썹</div>'
        + '<div style="display: flex; justify-content: center; align-items: center; height: 80%; border: 2px solid #663399; color: #663399; border-radius: 0.5rem;">'
        + montageDescription.description.eyebrows.description + '</div>');
    $('#eyeInfo').empty();
    $('#eyeInfo').html('<div class="header" style="text-align: center; margin-bottom: 5px; height: 20%; color: #008B8B;">눈</div>'
        + '<div style="display: flex; justify-content: center; align-items: center; height: 80%; border: 2px solid #008B8B; color: #008B8B; border-radius: 0.5rem;">'
        + montageDescription.description.eyes.description + '</div>');
    $('#noseInfo').empty();
    $('#noseInfo').html('<div class="header" style="text-align: center; margin-bottom: 5px; height: 20%; color: #DB7093;">코</div>'
        + '<div style="display: flex; justify-content: center; align-items: center; height: 80%; border: 2px solid #DB7093; border-radius: 0.5rem; color: #DB7093;">'
        + montageDescription.description.nose.description + '</div>');
    $('#mouthInfo').empty();
    $('#mouthInfo').html('<div class="header" style="text-align: center; margin-bottom: 5px; height: 20%; color: #B22222;">입</div>'
        + '<div style="display: flex; justify-content: center; align-items: center; height: 80%; border: 2px solid #B22222; border-radius: 0.5rem; color: #B22222;">'
        + montageDescription.description.mouth.description + '</div>');
    $('#neckInfo').empty();
    $('#neckInfo').html('<div class="header" style="text-align: center; margin-bottom: 5px; height: 20%; color: #4169E1;">목</div>'
        + '<div style="display: flex; justify-content: center; align-items: center; height: 80%; border: 2px solid #4169E1; border-radius: 0.5rem; color: #4169E1;">'
        + montageDescription.description.neck.description + '</div>');
    $('#wrinkleInfo').empty();
    $('#wrinkleInfo').html('<div class="header" style="text-align: center; margin-bottom: 5px; height: 20%; color: #B8860B;">피부</div>'
        + '<div style="display: flex; justify-content: center; align-items: center; height: 80%; border: 2px solid #B8860B; border-radius: 0.5rem; color: #B8860B;">'
        + montageDescription.description.wrinkle.description + '</div>');
    $('#featureInfo').empty();
    $('#featureInfo').html('<div class="header" style="text-align: center; margin-bottom: 5px; height: 20%; color: #696969;">특징</div>'
        + '<div style="display: flex; justify-content: center; align-items: center; height: 80%; border: 2px solid #696969; border-radius: 0.5rem; color: #696969;">'
        + montageDescription.description.feature.description + '</div>');


}

