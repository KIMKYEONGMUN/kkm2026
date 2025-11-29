$(function(){
    // Initialize Lenis
    const lenis = new Lenis({
    autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    // lenis.on('scroll', (e) => {
    // console.log(e);
    // });

    $('.sect3 .list li').click(function(){
        $('.sect3 .list li').removeClass('on');
        $(this).addClass('on');
        $('.sect3 .item').hide();
        $('.sect3 .item').eq($(this).index()).fadeIn(200);
        $('html, body').animate({
            scrollTop: $('.sect3').offset().top,
        });
    });

    $('.btn_top').click(function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 0);
    });

});// jquery end