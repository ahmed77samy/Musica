$(document).ready(function () {
    $(".slider").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 15000,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    })
})
$(document).ready(function () {
    $(".brand-name-artist .banner").owlCarousel({
        items: 3,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            992:{
                items: 3
            }
        }
    })
})

//////////////////////////////
$(".owl-carousel").on('translate.owl.carousel', function () {
    var slideLayer = $("[data-animation]");
    slideLayer.each(function () {
        var anim_name = $(this).data('animation');
        $(this).removeClass('animated ' + anim_name).css('opacity', '0');
    });
});

//////////////////////////////
$(".owl-carousel").on('translated.owl.carousel', function () {
    var slideLayer = $(".owl-carousel").find('.owl-item.active').find("[data-animation]");
    slideLayer.each(function () {
        var anim_name = $(this).data('animation');
        $(this).addClass('animated ' + anim_name).css('opacity', '1');
    });
});

//////////////////////////////
$("[data-delay]").each(function () {
    var anim_del = $(this).data('delay');
    $(this).css('animation-delay', anim_del);
});

//////////////////////////////
$("[data-duration]").each(function () {
    var anim_dur = $(this).data('duration');
    $(this).css('animation-duration', anim_dur);
});

/////////////////////////////
function fixedNavBar() {
    if ($(document).scrollTop() > 100 ) {
        $("header nav").css("background", "var(--color-1)").parent().css("transform" , "translateY(-20px)")
    }else {
        $("header nav").css("background", "transparent").parent().css("transform" , "translateY(0)")
    }
}

///////////////////////////////
function menuNav() {
    $("header nav .menu .demo-icon").click(function () {
        if ($("header nav .row > div.second").hasClass("active")) {
            $("header nav .row > div.second").slideUp(400,function(){
                $("header nav .row > div.second").removeClass("active")
            })
        }else {
            $("header nav .row > div.second").addClass("active")
            $("header nav .row > div.second").slideDown()
        }
    })
}

///////////////////////////////
function navClickable () {
    if ($(window).outerWidth() <= 991) {
        $("nav").addClass("mobile")
    }else {
        $("nav").removeClass("mobile")
    }
}

////////////////////////////////
$("header nav.mobile .second ul li.drop-down").click(function () {
    let data = $(this).data('drop');
    $(`header nav.mobile .second ul li.drop-down ul.drop-menu${data}`).slideToggle();
})

////////////////////////
function audio() {
    $("[data-audio]").click(function () {
        let data = $(this).data("audio");
        if($(`#${data} audio`)[0].paused) {
            $(`#${data} audio`)[0].play();
            $(`#${data} .demo-icon`).removeClass("icon-right-open")
            $(`#${data} .demo-icon`).addClass("icon-off")
            $(`.listed .songs.active`).removeClass("active")
            $(`.listed #${data}`).addClass("active")
            $(`#${data} .demo-icon`).html("&#xe84e;")
        }else {
            $(`#${data} audio`)[0].pause()
            $(`#${data} .demo-icon`).removeClass("icon-off")
            $(`#${data} .demo-icon`).addClass("icon-right-open")
            $(`#${data} .demo-icon`).html("&#xe836;")
        }
    })
}
/////////////////////////

function listed() {
    $(".listed [data-audio]").each(function (e) {
        let data = $(this).data("audio");
        let selector = ((parseInt($(`#${data} audio`)[0].duration)) / 60).toFixed(2);
        $(`.listed .songs#${data} .duration span`).html(selector)
    })
}

const aud = document.querySelectorAll('.listed audio');
for (i = 0; i < aud.length; i++) {
    aud[i].onloadeddata = function () {
        listed()
    }
}

////////////////////////////

///////////////////////////////
$(window).ready(function() {
    fixedNavBar()
    menuNav()
    navClickable()
    audio()
    listed()
})

//////////////////////////////
$(window).scroll(function() {
    fixedNavBar()
})

////////////////////
$(window).resize(function() {
    navClickable()
})
////////////////////