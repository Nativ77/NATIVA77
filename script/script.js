$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor')
})

$('feature-items').on('click', function(){
    $(this).children('p').slideToggle(300);
    $(this).children('.icon-feature').children('svg').children('path').toggleClass('feature-items__blue-image');
    $(this).children('.icon-feature').children('span').toggleClass('change-color');
    $(this).toggleClass('line-color');
})
