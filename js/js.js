
$(document).ready(function () {
    slowscroll();
    applyNavigation();
    slider();
});

$(window).scroll(function () {
    slider();

});

function slider() {
    if (document.body.scrollTop > 500)
        $('#navbar-example').stop().animate({"margin-right": ''});

    else
        $('#navbar-example').stop().animate({"margin-right": '-250'});
}

function redirect()
{
    var url = "https://play.google.com/store/apps/developer?id=LDevs&hl=en";
    window.location(url);
}




function applyNavigation()
{
    applyNavigationFixForPhone();
    applyScrollSpy();
    applyStickyNavigation();
}


function applyNavigationFixForPhone()
{
    $('.navbar li a ').click(function(event)
    {
        $('.navbar-collapse').removeClass('in').addClass('collapse');

    });
}




function applyScrollSpy()
{
    $('#navbar-example').on('activate.bs.scrollspy', function()
    {
        window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
    });
}

function applyStickyNavigation()
{
    lnStickyNavigation = $('.scroll-down').offset().top + 20;

    $(window).on('scroll', function()
    {
        stickyNavigation();
    });

    stickyNavigation();
}

function stickyNavigation()
{
    if($(window).scrollTop() > lnStickyNavigation)
    {
        $('body').addClass('fixed');
    }
    else
    {
        $('body').removeClass('fixed');
    }
}


function slowscroll () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

}









