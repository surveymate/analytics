console.log("here in donut");
var projectId = window.location.href.split("?")[1].split("=")[1];
var url = 'http://surveymate-io.herokuapp.com/api/responses/getAnalytics?projectId='+projectId;
// var url = 'http://surveymate-io.herokuapp.com/api/responses/getAnalytics?projectId=5713f50357871011001a5640'
var responseCode;
var responseText;
var responseFrequency,options,question;
// console.log(params);
var response = fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
  }
}).then(function (response) {
    responseCode = response.status;
    responseText = response.statusText;
    return response.text();
}).then(function (result) {
    var jsonData = JSON.parse(result);
    console.log(jsonData);
    if (responseCode == 200) {
        responseFrequency = jsonData.singleQuestionAnalytics[0].frequency;
        options = jsonData.singleQuestionAnalytics[0].mcq_options;
        question = jsonData.singleQuestionAnalytics[0].question_text;
        $(function () {
    var chart;
    
    // $(document).ready(function () {
        
        // Build the chart
        $('#donut').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            series: [{
                type: 'pie',
                name: question,
                data: [
                    [options[0],   responseFrequency[0]/(responseFrequency[1]+responseFrequency[0]+responseFrequency[2]+responseFrequency[3])],
                    [options[1],       responseFrequency[1]/(responseFrequency[1]+responseFrequency[0]+responseFrequency[2]+responseFrequency[3])],
                    {
                        name: options[2],
                        y: responseFrequency[2]/(responseFrequency[1]+responseFrequency[0]+responseFrequency[2]+responseFrequency[3]),
                        sliced: true,
                        selected: true
                    },
                    [options[3],    responseFrequency[3]/(responseFrequency[1]+responseFrequency[0]+responseFrequency[2]+responseFrequency[3])]
                ]
            }]
        });
    // });
    
});
    }
    else {
      console.log("failure");
    }
}).catch(function (error) {
  console.error('An error occured');
  console.error(error);
});
