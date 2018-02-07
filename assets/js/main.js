(function($) {
  'use strict';  
    /*======================================/
                  Preloader JS
    ======================================*/  
      var prealoaderOption = $(window);
      prealoaderOption.on("load", function () {
          var preloader = jQuery('.loader');
          var preloaderArea = jQuery('.preloader-area');
          preloader.fadeOut();
          preloaderArea.delay(350).fadeOut('slow');
      });
    /*======================================/
                  Preloader JS
    ======================================*/
    /*======================================/
                sticky header JS
    ======================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-area").removeClass("sticky");
        } else {
            $("#header-area").addClass("sticky");
        }
    });
    /*======================================/
                sticky header JS
    ======================================*/
    /*======================================/
                  scroll top JS
    ======================================*/
    $("a.page-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            //console.log($(hash).offset().top - topOffset);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $("header").outerHeight() + "px"
            }, 1200, function () {

                //window.location.hash = hash;
            });
        } // End if
    });
    /*======================================/
                  scroll top JS
    ======================================*/
    /*======================================/
              slick slider js
    ======================================*/
    $(".regular").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        slidesToShow:1,
        speed: 700,
        slidesToScroll: 1,
        vertical: true,
    });
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    /*======================================/
                slick slider js
    ======================================*/
    /*======================================
                Service Load js
    =======================================*/
            $(".service-load").click(function(){
                $(".load").slideDown('500');
            });
    /*======================================
                Service Load js
    =======================================*/
    /*======================================/
                  isotope js
    ======================================*/
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.single-item',
        layoutMode: 'fitRows'
    });
    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
    /*======================================/
                  isotope js
    ======================================*/
    /*======================================/
                      counterup JS
    ======================================*/
            $('.counter').counterUp({
                delay: 80,
                time: 8000
            });
    /*======================================/
                      counterup JS
    ======================================*/
    /*======================================/
                  magnific-Popup js
    ======================================*/
    $('.video-play-btn').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $('.portfolio-single').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /*======================================/
                magnific-Popup js
    ======================================*/

    /*======================================/
                    Wow JS
     ======================================*/
                new WOW().init();
    /*======================================/
                    Wow JS
    ======================================*/

    /*======================================/
                form validation JS
    ======================================*/
            $("#commentForm").validate();
    /*======================================/
                form validation JS
    ======================================*/
    /*=====================================
            color switcher js
    ========================================*/
        var colorSheets = [
            {
                color: "#F44336",
                title: "Default",
                href: "./assets/css/main.css"
            },
            {
                color: "#8A7BD1",
                title: "color-1",
                href: "./assets/css/color-1.css"
            },
            {
                color: "#008CBA",
                title: "color-2",
                href: "./assets/css/color-2.css"
            },
            {
                color: "#2ECC71",
                title: "color-3",
                href: "./assets/css/color-3.css"
            },
            {
                color: "#46C6FB",
                title: "color-4",
                href: "./assets/css/color-4.css"
            },
            {
                color: "#38687c",
                title: "color-5",
                href: "./assets/css/color-5.css"
            },
        ];
        ColorSwitcher.init(colorSheets);
    /*=====================================
            color switcher js
    ========================================*/
    /*======================================
                    google map JS
    ======================================*/ 
        $(document).ready(function(){
            map = new GMaps({
                el: '#map',
                lat: 24.363589,
                lng: 88.624135
            });
            map.addMarker({
                lat: 24.363589,
                lng: 88.624135,
                title: 'Marker with InfoWindow',
                infoWindow: {
                  content: '<p>Rajshahi</p>'
                }
            });
        });
    /*======================================  
                    google map JS
    ======================================*/
    /*=======================
              Scroll top js
    =========================*/
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('#scroll-up').fadeIn();
            } else {
                $('#scroll-up').fadeOut();
            }
        });
        $('#scroll-up').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    /*=======================
              Scroll top js
    =========================*/
    /*=======================
       Ajax contact form js
    =========================*/
	
	$("#contact-form").submit(function (event) {

        var successMail = '#success' ;
        var errorMail = '#error' ;

        event.preventDefault();



        var formData = $("#contact-form").serialize();

        $("#contact-form :input").prop("disabled", true);

        $.ajax({
            type: 'POST',
            url: $('#contact-form').attr('action'),
            data: formData
        })
            .done(function (response) {
                $(successMail).show();
                $(errorMail).hide();
                $('.contact-form input').val('');
                $('.contact-form textarea').val('');
                $("#contact-form :input").prop("disabled", false);
                console.log(response);
                $(successMail).text(response.success);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {

                var msg = JSON.parse(jqXHR.responseText) ;
                $(errorMail).show();
                $(successMail).hide();
                $("#contact-form :input").prop("disabled", false);
                $(errorMail).text(msg.error);
            });


        return false ;
    })

	
})(window.jQuery);   
   