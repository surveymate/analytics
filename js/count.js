function countUp(count)
{
    var div_by = 100,
        speed = Math.round(count / div_by),
        $display = $('.count'),
        run_count = 1,
        int_speed = 24;

    var int = setInterval(function() {
        if(run_count < div_by){
            $display.text(speed * run_count);
            run_count++;
        } else if(parseInt($display.text()) < count) {
            var curr_count = parseInt($display.text()) + 1;
            $display.text(curr_count);
        } else {
            clearInterval(int);
        }
    }, int_speed);
}
// console.log(window.location.href);
// var projectId = window.location.href.split("?")[1].split("=")[1];
// var url = 'http://surveymate-io.herokuapp.com/api/responses/getAnalytics?projectId='+projectId;
var url = 'http://surveymate-io.herokuapp.com/api/responses/getAnalytics?projectId=5713f50357871011001a5640'
var responseCode;
var responseText;
var self=this;
var rj,length,arr;
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
      countUp(jsonData.numberOfRespondents);
    }
    else {
      console.log("failure");
    }
}).catch(function (error) {
  console.error('An error occured');
  console.error(error);
});



function countUp3(count)
{
    var div_by = 100,
        speed = Math.round(count / div_by),
        $display = $('.count3'),
        run_count = 1,
        int_speed = 24;

    var int = setInterval(function() {
        if(run_count < div_by){
            $display.text(speed * run_count);
            run_count++;
        } else if(parseInt($display.text()) < count) {
            var curr_count = parseInt($display.text()) + 1;
            $display.text(curr_count);
        } else {
            clearInterval(int);
        }
    }, int_speed);
}

countUp3(1291);

