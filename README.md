## Synopsis

This is a project that shows off some of the things that you can do with anime.js

## Code Example

This JS code will allow for a loading bar to be animated.
```
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

```


![Loadingbar.gif](https://pomf.pyonpyon.moe/eezhdr.gif)

## Motivation

Created for Mary Mosman's Javascript class.

## Installation

All you have to do is open in your favorite internet browser.

## Contributors

Created by Parker Smith
