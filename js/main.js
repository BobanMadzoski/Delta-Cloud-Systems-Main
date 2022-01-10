$(document).ready(function () {

    $("#hamb-button").click(function (event) {
        event.preventDefault();
        $('body').toggleClass('hide-overflow');
        $('.nav-menu').toggleClass('menu-active');
        $('.mobile-nav').toggleClass('position-relative')
    });
    });

    VANTA.WAVES({
        el: "#waves",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x141b1b,
        shininess: 29.00,
        waveHeight: 40.00,
        waveSpeed: 0.30,
        zoom: 0.65
      });