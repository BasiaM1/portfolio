$('.top').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.splash').offset().top
    }, 500)
})


$('.me').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.about').offset().top
    }, 500)
})

$('.projects').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.portfolio').offset().top
    }, 500)
})

$('.contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.footer-list').offset().top
    }, 500)
})