(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#navbarResponsive").removeClass("navbarResponsivePadding");
            $(".dropdown-item-nav").addClass("dropdown-item-nav-background-black");

        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $("#navbarResponsive").addClass("navbarResponsivePadding");
            $(".dropdown-item-nav").removeClass("dropdown-item-nav-background-black");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function(e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
        $(".navbar").removeClass("d-none");
    })
/*    $(document).scroll(function() {
        var y = $(document).scrollTop() - $("#pictures").offset().top + ($(window).height() * 0.7); //-(document.body.clientHeight*0.25);
       var offsethidde = $(".aboutuspic")
            .filter(function(index) {
                return $(this).css("opacity") === "0";
            }).sort(function(a, b) {
                return $(a).offset().top - $(b).offset().top;
            }).toArray();
        var offsethidden = $(offsethidde[0]).offset();
        var offsethiddentop = 0;
        if (typeof offsethidden != 'undefined') {
            offsethiddentop = offsethidden.top - $("#pictures").offset().top;
        }
        var offsetvisible = $(".aboutuspic")
            .filter(function(index) {
                return $(this).css("opacity") === "1";
            }).sort(function(a, b) {
                return $(a).offset().top - $(b).offset().top;
            }).toArray();
        offsetvisible = $(offsetvisible[offsetvisible.length - 1]).offset();
        var offsetvisibletop = 0;
        if (typeof offsetvisible != 'undefined') {
            offsetvisibletop = offsetvisible.top - $("#pictures").offset().top;
        }

        if (y > offsethiddentop) {

            var lastvisiblepic = $(".aboutuspic")
                .filter(function(index) {
                    return $(this).css("opacity") === "0";
                }).sort(function(a, b) {
                    return $(a).offset().top - $(b).offset().top;
                }).toArray();
            var lastlastvisiblepic = $(lastvisiblepic[0]);
            //console.log("making vis: "+lastlastvisiblepic.attr("src"));
            lastlastvisiblepic.animate({opacity: 1},250);
        }
        if (y < offsetvisibletop) {

            var lastpic = $(".aboutuspic")
                .filter(function(index) {
                    return $(this).css("opacity") === "1";
                }).sort(function(a, b) {
                    return $(a).offset().top - $(b).offset().top;
                }).toArray();

            var arraytopic = lastpic.map(function(n) {
                return $(n).attr('src');
            });

            var lastlastpic = $(lastpic[lastpic.length - 1]);
            //console.log("making invis: "+lastlastpic.attr("src"));
            lastlastpic.animate({opacity: 0},250);
        }
    });*/
$( document ).ready(function() {
$("div.contact-us-form label").addClass("section-subheadingstrong");
});

})(jQuery);