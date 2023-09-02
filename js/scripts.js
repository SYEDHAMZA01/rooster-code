/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

(function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);
  