$('.sidebar__slider').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }
    ]
});
$('.slider__slide').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 2.5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '00px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '80px',
                slidesToShow: 1
            }
        }
    ]
});
