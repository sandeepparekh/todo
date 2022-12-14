let ctx = document.getElementById("chart").getContext('2d');

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#EB06FF");
gradientStroke.addColorStop(1, "#EB06FF");

var gradientBkgrd = ctx.createLinearGradient(0, 100, 0, 400);
gradientBkgrd.addColorStop(0, "#eb06ff14");
gradientBkgrd.addColorStop(1, "#eb06ff00");

let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            //ctx.shadowColor = 'rgba(244,94,132,0.8)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 6;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});




var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'sunday'],
        datasets: [{
            label: "Task",
            backgroundColor: gradientBkgrd,
            borderColor: gradientStroke,
            data: [1,3,2,1,2,3,0],
            pointBorderColor: "rgba(255,255,255,0)",
            pointBackgroundColor: "rgba(255,255,255,0)",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 0,
            pointRadius: 1,
            borderWidth: 3,
            pointHitRadius: 16,
        }]
    },

    // Configuration options go here
    options: {
      tooltips: {
        backgroundColor:'#fff',
        displayColors:false,
           titleFontColor: '#000',
        bodyFontColor: '#000'
        
        },      
      legend: {
            display: false
      },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false,
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                },gridLines: {
                    display:false,
                    color: "rgba(0, 0, 0, 0)",
                }
    
            }],
        }
    }
});

$('.side-open').on('click', function() {
    $('.task-body').toggleClass('active');
});

$('.open-task-body').on('click', function() {
    $('.add-task-body').toggleClass('active');
    $('.add-task').toggleClass('active');
    $('#task').hide();
    setTimeout(function() {
        $('#task').show();
    }, 1000);
});

$(document).ready(function() {
    $('.progress .progress-bar').css("width",
              function() {
                  return $(this).attr("aria-valuenow") + "%";
              }

    )
    
    $('.progress .progress-bar').css("background",
        function() {
        return $(this).attr("area-color");
        }
    )
    
    $('.progress .progress-bar').css("box-shadow",
        
        function () {
            return '0 4px 8px 0 rgb('+hexToRgb($(this).attr("area-color")).r+' '+hexToRgb($(this).attr("area-color")).g+' '+hexToRgb($(this).attr("area-color")).b+' / 60%), 0 6px 20px 0 rgb(0 0 0 / 19%)';
        }
        
    )

    hexToRgb("#0033ff").g
});

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
    nav:false,
    center:false,
    dots: false,
    responsive:{
        0:{
            items:1.5
        },
        
        1000:{
            items:1.5
        }
    }
})
