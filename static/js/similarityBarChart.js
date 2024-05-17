function drawSimilarityBarChart() {
  const data = {
      labels: ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'],
      datasets: [{
        label: '유사도',
        data: [90, 60, 30, 50, 5],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(50, 50, 50, 0.2)',
          'rgba(50, 50, 50, 0.2)',
          'rgba(50, 50, 50, 0.2)',
          'rgba(50, 50, 50, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(50, 50, 50, 1)',
          'rgba(50, 50, 50, 1)',
          'rgba(50, 50, 50, 1)',
          'rgba(50, 50, 50, 1)'
        ],
        borderWidth: [2,1,1,1,1],
        image: ['static/data/real/유재석.png','static/data/real/하하.png',
          'static/data/real/정준하.png','static/data/real/황광희.png',
          'static/data/real/박명수.png']
      }]
    };

    const imageItems = {
      id: 'imageItems',
      beforeDatasetDraw(chart,args,pluginOptions){
        const { ctx, data, options, scales: {x, y}} = chart;

        ctx.save();
        const imageSize = options.layout.padding.left;

        data.datasets[0].image.forEach((imageSrc, index)=>{
        const img = new Image();
        img.src = imageSrc;
        ctx.drawImage(img, 0, y.getPixelForValue(index) - imageSize/2, imageSize, imageSize)
      })}
    }

    // config
    const config = {
      type: 'bar',
      data,
      options: {
        layout:{
          padding:{
            left:50
          }
        },
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
            ticks:{
              display: false
            }
          }
        }
      },
      plugins: [imageItems]
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('candidateChart'),
      config
    );
}


function drawSimilarityBarChart2() {
  $('#chartBox').empty();
  var canvas = document.createElement('canvas');
  canvas.width = '100%';
  canvas.height = '100%';
  canvas.id = 'candidateChart';
  document.getElementById('chartBox').appendChild(canvas);
  const data = {
      labels: ['Person 5', 'Person 3', 'Person 2', 'Person 1', 'Person 4'],
      datasets: [{
        label: '유사도',
        data: [70, 50, 30, 20, 10],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(50, 50, 50, 0.2)',
          'rgba(50, 50, 50, 0.2)',
          'rgba(50, 50, 50, 0.2)',
          'rgba(50, 50, 50, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(50, 50, 50, 1)',
          'rgba(50, 50, 50, 1)',
          'rgba(50, 50, 50, 1)',
          'rgba(50, 50, 50, 1)'
        ],
        borderWidth: [2,1,1,1,1,1],
        image: ['static/data/real/유재석2.png','static/data/real/정준하2.png',
          'static/data/real/인물1.png','static/data/real/인물2.png','static/data/real/황광희2.png']
      }]
    };

    const imageItems = {
      id: 'imageItems',
      beforeDatasetDraw(chart,args,pluginOptions){
        const { ctx, data, options, scales: {x, y}} = chart;

        ctx.save();
        const imageSize = options.layout.padding.left;

        data.datasets[0].image.forEach((imageSrc, index)=>{
        const img = new Image();
        img.src = imageSrc;
        ctx.drawImage(img, 0, y.getPixelForValue(index) - imageSize/2, imageSize, imageSize)
      })}
    }

    // config
    const config = {
      type: 'bar',
      data,
      options: {
        layout:{
          padding:{
            left:50
          }
        },
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
            ticks:{
              display: false
            }
          }
        }
      },
      plugins: [imageItems]
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('candidateChart'),
      config
    );
}