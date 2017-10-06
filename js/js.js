
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




//
// // edit username here
// $.ajax('https://teamtreehouse.com/stuartlockhart2.json')
//     .done(function(data) {
//         // pull was a success
//         var items = [];
//         $.each( data, function( key, val ) {
//             if (key.toLowerCase() === 'points') {
//                 $.each(val, function( key2, val2 ) {
//                     if (val2 !== 0) {
//                         if (key2.toLowerCase() !== 'total') {
//                             items.push([key2,val2]);
//                         } else {
//                             $('strong.total').text(val2);
//                         }
//                     }
//                 });
//             }
//         });
//
//         // sort
//         var sorted = [];
//         if (items.length === 0) {
//             sorted = items;
//         } else {
//             sorted = [items.shift()];
//         }
//
//         while (items.length > 0) {
//             for (i = 0; i < sorted.length; i++) {
//                 if (items[0][1] > sorted[i][1]) {
//                     sorted.splice(i,0,items.shift());
//                     break;
//                 }
//                 if (i === sorted.length-1) {
//                     sorted.push(items.shift());
//                     break;
//                 }
//             }
//         }
//         // make into html
//         html = [];
//         html.push("<ul>");
//         for (s in sorted) {
//             html.push("<li>");
//             html.push("<em>" + sorted[s][0] + "</em>");
//             html.push("<span>" + sorted[s][1]  + "</span>");
//             html.push("</li>");
//         }
//         html.push("</ul>");
//
//         // make legend
//         $('.legend').append(html.join(""));
//
//         // make pie
//         createPie(".legend", ".pie");
//     })
//     .fail(function() {
//         $('.team-treehouse > a > h2').text("Could not connect. Username my be incorrect.");
//     })
//
//
// function sliceSize(dataNum, dataTotal) {
//     return (dataNum / dataTotal) * 360;
// }
//
// function addSlice(sliceSize, pieElement, offset, sliceID, color) {
//     $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
//     var offset = offset - 1;
//     var sizeRotation = -179 + sliceSize;
//     $("."+sliceID).css({
//         "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
//     });
//     $("."+sliceID+" span").css({
//         "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
//         "background-color": color
//     });
// }
//
// function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
//     var sliceID = "s"+dataCount+"-"+sliceCount;
//     var maxSize = 179;
//     if(sliceSize<=maxSize) {
//         addSlice(sliceSize, pieElement, offset, sliceID, color);
//     } else {
//         addSlice(maxSize, pieElement, offset, sliceID, color);
//         iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
//     }
// }
//
// function createPie(dataElement, pieElement) {
//     var listNames = [];
//     var listData = [];
//     $(dataElement+" li").each(function() {
//         listNames.push($(this).children('em').html());
//         listData.push(Number($(this).children('span').html()));
//     });
//
//     var listTotal = 0;
//     for(var i=0; i<listData.length; i++) {
//         listTotal += listData[i];
//     }
//
//     var offset = 0;
//     var colors = {};
//     colors['Android'] = '#5cb860';
//     colors['Business'] = '#f9845b';
//     colors['CSS'] = '#3079ab';
//     colors['Design'] = '#e59a13';
//     colors['Development Tools'] = '#637a91';
//     colors['HTML'] = '#39add1';
//     colors['iOS'] = '#53bbb4';
//     colors['Java'] = '#2c9676';
//     colors['Javascript'] = '#c25975';
//     colors['PHP'] = '#7d669e';
//     colors['Python'] = '#f092b0';
//     colors['Ruby'] = '#e15258';
//     colors['WordPress'] = '#838cc7';
//     colors['Digital Literacy'] = '#c38cd4';
//
//     for(var i=0; i<listData.length; i++) {
//         var size = sliceSize(listData[i], listTotal);
//         var color = '#000000';
//         for (var c in colors) {
//             if (listNames[i].toLowerCase() === c.toLowerCase()) {
//                 color = colors[c];
//             }
//         }
//
//         // make slices
//         iterateSlices(size, pieElement, offset, i, 0, color);
//
//         // set legend colors
//         $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color);
//         offset += size;
//     }
// }
//
//
//
