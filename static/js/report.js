var imageUrls = [
    'static/data/report/유재석/1.jpg',
    'static/data/report/유재석/2.jpg',
    'static/data/report/유재석/4.jpg',
    'static/data/real/유재석.png'
];

var selectedImageUrl = null; // Track selected image URL

function getReport() {
    var container = document.getElementById('samePersonimages');
    container.style.textAlign = 'center';
    imageUrls.forEach(function (url) {
        var imageContainer = document.createElement('div');
        imageContainer.style.display = 'inline-block';
        imageContainer.style.margin = '10px';
        imageContainer.style.position = 'relative';

        var img = document.createElement('img');
        img.src = url;
        img.style.width = '60px';
        img.style.height = 'auto';
        img.style.cursor = 'pointer';
        img.onclick = function () {
            imageClicked(url);
        };

        imageContainer.appendChild(img);
        container.appendChild(imageContainer);
    });
}


// Function to execute when an image is clicked
function imageClicked(imageUrl) {
    var imageContainer = document.querySelector('img[src="' + imageUrl + '"]').parentNode;

    if (imageContainer.classList.contains('selected')) {
        // 이미 선택된 이미지를 다시 클릭하면 선택이 해제됩니다.
        imageContainer.classList.remove('selected');
        imageContainer.style.border = 'none'; // 테두리 제거
    } else {
        // 이미지가 처음 선택될 때 테두리를 추가합니다.
        imageContainer.classList.add('selected');
        imageContainer.style.border = '2px solid red'; // 테두리 추가
    }
    console.log(imageContainer)
}