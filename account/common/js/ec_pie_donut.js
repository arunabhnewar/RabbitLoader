var EchartsPieDonutLight = function() {

    var _scatterPieDonutLightExample = function(dom_id, dataType, data_array) {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define element
        var pie_donut_element = document.getElementById(dom_id);


        //
        // Charts configuration
        //

        if (pie_donut_element) {

            // Initialize chart
            var pie_donut = echarts.init(pie_donut_element);


            //
            // Chart config
            //

            // Options
            let options = {

                // Colors
                color: [
                    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
                    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
                    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add title
                // title: {
                //     text: '',
                //     subtext: '',
                //     left: 'center',
                //     textStyle: {
                //         fontSize: 17,
                //         fontWeight: 500
                //     },
                //     subtextStyle: {
                //         fontSize: 12
                //     }
                // },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    //formatter: "{a} <br/>{b}: {c} ({d}%)"
                    formatter: function(params, ticket, callback){
                        //console.log(params);
                        if(dataType=='number'){
                            return "Count<br>"+params.name + ": "+params.value + " (" +params.percent+"%)";
                        }else{
                            return "Size<br>"+params.name + ": "+formatBytes(params.value) + " (" +params.percent+"%)";
                        }
                    }
                },

                
                // Add legend
                legend: {
                    orient: 'horizontal',
                    //top: 'center',
                    //left: 0,
                    data: ['document', 'stylesheet', 'script', 'image', 'font', 'xhr'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: [{
                    name: dataType=='number' ? 'Request Count' : 'Request Size',
                    type: 'pie',
                    radius: ['30%', '50%'],
                    center: ['50%', '57.5%'],
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#fff'
                        }
                    },
                    data: data_array
                }]
            };

            if(dataType!='number'){
                delete options['legend'];//we want legend to appear only once
            }
            pie_donut.setOption(options);
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            pie_donut_element && pie_donut.resize();
        };

        // On sidebar width change
        var sidebarToggle = document.querySelector('.sidebar-control');
        sidebarToggle && sidebarToggle.addEventListener('click', triggerChartResize);

        // On window resize
        var resizeCharts;
        window.addEventListener('resize', function() {
            clearTimeout(resizeCharts);
            resizeCharts = setTimeout(function () {
                triggerChartResize();
            }, 200);
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function(dom_id, dataType, data_array) {
            _scatterPieDonutLightExample(dom_id, dataType, data_array);
        }
    }
}();