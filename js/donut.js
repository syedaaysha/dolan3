

//============= container3 end ================

$(function() {
    Highcharts.setOptions({
        colors: ['red', 'green']
    });
        // Create the chart
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container4',
                type: 'pie'
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: [{
                name: 'Browsers',
                data: [["MSIE",4],["Chrome",7]],
                size: '100%',
                innerSize: '60%',
                showInLegend:true,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    });



$(function() {
var chart = new Highcharts.Chart({
  chart: {
    renderTo: 'container5',
    marginBottom: 80
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      rotation: 90
    }
  },

  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    color: "rgb(114, 191, 68)"  
  }]
});
});