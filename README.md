### To Operate Site
Simply enter a zip code, click "Get Weather Data" which grabs weather json data from http://openweathermap.com/. Then click "Load Chart".


### Created Line Chart
```
let forecastData = {
  labels: timestamps,
  series: [forecastTemps]
};

new Chartist.Line('#chart1', forecastData, options);

```
<img src="/examples/linechart.png">


### Created Bar Chart
```
let forecastData = {
  labels: timestamps,
  series: [forecastTemps]
};

new Chartist.bar('#chart2', forecastData, options);
```
<img src="/examples/barchart.png">


### Used LabelInterpolationFnc to add indicators on chart labels

```
axisY: {
  labelInterpolationFnc: function (value) {
  return value + 'ºF';
}
```
### Used skipLabels to skip over labels so the x-axis didn't clutter itself. 
```
axisX: {
  labelInterpolationFnc: function skipLabels(value, index) {
  return index % 8 === 0 ? value : null;
}
```
