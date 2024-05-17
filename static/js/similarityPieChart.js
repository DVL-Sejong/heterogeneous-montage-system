function drawSimilarityPieChart() {
    $('#similarityMontage').empty();
    $('#similarityPerson2').empty();
    $('#similarityPerson').empty();
    var img = document.createElement('img');
    img.src = "static/data/montage/" + montageName + ".jpg";
    img.style.height = '100%';
    document.getElementById('similarityMontage').appendChild(img);

    var img = document.createElement('img');
    img.src = "static/data/real/" + montageName + ".png";
    img.style.height = '100%';
    document.getElementById('similarityPerson').appendChild(img);

    var img = document.createElement('img');
    img.src = "static/data/real/" + montageName + ".png";
    img.style.height = '100%';
    document.getElementById('similarityPerson2').appendChild(img);

    $('#similarityPieChart').empty();

    var options = {
        series: [90],
        chart: {
            height: document.querySelector("#similarityPieChart").offsetHeight * 2,
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 1,
                        left: 0,
                        color: '#999',
                        opacity: 0.1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'solid',
            colors: '#FF1A68',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['유사도'],
    };

    var chart = new ApexCharts(document.querySelector("#similarityPieChart"), options);
    chart.render();

}

function drawSimilarityPieChart2() {
    $('#similarityMontage').empty();
    let chartStatus = Chart.getChart('similarityPieChart');
    if (chartStatus !== undefined) {
      chartStatus.destroy();
    }
    var img = document.createElement('img');
    img.src = "static/data/montage/" + montageName + ".jpg";
    img.style.height = '100%';
    document.getElementById('similarityMontage').appendChild(img);

    $('#similarityPerson').empty();
    var img = document.createElement('img');
    img.src = "static/data/real/" + montageName + "2.png";
    img.style.height = '100%';
    document.getElementById('similarityPerson').appendChild(img);

    $('#similarityPerson2').empty();
    var img = document.createElement('img');
    img.src = "static/data/real/" + montageName + "2.png";
    img.style.height = '100%';
    document.getElementById('similarityPerson2').appendChild(img);

    $('#similarityPieChart').empty();

    var options = {
        series: [70],
        chart: {
            height: document.querySelector("#similarityPieChart").offsetHeight * 2,
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'solid',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['유사도'],
    };

    var chart = new ApexCharts(document.querySelector("#similarityPieChart"), options);
    chart.render();

}