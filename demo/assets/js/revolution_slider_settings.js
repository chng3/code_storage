var custom_js = {
    mobile_menu: function () {
        /*Hamburger Button*/
        jQuery('.menu-mobile-effect').on("click", function () {
            jQuery(this).toggleClass("is-active");
            jQuery('#js-navbar-fixed .main-menu').slideToggle(200, 'linear');
        });

        jQuery('.navmenu .menu-item-has-children').append('<span class="zmdi zmdi-chevron-down show-submenu-mobile"></span>');
        jQuery('.navmenu .menu-item-has-children .show-submenu-mobile').on('click touch', function (e) {
            e.preventDefault();
            if (jQuery(this).prev().is(':hidden')) {
                jQuery(this).prev().slideDown(200, 'linear');
                jQuery(this).addClass('toggle-open');
            } else {
                jQuery(this).prev().slideUp(200, 'linear');
                jQuery(this).removeClass('toggle-open');
            }
        });
        /*End Mobile Menu*/
    },
    revolution_slider: function () {
        // TODO: 幻灯片动画配置参数
        jQuery("#rev_slider_3_1").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 3000, // 每一张幻灯片停留的时间 1000ms 毫秒 = 1s 秒
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "false",
                touch: {
                    touchenabled: "on",
                    touchOnDesktop: "off",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style: "custom",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        container: "layergrid",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    },
                    right: {
                        container: "layergrid",
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    }
                }
                ,
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    style: "persephone",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 10,
                    tmp: ''
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1500, 1024, 778, 480],
            gridheight: [700, 600, 500, 400],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                speedbg: 0,
                speedls: 0,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "on",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
       
    }
}

jQuery(document).ready(function ($) {
    custom_js.mobile_menu();

    
    var rev_slider_wrapper = jQuery('.rev_slider_wrapper');
    if (rev_slider_wrapper.length) {
        custom_js.revolution_slider();
    }

    var homepage6 = jQuery('.homepage-v6');
    if (homepage6.length) {
        var countdown = jQuery('.sc-list-sale .item .wrap-countdown');
        for (var i = 0; i < countdown.length; i++) {
            var count = jQuery(countdown[i]).find('.countdown'),
                time = count.data('time'),
                labels = [
                    count.data('text-year') ? count.data('text-year') : 'Years',
                    count.data('text-month') ? count.data('text-month') : 'Months',
                    count.data('text-week') ? count.data('text-week') : 'Weeks',
                    count.data('text-day') ? count.data('text-day') : 'Days',
                    count.data('text-hour') ? count.data('text-hour') : 'Hours',
                    count.data('text-minute') ? count.data('text-minute') : 'Mins',
                    count.data('text-second') ? count.data('text-second') : 'Secs',
                ];
            time = new Date(time);
            jQuery(countdown[i]).countdown({
                labels: labels,
                until: time
            });
        }
    }


    var commingsoon = jQuery('.comming-soon-page');
    if (commingsoon.length) {
        var time_comming = jQuery('.deal-hp-2 .deal-content .wrap-countdown .countdown');
        var timecomming = time_comming.data('time');

        timecomming = new Date(timecomming);
        jQuery(time_comming).countdown({
            until: timecomming
        });
    }


});

