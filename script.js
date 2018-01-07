var data = {
        datasets: [{
        data: [200, 50, 100],
        backgroundColor: [
       "blue",
        "green",
        "yellow"
        ]
        }],
        labels: [
        "India",
        "RSA",
        "Australia"        ]
        };
        $(document).ready(
        function() {
        var canvas = document.getElementById("myChart");
        var ctx = canvas.getContext("2d");
        var myNewChart = new Chart(ctx, {
        type: 'pie',
        data: data
        });
        canvas.onclick = function(evt) {
        var activePoints = myNewChart.getElementsAtEvent(evt);
        if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];
        var label = chartData.labels[idx];
        var value = chartData.datasets[0].data[idx];
        var url = "http://example.com/?label=" + label + "&value=" + value;
        console.log(url);
        alert(url);
        }
        };
        }
        );
