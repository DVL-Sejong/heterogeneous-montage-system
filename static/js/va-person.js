function getPersonVideo() {
    $('#montageVideo').empty();
    var video = document.createElement('video');
    video.src = "static/data/video/" + montageName + ".mp4";
    video.controls = true;
    video.style.width = '100%';
    video.style.height = '100%';
    document.getElementById('montageVideo').appendChild(video);
}

function getPersonVideo2() {
    $('#cctv1').empty();
    var video1 = document.createElement('video');
    video1.src = "static/data/video/next1.mp4";
    video1.controls = true;
    video1.style.width = '100%';
    video1.style.height = '100%';
    document.getElementById('cctv1').appendChild(video1);

    $('#cctv2').empty();
    var video2 = document.createElement('video');
    video2.src = "static/data/video/next2.mp4";
    video2.controls = true;
    video2.style.width = '100%';
    video2.style.height = '100%';
    document.getElementById('cctv2').appendChild(video2);

    $('#cctv3').empty();
    var video3 = document.createElement('video');
    video3.src = "static/data/video/next3.mp4";
    video3.controls = true;
    video3.style.width = '100%';
    video3.style.height = '100%';
    document.getElementById('cctv3').appendChild(video3);

    $('#cctv4').empty();
    var video4 = document.createElement('video');
    video4.src = "static/data/video/next4.mp4";
    video4.controls = true;
    video4.style.width = '100%';
    video4.style.height = '100%';
    document.getElementById('cctv4').appendChild(video4);
}

function getPersonVideo3() {
    $('#cctv1').empty();
    var video1 = document.createElement('video');
    video1.src = "static/data/video/next5.mp4";
    video1.controls = true;
    video1.style.width = '100%';
    video1.style.height = '100%';
    document.getElementById('cctv1').appendChild(video1);

    $('#cctv2').empty();
    var video2 = document.createElement('video');
    video2.src = "static/data/video/next6.mp4";
    video2.controls = true;
    video2.style.width = '100%';
    video2.style.height = '100%';
    document.getElementById('cctv2').appendChild(video2);

    $('#cctv3').empty();
    var video3 = document.createElement('video');
    video3.src = "static/data/video/next7.mp4";
    video3.controls = true;
    video3.style.width = '100%';
    video3.style.height = '100%';
    document.getElementById('cctv3').appendChild(video3);

    $('#cctv4').empty();
    var video4 = document.createElement('video');
    video4.src = "static/data/video/next8.mp4";
    video4.controls = true;
    video4.style.width = '100%';
    video4.style.height = '100%';
    document.getElementById('cctv4').appendChild(video4);
}

function getNextPersonVideo(id) {
    $('#montageVideo').empty();
    var video = document.createElement('video');
    if(id=='cctv1'){
    video.src = "static/data/video/next1.mp4";
    }
    if(id=='cctv2'){
    video.src = "static/data/video/next2.mp4";
    }
    if(id=='cctv3'){
    video.src = "static/data/video/유재석2.mp4";
    }
    if(id=='cctv4'){
    video.src = "static/data/video/next4.mp4";
    }
    video.controls = true;
    video.style.width = '100%';
    video.style.height = '100%';
    document.getElementById('montageVideo').appendChild(video);
}