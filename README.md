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

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

All you have to do is open in your favorite internet browser.

## Contributors

Created by Parker Smith

## License
