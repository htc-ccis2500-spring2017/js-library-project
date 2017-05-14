# js-library-project
Not sure how this is supposed to look like, but here goes:

Velocity animation code where the element will animate a fade in transition from the left.
Method: .velocity("transition.slideLeftIn"

$("h3").velocity("transition.slideLeftIn", { stagger: 250, drag: true });
$("h2").velocity("transition.slideLeftIn", { stagger: 250, drag: true });
    
    
Velocity animation code where the element will animate a fade in transition by slowly increasing in transparency until the elemnent is solid.
Method: .velocity("fadeIn"

$("h1").velocity("fadeIn", { duration: 1500 })
    
    
Velocity animation code where the element will animate a fade in transition from the right.
Method: .velocity("transition.slideRightIn"

$("iframe").velocity("transition.slideRightIn", { stagger: 250, drag: true });
    
    
Velocity animation code where the element will animate slide down affect from the top
Method: .velocity("slideDown"

$("li").velocity("slideDown", { duration: 1500 })
    
    
Velocity animation code where the text is flipped around
Method: .velocity("transition.flipXIn"

$("p").velocity("transition.flipXIn", { delay: 1000 });