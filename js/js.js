
$(document).ready(function () {
    slowscroll();
    applyNavigation();
    slider();
    $('.nav li a').click(function(e) {

        $('.nav .active ').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    });


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
    lnStickyNavigation = $('.scroll-down').offset().top + 1;

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



var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function currentDiv(n) {
    showDivs(slideIndex = n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-red";
}









