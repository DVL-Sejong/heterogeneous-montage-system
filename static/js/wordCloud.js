function drawWordCloud() {
    var word_cloud_data = [
    {"word": "작은 점", "size": 20},
    {"word": "둥근 콧등", "size": 20},
    {"word": "주름", "size": 20},
    {"word": "안경", "size": 20},
    {"word": "높은 코", "size": 20},
    {"word": "긴 코", "size": 20},
    {"word": "쌍커풀", "size": 20},
    {"word": "밝음", "size": 20},
    {"word": "긍정적", "size": 20},
    {"word": "곡선형 눈썹", "size": 20},
    {"word": "짧은 생머리", "size": 20},
    {"word": "타원형 얼굴", "size": 20},
    {"word": "튀어 나온 입술", "size": 30},
    {"word": "깔끔한", "size": 30},
    {"word": "친근감", "size": 30},
    {"word": "뾰족한 턱", "size": 30},
    {"word": "튀어 나온 입", "size": 40},
    {"word": "날씬함", "size": 40},
    {"word": "탄탄한 체격", "size": 40},
    {"word": "유머러스", "size": 40}
];
    var width = document.querySelector("#wordCloud").offsetWidth;
    var height = document.querySelector("#wordCloud").offsetHeight*0.9;

    //Construct the word cloud's SVG element
    var svg = d3.select('#wordCloud').append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
    var layout = d3.layout.cloud()
        .size([width, height])
        .words(word_cloud_data.map(function(d) { return {text: d.word, size: d.size}; }))
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .fontSize(function(d) { return d.size; })
        .on("end", draw);
    layout.start();

    //Draw the word cloud
    function draw(words) {
        svg.append("g")
            //.attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size; })
            .style("fill", "darkgray")
            .attr("text-anchor", "middle")
            .style("font-family", "Sans Serif")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }
}

function drawWordCloud2(){
    // 워드클라우드 모듈불러오기
zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';

//워드클라우드 환경설정
 var myConfig = {
   type: 'wordcloud',
   options: {
    words: [
    {
      text: "타원형",
      count: 20
    },
    {
      text: "넓은 이마",
      count: 20
    },
    {
      text: "갸름한 턱",
      count: 20
    },
    {
      text: "앞머리",
      count: 40
    },
    {
      text: "짧은 머리",
      count: 40
    },
    {
      text: "곡선형",
      count: 30
    },
    {
      text: "쌍커풀",
      count: 60
    },
    {
      text: "작은 눈",
      count: 60
    },
    {
      text: "높은 코",
      count: 50
    },
    {
      text: "뾰족한 코",
      count: 70
    },
    {
      text: "돌출형 입",
      count: 100
    },
    {
      text: "주름",
      count: 90
    },
    {
      text: "깨끗함",
      count: 10
    },
    {
      text: "남성",
      count: 80
    }
  ],
     minLength: 5,
     ignore: [""],
     maxItems: 40,
     aspect: 'spiral', // 'flow-top' | 'flow-center'

     colorType: 'palette',
     palette: ['#B22222', //입
         '#B8860B', //피부
         '#696969', //안경
         '#DB7093', //코
         '#008B8B',  //눈
         '#008B8B',  //눈
         '#DB7093', //코
         '#228B22', //머리
         '#228B22', //머리
         '#663399', //눈썹
         '#FF8C00', //얼굴
         '#FF8C00', //얼굴
         '#FF8C00', //얼굴
         '#B8860B', //피부
         ],

     style: {
       tooltip: {
         text: '%text: %hits',
         visible: false,
         alpha: 0.9,
         backgroundColor: '#1976D2',
         borderRadius: 2,
         borderColor: 'none',
         fontColor: 'white',
         fontFamily: 'Georgia',
         textAlpha: 1
       }
     }
   },

   source: {
     fontColor: '#64B5F6',
     fontSize: 10,
     fontFamily: 'Georgia',
     fontWeight: 'normal',
     marginBottom: '10%'
   }
 };

//워드클라우드 렌더링
 zingchart.render({
   id: 'wordCloud',
   data: myConfig,
   height: '100%',
   width: '100%'
 });
}