$(document).ready(function () {

    // Menu toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    // Scroll & load behavior
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });

    // ===============================
    // View More / View Less Projects
    // ===============================
    $('#viewMoreBtn').click(function () {
        $('.extra-project').slideToggle(400);

        $(this).text(function (i, text) {
            return text === "View More" ? "View Less" : "View More";
        });
    });

});
