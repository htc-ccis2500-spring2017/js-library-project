$(function () {

    $("#Bioitem").hide();
    $("#Globeitem").hide();
    $("#Appleitem").hide();


    //creates and customizes the first wheel
    let piemenu = new wheelnav("piemenu");
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

    //Creates functionality behind the lightning bolt icon slice.
    piemenu.navItems[0].navigateFunction = function () {
        $("#Boltitem").show();
        $("#Bioitem").hide();
        $("#Globeitem").hide();
        $("#Appleitem").hide();
    };
    //Creates functionality behind the biohazard icon slice.
    piemenu.navItems[1].navigateFunction = function () {
        $("#Bioitem").show();
        $("#Boltitem").hide();
        $("#Globeitem").hide();
        $("#Appleitem").hide();
    };
    //Creates functionality behind the globe icon slice.
    piemenu.navItems[2].navigateFunction = function () {
        $("#Globeitem").show();
        $("#Bioitem").hide();
        $("#Boltitem").hide();
        $("#Appleitem").hide();
    };
    //Creates functionality behind the apple icon slice.
    piemenu.navItems[3].navigateFunction = function () {
        $("#Appleitem").show();
        $("#Bioitem").hide();
        $("#Globeitem").hide();
        $("#Boltitem").hide();
    };


    ///BOLT MENU
    let starmenu = new wheelnav('starmenu');
    starmenu.clockwise = false;
    starmenu.sliceInitPathFunction = starmenu.slicePathFunction;
    starmenu.initPercent = 0.1;
    starmenu.wheelRadius = starmenu.wheelRadius * 0.83;
    starmenu.createWheel();







});