$(document).ready(function(){
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        slidesToShow: 1, 
    });
    //about video popup,
    $('.venobox').venobox();


    // testimonail slider 
    $(".tesimonail-slider").slick({
        arrows:false,
        slidesToShow:2,
        dots:true,
        autoplay:true,
        pauseOnHover:false,
        responsive: [
            {
                breakpoint:768,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                    dots: false,
                    arrows: false,
                } 
             },
        ]
    });


    
    // counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 3500,
    });

    //brand slider
    $('.brand-slider').slick({
        slidesToShow:'5',
        centerMode:true,
        centerPadding:'0px',
        prevArrow:'<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next next-arrow"></i>',
        responsive: [
            {
               breakpoint:992,
               settings: {
                   slidesToShow: 3,
                   slideToScroll: 1,
                   dots: false,
                   arrows: false,
               } 
            },
            { 
                breakpoint:768,
               settings: {
                   slidesToShow: 3,
                   slideToScroll: 1,
                   dots: false,
                   arrows: false,
               }
            },
            {                
                breakpoint:576,
               settings: {
                   slidesToShow: 1,
                   slideToScroll: 1,
                   dots: false,
                   arrows: false,
               }
            },
        ],
    });
});