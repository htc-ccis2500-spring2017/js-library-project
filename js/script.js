$(document).ready(function () {
    'use strict';
    let timestamps = [];
    let forecastTemps = [];
    $("#create").hide();
    $("div h2").hide();

    // Weather Lookup and OpenWeather to get json data.

    $("#submit").on("click", function () {
        let zipcode = $("#zip").val();
        let apiKey = "1facaaab905e18b5369e1dfd1605da85";
        getApiData(zipcode, apiKey);
        $("#create").show();
    })

    // Click to create charts
    $("#create").on("click", function () {
        createCharts();
        $("div h2").show();
    })

    function createCharts() {
        let options = {
            paddingBottom: 0,
            onlyInteger: true,
            width: 700,
            height: 400,
            chartPadding: {
                right: 40,
                bottom: 40
            },
            axisY: {
                // Lets offset the chart a bit from the labels
                offset: 60,

                //  Add in degrees Farenheit
                labelInterpolationFnc: function (value) {
                    return value + 'ºF';
                }
            },

            // Show label for every 8 datapoints
            axisX: {
                labelInterpolationFnc: function skipLabels(value, index) {

                    return index % 8 === 0 ? value : null;
                }
            }
        };

        // Create Array with labels and series.

        let forecastData = {
            labels: timestamps,
            series: [forecastTemps]
        };

        // Create Charts

        new Chartist.Line('#chart1', forecastData, options);
        new Chartist.Bar('#chart2', forecastData, options);


    }

    function getApiData(zipcode, apiKey) {

        // Get forcast data

        $.ajax({
            type: "get",
            url: "http://api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + ",us&units=Imperial&appid=" + apiKey,
            dataType: "jsonp",
            contentType: "applications/javascript",
            error: function (xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            success: function (data) {
                // Sort out dates and temps

                // Prevent overlapping data if data is already loaded. 
                if (timestamps.length > 0) {
                    timestamps = [];
                    forecastTemps = [];
                }

                $.each(data.list, function (index, records) {
                    timestamps.push(records.dt_txt);
                    let mainTemps = records.main;
                    forecastTemps.push(mainTemps.temp);
                })
            },
        });

        // Get current weather data

        $.ajax({
            type: "get",
            url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=Imperial&appid=" + apiKey,
            dataType: "jsonp",
            contentType: "applications/javascript",
            error: function (xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            success: function (data) {
                displayWeather("#weather-current", data.weather, data.main);
            },
        });

    }

    function displayWeather(target, weatherArray, main) {
        let html = "";
        $.each(weatherArray, function (index) {
            let weather = weatherArray[index];
            html += getWeatherHtml(weather, main);
        })
        $(target).append(html);
    }

    function getWeatherHtml(weather, main) {
        $("#weather-current").children().remove(); // Clear out previous entry for weather
        let html = "";
        html += '<p>' + "Current Temp is " + main.temp + "ºF with " + weather.description + ".</p>";
        //console.log(timestamps);
        //console.log(forecastTemps);
        return html;
    }

});