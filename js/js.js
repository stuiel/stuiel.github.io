
$(document).ready(function () {
    slider();
});

$(window).scroll(function () {
    slider();
});

function slider() {
    if (document.body.scrollTop > 100)
        $('#slider').stop().animate({"margin-right": '60'});

    else
        $('#slider').stop().animate({"margin-right": '-200'});
}
