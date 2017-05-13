var obj = {
    charged: '0%'
};

var JSobject = anime({
    targets: obj,
    charged: '100%',
    round: 1,
    easing: 'linear',
    update: function () {
        var el = document.querySelector('#JSobject pre');
        el.innerHTML = JSON.stringify(obj);
    }
});


var svgAttributes = anime({
    targets: '#svgAttributes polygon',
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    easing: 'easeInOutExpo'
});

var path = anime.path('#motionPath path');

var motionPath = anime({
    targets: '#motionPath .el',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 2000,
    loop: true
});

var morphing = anime({
    targets: '#morphing .polymorph',
    points: [
        {
            value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369'
        },
        {
            value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369'
        },
        {
            value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'
        },
        {
            value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369'
        }
  ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
});
