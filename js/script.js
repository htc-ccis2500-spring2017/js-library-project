$(function () {

    $("#Bioitem").hide();
    $("#Globeitem").hide();
    $("#Appleitem").hide();


    window.onload = function () {

        //This is the place for code snippets from the documentation -> http://wheelnavjs.softwaretailoring.net/documentation.html

        ///MAIN MENU
        var piemenu = new wheelnav('piemenu');
        piemenu.animatetime = 1000;
        piemenu.animateeffect = 'linear';
        piemenu.slicePathFunction = slicePath().CogBasePieSlice;
        piemenu.sliceHoverPathFunction = slicePath().CogSlice;
        piemenu.sliceSelectedPathFunction = slicePath().CogSlice;
        piemenu.sliceHoverTransformFunction = sliceTransform().RotateTitleTransform;
        piemenu.sliceSelectedTransformFunction = sliceTransform().MoveMiddleTransform;
        piemenu.spreaderInTitle = icon.plus;
        piemenu.spreaderOutTitle = icon.cross;
        piemenu.spreaderRadius = piemenu.wheelRadius * 0.13;
        piemenu.clockwise = false;
        piemenu.sliceInitPathFunction = piemenu.slicePathFunction;
        piemenu.initPercent = 0.1;
        piemenu.wheelRadius = piemenu.wheelRadius * 0.83;
        piemenu.navItemsContinuous = true;
        piemenu.sliceAngle = 45;
        piemenu.createWheel([icon.bolt, icon.biohazard, icon.globe, icon.apple]);
        piemenu.navItems[0].navigateFunction = function () {
            $("#Boltitem").show();
            $("#Bioitem").hide();
            $("#Globeitem").hide();
            $("#Appleitem").hide();
        };
        piemenu.navItems[1].navigateFunction = function () {
            $("#Bioitem").show();
            $("#Boltitem").hide();
            $("#Globeitem").hide();
            $("#Appleitem").hide();
        };
        piemenu.navItems[2].navigateFunction = function () {
            $("#Globeitem").show();
            $("#Bioitem").hide();
            $("#Boltitem").hide();
            $("#Appleitem").hide();
        };
        piemenu.navItems[3].navigateFunction = function () {
            $("#Appleitem").show();
            $("#Bioitem").hide();
            $("#Globeitem").hide();
            $("#Boltitem").hide();
        };

        //Insert generated JavaScript code from here -> http://pmg.softwaretailoring.net

        ///BOLT MENU
        var boltmenu = new wheelnav('boltmenu');
        boltmenu.sliceInitPathFunction = boltmenu.slicePathFunction;
        boltmenu.initPercent = 0.1;
        boltmenu.wheelRadius = boltmenu.wheelRadius * 0.83;
        boltmenu.createWheel();


    };



});