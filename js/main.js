


// Function Activation
$(document).ready(function(){
    offcanvsMenu();
    new WOW().init();
    OwlCarouselFunction();
    isotop();
    

});


// offcanvasMenu
function offcanvsMenu(){
     $(".menu").click(function(){
        $(".off-canvas-menu , .offcanvas-overlay").addClass("offcanvas-active");
       
    });
     $(".close-btn").click(function(){
        $(".off-canvas-menu , .offcanvas-overlay").removeClass('offcanvas-active');
       
    });
     $(".offcanvas-overlay").click(function(){
        $(".off-canvas-menu , .offcanvas-overlay").removeClass('offcanvas-active');
        
       
    });
}





// Owl Carousel Function
function OwlCarouselFunction(){
    $('.hero-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items:1
    });
     $('.offer-sliders').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        },
        items:3
    });
     $('.prouduct-sliders').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            800:{
                items:3
            },
            1000:{
                items:4
            }
        }
        
    });
}




// isotop
function isotop() {
    $("#filters li").on('click', function() {
        var selector = $(this).attr('data-filter');
        $('#grid').isotope({
            filter: selector
        })
    })

    ("#grid").isotope();
}