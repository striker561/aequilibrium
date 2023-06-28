$('.tech-icons').hover(
    function () { 
        $(this).addClass('colored') 
    },
    function () { 
        $(this).removeClass('colored') 
    }
)

$(document).ready(function () {
    $('section').first().show();

    $('.nav-link').click(function (e) {
        e.preventDefault();

        var target = $(this).attr('href');
        var currentSection = $('section:visible');

        if (currentSection.length > 0) {
            currentSection.fadeOut(400, function () {
                $(target).fadeIn(400);
            }).slideUp(400);
        } else {
            $(target).fadeIn(400).slideDown(400);
        }
    });

    function animateSectionsInView() {
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();

        $('section').each(function () {
            var sectionTop = $(this).offset().top;

            if (sectionTop < windowBottom) {
                $(this).animate({
                    opacity: 1,
                    transform: 'translateY(0)'
                }, 800);
            }
        });
    }


    // Initial animation on page load
    animateSectionsInView();

    // Animate sections on scroll
    $(window).scroll(function () {
        animateSectionsInView();
    });
});