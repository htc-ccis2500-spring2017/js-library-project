
### Application Overview
You will also need to include a README.md file with your project that discusses how you used the library in your project.  This should clearly call out the features of the library you used.  The best way to do this is with code snippets and/or screen shots. You can include HTML tags in your README.md file to add images, just make sure to upload those images to GitHub with your project.  Code highlighting can be done as described in [GitHub Help - Creating and highlighting code blocks ](https://help.github.com/articles/creating-and-highlighting-code-blocks/).

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
### Created Bar Chart
```
let forecastData = {
  labels: timestamps,
  series: [forecastTemps]
};

new Chartist.bar('#chart2', forecastData, options);
```
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
