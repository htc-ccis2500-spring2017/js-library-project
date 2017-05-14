$(function () {
console.log( "ready!" );
// Using Velocity,js Animations

//h2 and h3 tags slide in from the left
$("h3").velocity("transition.slideLeftIn", { stagger: 250, drag: true });
    
$("h2").velocity("transition.slideLeftIn", { stagger: 250, drag: true });
    
//h1 and  fade in 
$("h1").velocity("fadeIn", { duration: 1500 })
    
//iframe slide in from right
$("iframe").velocity("transition.slideRightIn", { stagger: 250, drag: true });
    
//li slide down
    
$("li").velocity("slideDown", { duration: 1500 })
    
//make p flip in
$("p").velocity("transition.flipXIn", { delay: 1000 });
    

// Get the JSON data from the file and display
$.getJSON("data/data.json", function (data) {

    console.log(data);
    displayVG("#videogames", data.videogames);
    $("#videogames p").hide();
    $("#videogames h2").on("click", function () {
            
        $(this).next().toggle();

    });

});
  
    getVGHtml = function (videogames) {

        //Display the videogames
        html = "";
        html += "<h2>" + videogames.name + "</h2>"
        html += "<p>" + videogames.description + "<br><br>" + "<img src="+"images/"+ videogames.image +" "+ "height='300'"+" "+"width='450'"+">" +"<p>";
        return html;
    }
    
    displayVG = function (target, videogameArray) {
        
        html = "";
        
        $.each(videogameArray, function (index) {
        
            console.log(videogameArray[index]);
            videogames = videogameArray[index];
            html += getVGHtml(videogames);
        })
        
        $(target).append(html);
    } 
});
