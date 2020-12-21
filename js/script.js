$(document).ready(function() {
    function detectOS() {
        sw
        const platform = navigator.platform.toLowerCase(),
            iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

        if (platform.includes('mac')) return 'MacOS';
        if (iosPlatforms.includes(platform)) return 'iOS';
        if (platform.includes('win')) return 'Windows';
        if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
        if (/linux/.test(platform)) return 'Linux';

        return 'unknown';
    }


    $('body,html').click(function(e) {
        if (e.target.className !== 'helped') {
            $('.helped').removeClass('active');
        }
    });
    $('.popup-gallery__body-exit').click(function() {
        $('.materials-gallery__blocks-slider').hide();
        $('.popup-gallery__body-slider__item .videoWrapper').find('iframe').attr('src', '');
        if ($('.materials-gallery__title').hasClass('active')) {
            $('.materials-gallery__title span').text('Показать используемые материалы');
        }
        $('.materials-gallery__title, .materials-gallery__blocks-slider__arrow-wrap').removeClass('active');
        $('.popup-gallery').hide();
        $('html,body').removeClass('overflow-h');
        $('html').css('padding-right', '');
    });
    $('.popup-gallery__bg-exit').click(function() {
        $('.popup-gallery').hide();
        $('html,body').removeClass('overflow-h');
        $('html').css('padding-right', '');
    });
    $('.block-gallery a').click(function(e) {
        e.preventDefault();
        $('.popup-gallery').show();
        //if($(window).width() >= 768 ) {
        $('html').addClass('overflow-h');

        if (detectOS() == 'Windows') {
            $('html').css('padding-right', '17px');
            $('.popup-gallery__body').css('transform', 'translateX(-7px)')
        };
        $('.videoWrapperBlock').click(function(e) {
                e.preventDefault();
                var ifram = $(this).find('img').data('iframe');
                $(this).hide();
                $('.popup-gallery__body-slider__item iframe').attr('src', ifram);
            })
            //}
            //else {
            //$('body').addClass('overflow-h');
            //}
        if ($(this).hasClass('video')) {
            var imgSrc = $(this).data('video');
            $('.popup-gallery__body-slider__item .videoWrapper-img').attr('src', 'https://img.youtube.com/vi/' + imgSrc + '/maxresdefault.jpg');
            $('.popup-gallery__body-slider__item .videoWrapper-img').attr('data-iframe', 'https://www.youtube.com/embed/' + imgSrc + '?autoplay=1');
            $('.popup-gallery__body-slider__item img').hide();
            $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Видео от: ')
            $('.popup-gallery__body-slider__item .videoWrapper').show();
            if ($(window).width() < 768) {
                $('.popup-gallery__body-slider__item .videoWrapper-img').show();
                $('.videoWrapperBlock').show();
            } else {
                $('.videoWrapperBlock').hide();
                $('.popup-gallery__body-slider__item .videoWrapper iframe').attr('src', 'https://www.youtube.com/embed/' + imgSrc);

            };
            $('.popup-gallery__body-content-item__text.download').hide();

        } else {
            var imgSrc = $(this).find('img').attr('src');
            $('.popup-gallery__body-slider__item img').attr('src', imgSrc);
            $('.popup-gallery__body-slider__item .videoWrapper').hide();
            $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Фотография от: ')
            $('.popup-gallery__body-slider__item .videoWrapper').find('iframe').attr('src', '');
            $('.popup-gallery__body-slider__item img').show();;
            $('.popup-gallery__body-content-item__text.download').show();
        }
        var popupImg = $(this).data('popup-gallery');
        $('.popup-gallery__body-slider__item').data('popup-gallery', popupImg)
        var krovlyaColor = $(this).data('krovlya-color');
        var krovlyaType = $(this).data('krovlya-type');
        var krovlyaType2 = $(this).data('krovlya-type2');
        var fasadColor = $(this).data('fasad-color');
        var fasadType = $(this).data('fasad-type');
        var fasadType2 = $(this).data('fasad-type2');
        var vodostokColor = $(this).data('vodostok-color');
        var vodostokType = $(this).data('vodostok-type');
        var vodostokType2 = $(this).data('vodostok-type2');
        $('.popup-gallery .krovlya .color > a ').text(krovlyaColor).attr('href', '?color=' + krovlyaColor);
        $('.popup-gallery .krovlya .type > a ').text(krovlyaType).attr('href', '?type=' + krovlyaType);
        $('.popup-gallery .krovlya .type2 > a ').text(krovlyaType2).attr('href', '?type=' + krovlyaType2);
        $('.popup-gallery .fasad .color > a ').text(fasadColor).attr('href', '?color=' + fasadColor)
        $('.popup-gallery .fasad .type > a ').text(fasadType).attr('href', '?type=' + fasadType);
        $('.popup-gallery .fasad .type2 > a ').text(fasadType2).attr('href', '?type=' + fasadType2)
        $('.popup-gallery .vodostok .color > a ').text(vodostokColor).attr('href', '?color=' + vodostokColor);;
        $('.popup-gallery .vodostok .type > a ').text(vodostokType).attr('href', '?type=' + vodostokType);
        $('.popup-gallery .vodostok .type2 > a ').text(vodostokType2).attr('href', '?type=' + vodostokType2);
        var itemTags = $(this).data('tags').split(',');

        jQuery('.scrollbar-rail').removeClass('scroll-wrapper');
        $('.popup-gallery .gallery-tags__item .gallery-tags__item').remove();
        jQuery('.scrollbar-rail').find('.scroll-element').remove();
        jQuery('.scrollbar-rail').off('scroll')
        $('.popup-gallery .gallery-tags__item a').remove();
        for (var i = 0; i < itemTags.length; i++) {
            console.log(itemTags[i]);
            $('.popup-gallery .gallery-tags__item').append('<a href="' + document.location.protocol + '//' + document.location.host + document.location.pathname + '">' + itemTags[i] + '</a>');
            if (i == (itemTags.length - 1) && $(window).width() <= 768) {
                jQuery('.scrollbar-rail').scrollbar();
            }
        }

    });
    $('.popup-gallery__body-slider__next').click(function(e) {
        e.preventDefault();
        var slidePrev = $('.popup-gallery__body-slider__item').data('popup-gallery');
        var slidePrevNumb = slidePrev.replace('open-', '');
        slidePrevNumb++;
        var slideEnd = document.querySelectorAll('.block-gallery__img:not(.block-gallery-hidden)');


        if (slideEnd.length == slidePrevNumb) {
            if ($(".block-gallery a[data-popup-gallery='open-" + 0 + "']").data('video')) {
                var srcImg = $(".block-gallery a[data-popup-gallery='open-" + 0 + "']").data('video');
                var blocked = $(".block-gallery a[data-popup-gallery='open-" + 0 + "']");
                $('.popup-gallery__body-slider__item img').hide();
                $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Видео от: ')
                $('.popup-gallery__body-slider__item .videoWrapper').show();
                if ($(window).width() < 768) {
                    $('.popup-gallery__body-slider__item .videoWrapper-img').show();
                    $('.videoWrapperBlock').show();
                } else {
                    $('.videoWrapperBlock').hide();
                    $('.popup-gallery__body-slider__item .videoWrapper iframe').attr('src', 'https://www.youtube.com/embed/' + srcImg);

                };
                $('.popup-gallery__body-content-item__text.download').hide();

                $('.popup-gallery__body-slider__item .videoWrapper-img').attr('src', 'https://img.youtube.com/vi/' + srcImg + '/maxresdefault.jpg');
                $('.popup-gallery__body-slider__item .videoWrapper-img').attr('data-iframe', 'https://www.youtube.com/embed/' + srcImg + '?autoplay=1');
                $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + 0);


            } else {
                var srcImg = $(".block-gallery a[data-popup-gallery='open-" + 0 + "']").find('img').attr('src');
                var blocked = $(".block-gallery a[data-popup-gallery='open-" + 0 + "']");
                $('.popup-gallery__body-slider__item .videoWrapper').hide();
                $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Фотография от: ')
                $('.popup-gallery__body-slider__item .videoWrapper').find('iframe').attr('src', '');
                $('.popup-gallery__body-slider__item img').show();;
                $('.popup-gallery__body-content-item__text.download').show();
                $('.popup-gallery__body-slider__item img').attr("src", srcImg);
                $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + 0);

            }


            var krovlyaColor = $(blocked).data('krovlya-color');
            var krovlyaType = $(blocked).data('krovlya-type');
            var krovlyaType2 = $(blocked).data('krovlya-type2');
            var fasadColor = $(blocked).data('fasad-color');
            var fasadType = $(blocked).data('fasad-type');
            var fasadType2 = $(blocked).data('fasad-type2');
            var vodostokColor = $(blocked).data('vodostok-color');
            var vodostokType = $(blocked).data('vodostok-type');
            var vodostokType2 = $(blocked).data('vodostok-type2');
            $('.popup-gallery .krovlya .color > a ').text(krovlyaColor).attr('href', '?color=' + krovlyaColor);
            $('.popup-gallery .krovlya .type > a ').text(krovlyaType).attr('href', '?type=' + krovlyaType);
            $('.popup-gallery .krovlya .type2 > a ').text(krovlyaType2).attr('href', '?type=' + krovlyaType2);
            $('.popup-gallery .fasad .color > a ').text(fasadColor).attr('href', '?color=' + fasadColor)
            $('.popup-gallery .fasad .type > a ').text(fasadType).attr('href', '?type=' + fasadType);
            $('.popup-gallery .fasad .type2 > a ').text(fasadType2).attr('href', '?type=' + fasadType2)
            $('.popup-gallery .vodostok .color > a ').text(vodostokColor).attr('href', '?color=' + vodostokColor);;
            $('.popup-gallery .vodostok .type > a ').text(vodostokType).attr('href', '?type=' + vodostokType);
            $('.popup-gallery .vodostok .type2 > a ').text(vodostokType2).attr('href', '?type=' + vodostokType2);
            var itemTags = $(blocked).data('tags').split(',');

            jQuery('.scrollbar-rail').removeClass('scroll-wrapper');
            $('.popup-gallery .gallery-tags__item .gallery-tags__item').remove();
            jQuery('.scrollbar-rail').find('.scroll-element').remove();
            jQuery('.scrollbar-rail').off('scroll')
            $('.popup-gallery .gallery-tags__item a').remove();
            for (var i = 0; i < itemTags.length; i++) {
                console.log(itemTags[i]);
                $('.popup-gallery .gallery-tags__item').append('<a href="' + document.location.protocol + '//' + document.location.host + document.location.pathname + '">' + itemTags[i] + '</a>');
                if (i == (itemTags.length - 1) && $(window).width() <= 768) {
                    jQuery('.scrollbar-rail').scrollbar();
                }
            }
        } else {

            if ($(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").data('video')) {
                var srcImg = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").data('video');
                var blocked = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']");
                $('.popup-gallery__body-slider__item img').hide();
                $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Видео от: ')
                $('.popup-gallery__body-slider__item .videoWrapper').show();
                if ($(window).width() < 768) {
                    $('.popup-gallery__body-slider__item .videoWrapper-img').show();
                    $('.videoWrapperBlock').show();
                } else {
                    $('.videoWrapperBlock').hide();
                    $('.popup-gallery__body-slider__item .videoWrapper iframe').attr('src', 'https://www.youtube.com/embed/' + srcImg);

                };
                $('.popup-gallery__body-content-item__text.download').hide();

                $('.popup-gallery__body-slider__item .videoWrapper-img').attr('src', 'https://img.youtube.com/vi/' + srcImg + '/maxresdefault.jpg');
                $('.popup-gallery__body-slider__item .videoWrapper-img').attr('data-iframe', 'https://www.youtube.com/embed/' + srcImg + '?autoplay=1');

                $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + slidePrevNumb);





            } else {
                var srcImg = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").find('img').attr('src');
                blocked = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']");
                $('.popup-gallery__body-slider__item .videoWrapper').hide();
                $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Фотография от: ')
                $('.popup-gallery__body-slider__item .videoWrapper').find('iframe').attr('src', '');
                $('.popup-gallery__body-slider__item img').show();;
                $('.popup-gallery__body-content-item__text.download').show();
                $('.popup-gallery__body-slider__item img').attr("src", srcImg);
                $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + slidePrevNumb);

            }



            var krovlyaColor = $(blocked).data('krovlya-color');
            var krovlyaType = $(blocked).data('krovlya-type');
            var krovlyaType2 = $(blocked).data('krovlya-type2');
            var fasadColor = $(blocked).data('fasad-color');
            var fasadType = $(blocked).data('fasad-type');
            var fasadType2 = $(blocked).data('fasad-type2');
            var vodostokColor = $(blocked).data('vodostok-color');
            var vodostokType = $(blocked).data('vodostok-type');
            var vodostokType2 = $(blocked).data('vodostok-type2');
            $('.popup-gallery .krovlya .color > a ').text(krovlyaColor).attr('href', '?color=' + krovlyaColor);
            $('.popup-gallery .krovlya .type > a ').text(krovlyaType).attr('href', '?type=' + krovlyaType);
            $('.popup-gallery .krovlya .type2 > a ').text(krovlyaType2).attr('href', '?type=' + krovlyaType2);
            $('.popup-gallery .fasad .color > a ').text(fasadColor).attr('href', '?color=' + fasadColor)
            $('.popup-gallery .fasad .type > a ').text(fasadType).attr('href', '?type=' + fasadType);
            $('.popup-gallery .fasad .type2 > a ').text(fasadType2).attr('href', '?type=' + fasadType2)
            $('.popup-gallery .vodostok .color > a ').text(vodostokColor).attr('href', '?color=' + vodostokColor);;
            $('.popup-gallery .vodostok .type > a ').text(vodostokType).attr('href', '?type=' + vodostokType);
            $('.popup-gallery .vodostok .type2 > a ').text(vodostokType2).attr('href', '?type=' + vodostokType2);
            var itemTags = $(blocked).data('tags').split(',');

            jQuery('.scrollbar-rail').removeClass('scroll-wrapper');
            $('.popup-gallery .gallery-tags__item .gallery-tags__item').remove();
            jQuery('.scrollbar-rail').find('.scroll-element').remove();
            jQuery('.scrollbar-rail').off('scroll')
            $('.popup-gallery .gallery-tags__item a').remove();
            for (var i = 0; i < itemTags.length; i++) {
                console.log(itemTags[i]);
                $('.popup-gallery .gallery-tags__item').append('<a href="' + document.location.protocol + '//' + document.location.host + document.location.pathname + '">' + itemTags[i] + '</a>');
                if (i == (itemTags.length - 1) && $(window).width() <= 768) {
                    jQuery('.scrollbar-rail').scrollbar();
                }
            }
        }

    });
    $('.popup-gallery__body-slider__prev').click(function(e) {
        e.preventDefault();
        var slidePrev = $('.popup-gallery__body-slider__item').data('popup-gallery');
        var slidePrevNumb = slidePrev.replace('open-', '');
        slidePrevNumb--;
        var slideEnd = document.querySelectorAll('.block-gallery__img:not(.block-gallery-hidden)');
        var count = slideEnd.length;
        count--;

        if (slidePrevNumb == '-1') {

            if ($(".block-gallery a[data-popup-gallery='open-" + count + "']").data('video')) {
                var srcImg = $(".block-gallery a[data-popup-gallery='open-" + count + "']").data('video');
                var blocked = $(".block-gallery a[data-popup-gallery='open-" + count + "']");
                $('.popup-gallery__body-slider__item img').hide();
                $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Видео от: ')
                $('.popup-gallery__body-slider__item .videoWrapper').show();
                if ($(window).width() < 768) {
                    $('.popup-gallery__body-slider__item .videoWrapper-img').show();
                    $('.videoWrapperBlock').show();
                } else {
                    $('.videoWrapperBlock').hide();
                    $('.popup-gallery__body-slider__item .videoWrapper iframe').attr('src', 'https://www.youtube.com/embed/' + srcImg);

                };
                $('.popup-gallery__body-content-item__text.download').hide();

                $('.popup-gallery__body-slider__item .videoWrapper-img').attr('src', 'https://img.youtube.com/vi/' + srcImg + '/maxresdefault.jpg');
                $('.popup-gallery__body-slider__item .videoWrapper-img').attr('data-iframe', 'https://www.youtube.com/embed/' + srcImg + '?autoplay=1');

                $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + count);
            } else {
                var srcImg = $(".block-gallery a[data-popup-gallery='open-" + count + "']").find('img').attr('src');
                var blocked = $(".block-gallery a[data-popup-gallery='open-" + count + "']");
                $('.popup-gallery__body-slider__item .videoWrapper').hide();
                $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Фотография от: ')
                $('.popup-gallery__body-slider__item .videoWrapper').find('iframe').attr('src', '');
                $('.popup-gallery__body-slider__item img').show();;
                $('.popup-gallery__body-content-item__text.download').show();
                $('.popup-gallery__body-slider__item img').attr("src", srcImg);
                $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + count);

            }
            var krovlyaColor = $(blocked).data('krovlya-color');
            var krovlyaType = $(blocked).data('krovlya-type');
            var krovlyaType2 = $(blocked).data('krovlya-type2');
            var fasadColor = $(blocked).data('fasad-color');
            var fasadType = $(blocked).data('fasad-type');
            var fasadType2 = $(blocked).data('fasad-type2');
            var vodostokColor = $(blocked).data('vodostok-color');
            var vodostokType = $(blocked).data('vodostok-type');
            var vodostokType2 = $(blocked).data('vodostok-type2');
            $('.popup-gallery .krovlya .color > a ').text(krovlyaColor).attr('href', '?color=' + krovlyaColor);
            $('.popup-gallery .krovlya .type > a ').text(krovlyaType).attr('href', '?type=' + krovlyaType);
            $('.popup-gallery .krovlya .type2 > a ').text(krovlyaType2).attr('href', '?type=' + krovlyaType2);
            $('.popup-gallery .fasad .color > a ').text(fasadColor).attr('href', '?color=' + fasadColor)
            $('.popup-gallery .fasad .type > a ').text(fasadType).attr('href', '?type=' + fasadType);
            $('.popup-gallery .fasad .type2 > a ').text(fasadType2).attr('href', '?type=' + fasadType2)
            $('.popup-gallery .vodostok .color > a ').text(vodostokColor).attr('href', '?color=' + vodostokColor);;
            $('.popup-gallery .vodostok .type > a ').text(vodostokType).attr('href', '?type=' + vodostokType);
            $('.popup-gallery .vodostok .type2 > a ').text(vodostokType2).attr('href', '?type=' + vodostokType2);
            var itemTags = $(blocked).data('tags').split(',');

            jQuery('.scrollbar-rail').removeClass('scroll-wrapper');
            $('.popup-gallery .gallery-tags__item .gallery-tags__item').remove();
            jQuery('.scrollbar-rail').find('.scroll-element').remove();
            jQuery('.scrollbar-rail').off('scroll')
            $('.popup-gallery .gallery-tags__item a').remove();
            for (var i = 0; i < itemTags.length; i++) {
                console.log(itemTags[i]);
                $('.popup-gallery .gallery-tags__item').append('<a href="' + document.location.protocol + '//' + document.location.host + document.location.pathname + '">' + itemTags[i] + '</a>');
                if (i == (itemTags.length - 1) && $(window).width() <= 768) {
                    jQuery('.scrollbar-rail').scrollbar();
                }
            }
        } else {


            if ($(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").data('video')) {
                var srcImg = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").data('video');
                var blocked = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']");
                $('.popup-gallery__body-slider__item img').hide();
                $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Видео от: ')
                $('.popup-gallery__body-slider__item .videoWrapper').show();
                if ($(window).width() < 768) {
                    $('.popup-gallery__body-slider__item .videoWrapper-img').show();
                    $('.videoWrapperBlock').show();
                } else {
                    $('.videoWrapperBlock').hide();
                    $('.popup-gallery__body-slider__item .videoWrapper iframe').attr('src', 'https://www.youtube.com/embed/' + srcImg);

                };
                $('.popup-gallery__body-content-item__text.download').hide();

                $('.popup-gallery__body-slider__item .videoWrapper-img').attr('src', 'https://img.youtube.com/vi/' + srcImg + '/maxresdefault.jpg');
                $('.popup-gallery__body-slider__item .videoWrapper-img').attr('data-iframe', 'https://www.youtube.com/embed/' + srcImg + '?autoplay=1');

                $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + slidePrevNumb);
            } else {
                var srcImg = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").find('img').attr('src');
                var blocked = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']");
                $('.popup-gallery__body-slider__item .videoWrapper').hide();
                $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Фотография от: ')
                $('.popup-gallery__body-slider__item .videoWrapper').find('iframe').attr('src', '');
                $('.popup-gallery__body-slider__item img').show();;
                $('.popup-gallery__body-content-item__text.download').show();
                $('.popup-gallery__body-slider__item img').attr("src", srcImg);
                $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + slidePrevNumb);

            }

            var krovlyaColor = $(blocked).data('krovlya-color');
            var krovlyaType = $(blocked).data('krovlya-type');
            var krovlyaType2 = $(blocked).data('krovlya-type2');
            var fasadColor = $(blocked).data('fasad-color');
            var fasadType = $(blocked).data('fasad-type');
            var fasadType2 = $(blocked).data('fasad-type2');
            var vodostokColor = $(blocked).data('vodostok-color');
            var vodostokType = $(blocked).data('vodostok-type');
            var vodostokType2 = $(blocked).data('vodostok-type2');
            $('.popup-gallery .krovlya .color > a ').text(krovlyaColor).attr('href', '?color=' + krovlyaColor);
            $('.popup-gallery .krovlya .type > a ').text(krovlyaType).attr('href', '?type=' + krovlyaType);
            $('.popup-gallery .krovlya .type2 > a ').text(krovlyaType2).attr('href', '?type=' + krovlyaType2);
            $('.popup-gallery .fasad .color > a ').text(fasadColor).attr('href', '?color=' + fasadColor)
            $('.popup-gallery .fasad .type > a ').text(fasadType).attr('href', '?type=' + fasadType);
            $('.popup-gallery .fasad .type2 > a ').text(fasadType2).attr('href', '?type=' + fasadType2)
            $('.popup-gallery .vodostok .color > a ').text(vodostokColor).attr('href', '?color=' + vodostokColor);;
            $('.popup-gallery .vodostok .type > a ').text(vodostokType).attr('href', '?type=' + vodostokType);
            $('.popup-gallery .vodostok .type2 > a ').text(vodostokType2).attr('href', '?type=' + vodostokType2);
            var itemTags = $(blocked).data('tags').split(',');

            jQuery('.scrollbar-rail').removeClass('scroll-wrapper');
            $('.popup-gallery .gallery-tags__item .gallery-tags__item').remove();
            jQuery('.scrollbar-rail').find('.scroll-element').remove();
            jQuery('.scrollbar-rail').off('scroll')
            $('.popup-gallery .gallery-tags__item a').remove();
            for (var i = 0; i < itemTags.length; i++) {
                console.log(itemTags[i]);
                $('.popup-gallery .gallery-tags__item').append('<a href="' + document.location.protocol + '//' + document.location.host + document.location.pathname + '">' + itemTags[i] + '</a>');
                if (i == (itemTags.length - 1) && $(window).width() <= 768) {
                    jQuery('.scrollbar-rail').scrollbar();
                }
            }
        }

    });





    $('.popup-open-category-gallery').click(function(e) {
        e.preventDefault();
        $('.aside-mob-fixed').addClass('active');
        $('.category-gallery').show();
        $('.popup-open-btns-bg').show();
        $('.aside-mob-fixed').css('overflow-y', 'scroll');
        //if($(window).width() >= 768 ) {
        $('html').addClass('overflow-h');
        if (detectOS() == 'Windows') {
            $('html').css('padding-right', '17px');
            $('.popup-gallery__body').css('transform', 'translateX(-7px)')
        };
        //}
        //else {
        //$('body').addClass('overflow-h');
        //}
    });
    $('.popup-open-filter-gallery, .add-btn-open-filter').click(function(e) {
        e.preventDefault();
        $('html').addClass('overflow-h');
        $('.aside-mob-fixed').addClass('active');
        $('.filter-gallery').show();
        $('.popup-open-btns-bg').show();
        //if($(window).width() >= 768 ) {

        if (detectOS() == 'Windows') {
            $('html').css('padding-right', '17px');
            $('.popup-gallery__body').css('transform', 'translateX(-7px)')
        };
        //}
        //else {
        //$('body').addClass('overflow-h');
        //}
    });
    $('.popup-open-btns-bg').click(function() {
        $('.aside-mob-fixed').removeClass('active');


        $('.filter-gallery').hide();
        $('.category-gallery').hide();
        $('.popup-open-btns-bg').hide();
        $('html,body').removeClass('overflow-h');
        $('html').css('padding-right', '');
        // $('.aside-mob-fixed').css('bottom','-100%');
    });
    $('.category-gallery__list-item').click(function(e) {
        $('.category-gallery__list-item').not(this).removeClass('active');
        $(this).toggleClass('active');

    });
    $(this).find('.has-sub-item a').click(function(e) {

        if ($(window).width() < 768) {
            e.preventDefault();

        }
    })
    $('.category-gallery__list-item ul').click(function(e) {
        e.stopPropagation();
    });
    $('.materials-gallery__title').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('span').text('Скрыть используемые материалы');
        } else {
            $(this).find('span').text('Показать используемые материалы');
        }
        $('.materials-gallery__blocks-slider').toggle();
        $('.materials-gallery__blocks-slider__arrow-wrap').toggleClass('active');
        var my1Swiper = new Swiper('.materials-gallery__blocks-slider', settings);
    });
    $('.gallery-tags__item .customed-select__text').click(function() {
        $('.gallery-tags__text').toggleClass('often_disactive');
        $(this).toggleClass('active');
        $(this).closest('.gallery-tags__wrap').toggleClass('full');
        $('.gallery-tags').toggleClass('fulled');
        if ($(this).hasClass('active')) {

            $(this).text('Свернуть теги');
        } else {
            $(this).text('Все теги');
            var allW = $('.gallery-tags').width();
            var galleryText = $('.gallery-tags__text').width();
            var galleryItem = $('.gallery-tags__item:last-of-type > a');
            var customedSelect = $('.customed-select').width();
            var tagsMaxWidth = allW - customedSelect - galleryText - 13;
            var galleryItemWidth = 0;
            for (var i = 0; i < galleryItem.length; i++) {
                var galleryItemWidth = galleryItemWidth + galleryItem.eq(i).width() + 32;
                if (galleryItemWidth < tagsMaxWidth) {
                    galleryItem.eq(i).show();
                } else {
                    galleryItem.eq(i).hide();
                }

            }
        }
    });
    $('.helped').click(function(e) {
        e.stopPropagation();
    })
    $('.helped > span:first-child').click(function(e) {
        e.preventDefault();
        var test = $(this).parent();
        $('.helped').not(test).removeClass('active');
        $(this).parent().toggleClass('active');


    });
    $('.helped span:last-child').click(function(e) {
        e.preventDefault()
    })
    $('.helped__exit').click(function(e) {
        $(this).parent().parent().removeClass('active');
    });
    $('.filter-gallery__more').click(function() {
        $(this).find("span").toggleClass('active');
        $(this).parent().find('.hidden-click').slideToggle();
    });
    $('.helped span:last-child a').click(function(e) {
        e.preventDefault();
        console.log();
        if (!$(this).attr('target')) {
            window.location.href = (this.href);
        } else {
            window.open(this.href, '_blank');
        }
    });
    $('.filter-gallery__item .filter-gallery__customed-checked').click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass('disabled')) {

            $('.search-tooltip').removeClass('active');
        }

        if ($(this).find('input').attr('disabled') || $(this).hasClass('disabled')) {

        } else {
            $(this).find('input').toggleClass('active');
            if ($(this).find('input').hasClass('active')) {
                $(this).find('input').attr('checked', 'checked');
                $(this).find('.search-tooltip').addClass('active');
            } else {
                $(this).find('input').removeAttr('checked');
                $(this).find('.search-tooltip').removeClass('active');
            }
        }
    });
    $('.filter-gallery__item .filter-gallery__customed-radio').not('.no-remove').click(function(e) {
        e.preventDefault();

        if (!$(this).hasClass('disabled')) {
            $('.search-tooltip').removeClass('active');
        }

        if ($(this).find('input').attr('disabled') || $(this).hasClass('disabled')) {

        } else {
            $thesed = $(this).find('input');
            $(this).parent().find('.filter-gallery__customed-radio input').not($thesed).removeClass('active').removeAttr('checked');
            $(this).find('input').toggleClass('active');

            if ($(this).find('input').hasClass('active')) {
                $(this).find('input').attr('checked', 'checked');
                $(this).find('.search-tooltip').addClass('active');

            } else {
                $(this).find('input').removeAttr('checked');
                $(this).find('.search-tooltip').removeClass('active');

            }
        }
    });

    $('.helped > span:first-child').click(function() {
        if ($(window).width() < 768) {
            var contented = $(this).next().clone();
            $('.popup-helped').show();
            $('.popup-helped').append(contented);
            $('.helped__exit').click(function() {
                // if($(window).width() < 768) {
                $('.popup-helped').hide();
                $('.helped.active').removeClass('active');
                $('.popup-helped span').remove('span');
                // }
            })
        }

    });
    $('.active-tags__blocks-item a').not('.active-tags__blocks-item-reset a').click(function(e) {
        e.preventDefault();
        $(this).closest('.active-tags__blocks-item').remove();
        // console.log($('.active-tags__blocks-item').not('.active-tags__blocks-item-reset').length);
        if (!$('.active-tags__blocks-item').not('.active-tags__blocks-item-reset').length) {
            $('.active-tags__blocks-item-reset').remove();
        }
    });
    $('.active-tags__blocks-item-reset a').click(function(e) {
        e.preventDefault();
        window.location.href = window.location.origin + window.location.pathname;
    });
    console.log();
    $('.filter-gallery__reset').click(function(e) {
        e.preventDefault();
        $('.filter-gallery__form').find('label').not('.no-remove').find('input').removeAttr('checked');
        window.location.href = window.location.origin + window.location.pathname;
    });
    // $('.filter-gallery__form').submit(function (e) {
    //     e.preventDefault();
    //     console.log($(this).serialize());
    //     // return false;
    //     $(this).unbind('submit').submit()
    // });


    var search = location.search.substr(1)
        .split('&') // разбиваем на параметры
        .reduce(function(res, a) { // разбираем пары ключ-значение
            var t = a.split('=');

            // нужно декодировать и ключ и значение, значения может не быть
            res[decodeURIComponent(t[0])] = t.length == 1 ? null : decodeURIComponent(t[1]);
            return res;
        }, {});



    // console.log();
    keys = Object.keys(search);
    console.log(keys);
    var inputed = $('.filter-gallery__item').find('input');
    if (!keys[0] == '') {
        for (var i = 0, l = keys.length; i < l; i++) {
            console.log(keys[i] + ' is ' + search[keys[i]]);
            var oked = search[keys[i]].replace('+', ' ');
            var oked = oked.replace('++', ' + ');


            // $('.active-tags__blocks').append('<div class="active-tags__blocks-item">\n' +
            //     '                            <span>'+oked+'</span>\n' +
            //     '                            <a href="#" data-query="'+ keys[i] + '"><img src="img/close.svg" alt="close"></a>\n' +
            //     '                        </div>');

        };
        if ($('#resetForm')[0]) {
            $('#resetForm')[0].reset();
        }
        const urlParams = new URLSearchParams(window.location.search);

        const entries = urlParams.entries();
        const form = document.getElementById("resetForm");
        for (const entry of entries) {
            console.log(entry);
            $(`input/*[name="${entry[0]}"]*/[value="${entry[1]}"]`).attr('checked', 'checked').addClass('active');
            $('.active-tags__blocks').append('<div class="active-tags__blocks-item">\n' +
                '                            <span>' + entry[1] + '</span>\n' +
                '                            <a href="#" data-query="' + entry[1] + '"><img src="img/close.svg" alt="close"></a>\n' +
                '                        </div>');
        }
    }

    $(".active-tags__blocks-item a").not('.active-tags__blocks-item-reset a').click(function(e) {
        e.preventDefault();
        // var context = $(this).parent().find('span').text();
        // const urlParams = new URLSearchParams(window.location.search);
        var getBack = $(this).data('query');
        // urlParams.delete(getBack);
        // location.search = urlParams;
        $('input[value="' + getBack + '"]').removeAttr('checked').removeClass('active');
        $('.filter-gallery__submit button').trigger('click');


    })


    if ($('.active-tags__blocks-item').not('.active-tags__blocks-item-reset').length) {
        $('.active-tags__blocks-item-reset').show();
    }

    $('.block-gallery .show-hide span').click(function(e) {
        e.preventDefault();
        $(this).parent().hide();
        $('.block-gallery-hidden').removeClass('block-gallery-hidden');

        if ($(window).width() <= 768) {
            var leftColumn = document.querySelectorAll('.block-gallery__left-column .block-gallery__img:not(.block-gallery-hidden)');
            var c = 0;
            for (var i = 0; i < leftColumn.length; i++) {
                c = i;
                leftColumn[i].dataset.popupGallery = 'open-' + c;
            }
            var leftColumn = document.querySelectorAll('.block-gallery__right-column .block-gallery__img:not(.block-gallery-hidden)');
            for (var i = 0; i < leftColumn.length; i++) {
                c++;
                leftColumn[i].dataset.popupGallery = 'open-' + c;
            }

        }
    });
    if ($(window).width() > 768) {
        var leftColumn = document.querySelectorAll('.block-gallery__left-column .block-gallery__img');
        for (var i = 0; i < leftColumn.length; i++) {
            var b = i * 2;
            leftColumn[i].dataset.popupGallery = 'open-' + b;
        }
        var leftColumn = document.querySelectorAll('.block-gallery__right-column .block-gallery__img');
        for (var i = 0; i < leftColumn.length; i++) {
            if (i == 0) {
                leftColumn[i].dataset.popupGallery = 'open-1';
            } else if (i == 1) {
                leftColumn[i].dataset.popupGallery = 'open-3';
            } else {
                var b = i * 2 - 1;
                leftColumn[i].dataset.popupGallery = 'open-' + b;
            }
        }
    } else {
        var leftColumn = document.querySelectorAll('.block-gallery__left-column .block-gallery__img:not(.block-gallery-hidden)');
        var c = 0;
        for (var i = 0; i < leftColumn.length; i++) {
            c = i;
            leftColumn[i].dataset.popupGallery = 'open-' + c;
        }
        console.log(c);
        var leftColumn = document.querySelectorAll('.block-gallery__right-column .block-gallery__img:not(.block-gallery-hidden)');
        for (var i = 0; i < leftColumn.length; i++) {
            c++;
            leftColumn[i].dataset.popupGallery = 'open-' + c;
        }
        var leftColumn = document.querySelectorAll('.block-gallery__left-column .block-gallery-hidden');
        for (var i = 0; i < leftColumn.length; i++) {
            c++;
            leftColumn[i].dataset.popupGallery = 'open-' + c;
        }
        var leftColumn = document.querySelectorAll('.block-gallery__right-column .block-gallery-hidden');
        for (var i = 0; i < leftColumn.length; i++) {
            c++;
            leftColumn[i].dataset.popupGallery = 'open-' + c;
        }
    }

    // $('.popup-gallery__body-content-item__text > span').click(function (e) {
    //     e.preventDefault();
    //     var inputed = $(this).text();
    //     // var inputedParent = $(this).parent();
    //     // let params = new URLSearchParams(window.location.search);
    //     // if($(inputedParent).hasClass('color')) params.append('color', inputed);
    //     // if($(inputedParent).hasClass('type')) params.append('type', inputed);
    //     // if($(inputedParent).hasClass('type2')) params.append('type2', inputed);
    //     $(`input[value="${inputed}"]`).attr('checked','checked').addClass('active');
    //     $('.filter-gallery__submit button').trigger('click');
    //
    //     // location.search = params;
    // })
    $('.popup-gallery__body-content-item__text.download a').click(function(e) {
        // e.preventDefault();
        if ($('.popup-gallery__body-slider__item img').attr('src')) {
            var linkImg = $('.popup-gallery__body-slider__item img').attr('src');
        } else {
            var linkImg = $('.popup-gallery__body-slider__item img').attr('data-src');
        }

        $(this).attr('href', linkImg);
        // return true;

    })
    var settings = {
            loop: true,
            slidesPerView: 4,
            navigation: {
                nextEl: '.materials-gallery__blocks-slider__arrow.next',
                prevEl: '.materials-gallery__blocks-slider__arrow.prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,

                },
                // when window width is >= 480px
                768: {
                    slidesPerView: 3,
                },
                // when window width is >= 640px
                991: {
                    slidesPerView: 3,
                },
                1680: {
                    slidesPerView: 3,
                }
            }
        }
        // document.addEventListener('swiped-down', function(e) {
        //     // console.log(e.target); // element that was swiped
        //     // console.log(e.detail);
        //     if( e.detail['dir'] == 'down' && $(e.target).is('.swiped-down')) {
        //         $('.aside-mob-fixed').removeClass('active');

    //         $('.filter-gallery').hide();
    //         $('.category-gallery').hide();
    //         $('.popup-open-btns-bg').hide();
    //         $('html,body').removeClass('overflow-h');
    $('html').css('padding-right', '');
    //     }
    // });
    document.addEventListener('swiped-right', function(e) {
        // console.log(e.target); // element that was swiped
        // console.log(e.detail);
        if (e.detail['dir'] == 'right' && $(e.target).is('.swiped-right img') || e.detail['dir'] == 'right' && $(e.target).is('.videoWrapperBlock')) {
            var slidePrev = $('.popup-gallery__body-slider__item').data('popup-gallery');
            var slidePrevNumb = slidePrev.replace('open-', '');
            slidePrevNumb--;
            var slideEnd = document.querySelectorAll('.block-gallery__img:not(.block-gallery-hidden)');
            var count = slideEnd.length;
            count--;

            if (slidePrevNumb == '-1') {


                if ($(".block-gallery a[data-popup-gallery='open-" + count + "']").data('video')) {
                    var srcImg = $(".block-gallery a[data-popup-gallery='open-" + count + "']").data('video');
                    var blocked = $(".block-gallery a[data-popup-gallery='open-" + count + "']");
                    $('.popup-gallery__body-slider__item img').hide();
                    $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Видео от: ')
                    $('.popup-gallery__body-slider__item .videoWrapper').show();
                    if ($(window).width() < 768) {
                        $('.popup-gallery__body-slider__item .videoWrapper-img').show();
                        $('.videoWrapperBlock').show();
                    } else {
                        $('.videoWrapperBlock').hide();
                        $('.popup-gallery__body-slider__item .videoWrapper iframe').attr('src', 'https://www.youtube.com/embed/' + srcImg);

                    };
                    $('.popup-gallery__body-content-item__text.download').hide();

                    $('.popup-gallery__body-slider__item .videoWrapper-img').attr('src', 'https://img.youtube.com/vi/' + srcImg + '/maxresdefault.jpg');
                    $('.popup-gallery__body-slider__item .videoWrapper-img').attr('data-iframe', 'https://www.youtube.com/embed/' + srcImg + '?autoplay=1');

                    $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + count);

                } else {
                    var srcImg = $(".block-gallery a[data-popup-gallery='open-" + count + "']").find('img').attr('src');
                    var blocked = $(".block-gallery a[data-popup-gallery='open-" + count + "']");
                    $('.popup-gallery__body-slider__item img').attr("src", srcImg);
                    $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + count);
                    $('.popup-gallery__body-slider__item .videoWrapper').hide();
                    $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Фотография от: ')
                    $('.popup-gallery__body-slider__item .videoWrapper').find('iframe').attr('src', '');
                    $('.popup-gallery__body-slider__item img').show();;
                    $('.popup-gallery__body-content-item__text.download').show();


                }

                var krovlyaColor = $(blocked).data('krovlya-color');
                var krovlyaType = $(blocked).data('krovlya-type');
                var krovlyaType2 = $(blocked).data('krovlya-type2');
                var fasadColor = $(blocked).data('fasad-color');
                var fasadType = $(blocked).data('fasad-type');
                var fasadType2 = $(blocked).data('fasad-type2');
                var vodostokColor = $(blocked).data('vodostok-color');
                var vodostokType = $(blocked).data('vodostok-type');
                var vodostokType2 = $(blocked).data('vodostok-type2');
                $('.popup-gallery .krovlya .color > a ').text(krovlyaColor).attr('href', '?color=' + krovlyaColor);
                $('.popup-gallery .krovlya .type > a ').text(krovlyaType).attr('href', '?type=' + krovlyaType);
                $('.popup-gallery .krovlya .type2 > a ').text(krovlyaType2).attr('href', '?type=' + krovlyaType2);
                $('.popup-gallery .fasad .color > a ').text(fasadColor).attr('href', '?color=' + fasadColor)
                $('.popup-gallery .fasad .type > a ').text(fasadType).attr('href', '?type=' + fasadType);
                $('.popup-gallery .fasad .type2 > a ').text(fasadType2).attr('href', '?type=' + fasadType2)
                $('.popup-gallery .vodostok .color > a ').text(vodostokColor).attr('href', '?color=' + vodostokColor);;
                $('.popup-gallery .vodostok .type > a ').text(vodostokType).attr('href', '?type=' + vodostokType);
                $('.popup-gallery .vodostok .type2 > a ').text(vodostokType2).attr('href', '?type=' + vodostokType2);
                var itemTags = $(blocked).data('tags').split(',');

                jQuery('.scrollbar-rail').removeClass('scroll-wrapper');
                $('.popup-gallery .gallery-tags__item .gallery-tags__item').remove();
                jQuery('.scrollbar-rail').find('.scroll-element').remove();
                jQuery('.scrollbar-rail').off('scroll')
                $('.popup-gallery .gallery-tags__item a').remove();
                for (var i = 0; i < itemTags.length; i++) {
                    console.log(itemTags[i]);
                    $('.popup-gallery .gallery-tags__item').append('<a href="' + document.location.protocol + '//' + document.location.host + document.location.pathname + '">' + itemTags[i] + '</a>');
                    if (i == (itemTags.length - 1) && $(window).width() <= 768) {
                        jQuery('.scrollbar-rail').scrollbar();
                    }
                }
            } else {

                if ($(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").data('video')) {
                    var srcImg = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").data('video');
                    var blocked = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']");
                    $('.popup-gallery__body-slider__item img').hide();
                    $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Видео от: ')
                    $('.popup-gallery__body-slider__item .videoWrapper').show();
                    if ($(window).width() < 768) {
                        $('.popup-gallery__body-slider__item .videoWrapper-img').show();
                        $('.videoWrapperBlock').show();
                    } else {
                        $('.videoWrapperBlock').hide();
                        $('.popup-gallery__body-slider__item .videoWrapper iframe').attr('src', 'https://www.youtube.com/embed/' + srcImg);

                    };
                    $('.popup-gallery__body-content-item__text.download').hide();

                    $('.popup-gallery__body-slider__item .videoWrapper-img').attr('src', 'https://img.youtube.com/vi/' + srcImg + '/maxresdefault.jpg');
                    $('.popup-gallery__body-slider__item .videoWrapper-img').attr('data-iframe', 'https://www.youtube.com/embed/' + srcImg + '?autoplay=1');

                    $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + slidePrevNumb);

                } else {
                    var srcImg = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").find('img').attr('src');
                    var blocked = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']");
                    $('.popup-gallery__body-slider__item img').attr("src", srcImg);
                    $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + slidePrevNumb);
                    $('.popup-gallery__body-slider__item .videoWrapper').hide();
                    $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Фотография от: ')
                    $('.popup-gallery__body-slider__item .videoWrapper').find('iframe').attr('src', '');
                    $('.popup-gallery__body-slider__item img').show();;
                    $('.popup-gallery__body-content-item__text.download').show();


                }
                var krovlyaColor = $(blocked).data('krovlya-color');
                var krovlyaType = $(blocked).data('krovlya-type');
                var krovlyaType2 = $(blocked).data('krovlya-type2');
                var fasadColor = $(blocked).data('fasad-color');
                var fasadType = $(blocked).data('fasad-type');
                var fasadType2 = $(blocked).data('fasad-type2');
                var vodostokColor = $(blocked).data('vodostok-color');
                var vodostokType = $(blocked).data('vodostok-type');
                var vodostokType2 = $(blocked).data('vodostok-type2');
                $('.popup-gallery .krovlya .color > a ').text(krovlyaColor).attr('href', '?color=' + krovlyaColor);
                $('.popup-gallery .krovlya .type > a ').text(krovlyaType).attr('href', '?type=' + krovlyaType);
                $('.popup-gallery .krovlya .type2 > a ').text(krovlyaType2).attr('href', '?type=' + krovlyaType2);
                $('.popup-gallery .fasad .color > a ').text(fasadColor).attr('href', '?color=' + fasadColor)
                $('.popup-gallery .fasad .type > a ').text(fasadType).attr('href', '?type=' + fasadType);
                $('.popup-gallery .fasad .type2 > a ').text(fasadType2).attr('href', '?type=' + fasadType2)
                $('.popup-gallery .vodostok .color > a ').text(vodostokColor).attr('href', '?color=' + vodostokColor);;
                $('.popup-gallery .vodostok .type > a ').text(vodostokType).attr('href', '?type=' + vodostokType);
                $('.popup-gallery .vodostok .type2 > a ').text(vodostokType2).attr('href', '?type=' + vodostokType2);
                var itemTags = $(blocked).data('tags').split(',');

                jQuery('.scrollbar-rail').removeClass('scroll-wrapper');
                $('.popup-gallery .gallery-tags__item .gallery-tags__item').remove();
                jQuery('.scrollbar-rail').find('.scroll-element').remove();
                jQuery('.scrollbar-rail').off('scroll')
                $('.popup-gallery .gallery-tags__item a').remove();
                for (var i = 0; i < itemTags.length; i++) {
                    console.log(itemTags[i]);
                    $('.popup-gallery .gallery-tags__item').append('<a href="' + document.location.protocol + '//' + document.location.host + document.location.pathname + '">' + itemTags[i] + '</a>');
                    if (i == (itemTags.length - 1) && $(window).width() <= 768) {
                        jQuery('.scrollbar-rail').scrollbar();
                    }
                }
            }
        }
    });
    document.addEventListener('swiped-left', function(e) {
        // console.log(e.target); // element that was swiped
        // console.log(e.detail);
        if (e.detail['dir'] == 'left' && $(e.target).is('.swiped-right img') || e.detail['dir'] == 'left' && $(e.target).is('.videoWrapperBlock')) {
            var slidePrev = $('.popup-gallery__body-slider__item').data('popup-gallery');
            var slidePrevNumb = slidePrev.replace('open-', '');
            slidePrevNumb++;
            var slideEnd = document.querySelectorAll('.block-gallery__img:not(.block-gallery-hidden)');


            console.log(slideEnd.length);
            console.log(slidePrevNumb);


            if (slideEnd.length == slidePrevNumb) {




                if ($(".block-gallery a[data-popup-gallery='open-" + 0 + "']").data('video')) {
                    var srcImg = $(".block-gallery a[data-popup-gallery='open-" + 0 + "']").data('video');
                    var blocked = $(".block-gallery a[data-popup-gallery='open-" + 0 + "']");
                    $('.popup-gallery__body-slider__item img').hide();
                    $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Видео от: ')
                    $('.popup-gallery__body-slider__item .videoWrapper').show();
                    if ($(window).width() < 768) {
                        $('.popup-gallery__body-slider__item .videoWrapper-img').show();
                        $('.videoWrapperBlock').show();
                    } else {
                        $('.videoWrapperBlock').hide();
                        $('.popup-gallery__body-slider__item .videoWrapper iframe').attr('src', 'https://www.youtube.com/embed/' + srcImg);

                    };
                    $('.popup-gallery__body-content-item__text.download').hide();

                    $('.popup-gallery__body-slider__item .videoWrapper-img').attr('src', 'https://img.youtube.com/vi/' + srcImg + '/maxresdefault.jpg');
                    $('.popup-gallery__body-slider__item .videoWrapper-img').attr('data-iframe', 'https://www.youtube.com/embed/' + srcImg + '?autoplay=1');

                    $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + 0);

                } else {
                    var srcImg = $(".block-gallery a[data-popup-gallery='open-" + 0 + "']").find('img').attr('src');
                    var blocked = $(".block-gallery a[data-popup-gallery='open-" + 0 + "']");
                    $('.popup-gallery__body-slider__item .videoWrapper').hide();
                    $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Фотография от: ')
                    $('.popup-gallery__body-slider__item .videoWrapper').find('iframe').attr('src', '');
                    $('.popup-gallery__body-slider__item img').show();;
                    $('.popup-gallery__body-content-item__text.download').show();
                    $('.popup-gallery__body-slider__item img').attr("src", srcImg);
                    $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + 0);

                }

                var krovlyaColor = $(blocked).data('krovlya-color');
                var krovlyaType = $(blocked).data('krovlya-type');
                var krovlyaType2 = $(blocked).data('krovlya-type2');
                var fasadColor = $(blocked).data('fasad-color');
                var fasadType = $(blocked).data('fasad-type');
                var fasadType2 = $(blocked).data('fasad-type2');
                var vodostokColor = $(blocked).data('vodostok-color');
                var vodostokType = $(blocked).data('vodostok-type');
                var vodostokType2 = $(blocked).data('vodostok-type2');
                $('.popup-gallery .krovlya .color > a ').text(krovlyaColor).attr('href', '?color=' + krovlyaColor);
                $('.popup-gallery .krovlya .type > a ').text(krovlyaType).attr('href', '?type=' + krovlyaType);
                $('.popup-gallery .krovlya .type2 > a ').text(krovlyaType2).attr('href', '?type=' + krovlyaType2);
                $('.popup-gallery .fasad .color > a ').text(fasadColor).attr('href', '?color=' + fasadColor)
                $('.popup-gallery .fasad .type > a ').text(fasadType).attr('href', '?type=' + fasadType);
                $('.popup-gallery .fasad .type2 > a ').text(fasadType2).attr('href', '?type=' + fasadType2)
                $('.popup-gallery .vodostok .color > a ').text(vodostokColor).attr('href', '?color=' + vodostokColor);;
                $('.popup-gallery .vodostok .type > a ').text(vodostokType).attr('href', '?type=' + vodostokType);
                $('.popup-gallery .vodostok .type2 > a ').text(vodostokType2).attr('href', '?type=' + vodostokType2);
                var itemTags = $(blocked).data('tags').split(',');

                jQuery('.scrollbar-rail').removeClass('scroll-wrapper');
                $('.popup-gallery .gallery-tags__item .gallery-tags__item').remove();
                jQuery('.scrollbar-rail').find('.scroll-element').remove();
                jQuery('.scrollbar-rail').off('scroll')
                $('.popup-gallery .gallery-tags__item a').remove();
                for (var i = 0; i < itemTags.length; i++) {
                    console.log(itemTags[i]);
                    $('.popup-gallery .gallery-tags__item').append('<a href="' + document.location.protocol + '//' + document.location.host + document.location.pathname + '">' + itemTags[i] + '</a>');
                    if (i == (itemTags.length - 1) && $(window).width() <= 768) {
                        jQuery('.scrollbar-rail').scrollbar();
                    }
                }
            } else {

                if ($(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").data('video')) {
                    var srcImg = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").data('video');
                    var blocked = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']");
                    $('.popup-gallery__body-slider__item img').hide();
                    $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Видео от: ')
                    $('.popup-gallery__body-slider__item .videoWrapper').show();
                    if ($(window).width() < 768) {
                        $('.popup-gallery__body-slider__item .videoWrapper-img').show();
                        $('.videoWrapperBlock').show();
                    } else {
                        $('.videoWrapperBlock').hide();
                        $('.popup-gallery__body-slider__item .videoWrapper iframe').attr('src', 'https://www.youtube.com/embed/' + srcImg);

                    };
                    $('.popup-gallery__body-content-item__text.download').hide();

                    $('.popup-gallery__body-slider__item .videoWrapper-img').attr('src', 'https://img.youtube.com/vi/' + srcImg + '/maxresdefault.jpg');
                    $('.popup-gallery__body-slider__item .videoWrapper-img').attr('data-iframe', 'https://www.youtube.com/embed/' + srcImg + '?autoplay=1');

                    $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + slidePrevNumb);

                } else {
                    var srcImg = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']").find('img').attr('src');
                    blocked = $(".block-gallery a[data-popup-gallery='open-" + slidePrevNumb + "']");
                    $('.popup-gallery__body-slider__item img').attr("src", srcImg);
                    $('.popup-gallery__body-slider__item').data('popup-gallery', 'open-' + slidePrevNumb);
                    $('.popup-gallery__body-slider__item .videoWrapper').find('iframe').attr('src', '');
                    $('.popup-gallery__body-slider__item .videoWrapper').hide();
                    $('.popup-gallery__body-content-right .popup-gallery__body-content-item__title').text('Фотография от: ')
                    $('.popup-gallery__body-slider__item img').show();;
                    $('.popup-gallery__body-content-item__text.download').show();


                }






                var krovlyaColor = $(blocked).data('krovlya-color');
                var krovlyaType = $(blocked).data('krovlya-type');
                var krovlyaType2 = $(blocked).data('krovlya-type2');
                var fasadColor = $(blocked).data('fasad-color');
                var fasadType = $(blocked).data('fasad-type');
                var fasadType2 = $(blocked).data('fasad-type2');
                var vodostokColor = $(blocked).data('vodostok-color');
                var vodostokType = $(blocked).data('vodostok-type');
                var vodostokType2 = $(blocked).data('vodostok-type2');
                $('.popup-gallery .krovlya .color > a ').text(krovlyaColor).attr('href', '?color=' + krovlyaColor);
                $('.popup-gallery .krovlya .type > a ').text(krovlyaType).attr('href', '?type=' + krovlyaType);
                $('.popup-gallery .krovlya .type2 > a ').text(krovlyaType2).attr('href', '?type=' + krovlyaType2);
                $('.popup-gallery .fasad .color > a ').text(fasadColor).attr('href', '?color=' + fasadColor)
                $('.popup-gallery .fasad .type > a ').text(fasadType).attr('href', '?type=' + fasadType);
                $('.popup-gallery .fasad .type2 > a ').text(fasadType2).attr('href', '?type=' + fasadType2)
                $('.popup-gallery .vodostok .color > a ').text(vodostokColor).attr('href', '?color=' + vodostokColor);
                $('.popup-gallery .vodostok .type > a ').text(vodostokType).attr('href', '?type=' + vodostokType);
                $('.popup-gallery .vodostok .type2 > a ').text(vodostokType2).attr('href', '?type=' + vodostokType2);
                var itemTags = $(blocked).data('tags').split(',');

                jQuery('.scrollbar-rail').removeClass('scroll-wrapper');
                $('.popup-gallery .gallery-tags__item .gallery-tags__item').remove();
                jQuery('.scrollbar-rail').find('.scroll-element').remove();
                jQuery('.scrollbar-rail').off('scroll')
                $('.popup-gallery .gallery-tags__item a').remove();
                for (var i = 0; i < itemTags.length; i++) {
                    console.log(itemTags[i]);
                    $('.popup-gallery .gallery-tags__item').append('<a href="' + document.location.protocol + '//' + document.location.host + document.location.pathname + '">' + itemTags[i] + '</a>');
                    if (i == (itemTags.length - 1) && $(window).width() <= 768) {
                        jQuery('.scrollbar-rail').scrollbar();
                    }
                }
            }
        }
    });
    // var allW = $('.gallery-tags__wrap').width();
    var allW = $('.gallery-tags').width();
    var galleryText = $('.gallery-tags__text').width();
    var galleryItem = $('.gallery-tags__item:last-of-type > a');
    var customedSelect = $('.customed-select').width();
    var tagsMaxWidth = allW - customedSelect - galleryText - 13;
    var galleryItemWidth = 0;
    for (var i = 0; i < galleryItem.length; i++) {
        var galleryItemWidth = galleryItemWidth + galleryItem.eq(i).width() + 32;
        if (galleryItemWidth < tagsMaxWidth) {
            galleryItem.eq(i).show();
        } else {
            galleryItem.eq(i).hide();
        }

    }
    $(window).resize(function() {
        var allW = $('.gallery-tags').width();
        var galleryText = $('.gallery-tags__text').width();
        var galleryItem = $('.gallery-tags__item:last-of-type > a');
        var customedSelect = $('.customed-select').width();
        var tagsMaxWidth = allW - customedSelect - galleryText - 13;
        var galleryItemWidth = 0;
        for (var i = 0; i < galleryItem.length; i++) {
            var galleryItemWidth = galleryItemWidth + galleryItem.eq(i).width() + 32;
            if (galleryItemWidth < tagsMaxWidth) {
                galleryItem.eq(i).show();
            } else {
                galleryItem.eq(i).hide();
            }

        }
    })

    //     var myElement = document.getElementById('touchSideSwipe');
    //
    // // create a simple instance
    // // by default, it only adds horizontal recognizers
    //     var mc = new Hammer(myElement);
    //
    // // let the pan gesture support all directions.
    // // this will block the vertical scrolling on a touch-device while on the element
    //     mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    //
    // // listen to events...
    //     mc.on("panleft panright panup pandown tap press", function(ev) {
    //         // myElement.textContent = ev.type +" gesture detected.";
    //     });
    //
    var obj = document.getElementById('pc-hiddend1');
    var obj2 = document.getElementById('touchSideSwipe');
    /*Ловим касание*/
    obj.addEventListener('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            // touchOffsetX = touch.pageX - touch.target.offsetLeft;
            touchOffsetY = touch.pageY - touch.target.offsetTop;
        }
    }, false);
    /*Передвигаем объект*/
    obj.addEventListener('touchmove', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            // var currentBottom = obj2.style.bottom;
            // obj2.style.bottom = 160 - touch.pageY-touchOffsetY + 'px';
            if (touch.pageY - touchOffsetY >= -150) {
                obj2.style.transform = "translateY(" + (touch.pageY - touchOffsetY) + "px)";
            }
        }
    }, false);

    obj.addEventListener('touchend', function(event) {
        if (event.changedTouches.length == 1) {
            var styleBottom = obj2.style.transform;
            styleBottom = styleBottom.replace('px)', '');
            styleBottom = styleBottom.replace('translateY(', '');
            if (parseInt(styleBottom, 10) >= 80) {

                $('.popup-open-btns-bg').hide();
                $('html,body').removeClass('overflow-h');
                $('html').css('padding-right', '');
                obj2.style.transition = "0.3s all";
                obj2.style.transform = 'translateY(1000px)';
                setTimeout(function() {
                    $('.aside-mob-fixed').removeClass('active');

                    $('.filter-gallery').hide();
                    $('.category-gallery').hide();

                    setTimeout(function() {
                        obj2.style.transition = "0.1s bottom";
                        obj2.style.transform = '';
                    }, 250);
                }, 250);
                // $(obj2[0]).animate('transformY','1000px');
            } else {
                obj2.style.transform = '';
            }
        }
    }, false);

    var obj = document.getElementById('pc-hiddend2');
    var obj2 = document.getElementById('touchSideSwipe');
    /*Ловим касание*/
    obj.addEventListener('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            // touchOffsetX = touch.pageX - touch.target.offsetLeft;
            touchOffsetY = touch.pageY - touch.target.offsetTop;
        }
    }, false);
    /*Передвигаем объект*/
    obj.addEventListener('touchmove', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            // var currentBottom = obj2.style.bottom;
            // obj2.style.bottom = 160 - touch.pageY-touchOffsetY + 'px';
            if (touch.pageY - touchOffsetY >= 0) {
                obj2.style.transform = "translateY(" + (touch.pageY - touchOffsetY) + "px)";
            }

        }
    }, false);

    obj.addEventListener('touchend', function(event) {
        if (event.changedTouches.length == 1) {
            var styleBottom = obj2.style.transform;
            styleBottom = styleBottom.replace('px)', '');
            styleBottom = styleBottom.replace('translateY(', '');

            if (parseInt(styleBottom, 10) >= 80) {
                $('.popup-open-btns-bg').hide();
                $('html,body').removeClass('overflow-h');
                $('html').css('padding-right', '');
                obj2.style.transition = "0.3s all";
                obj2.style.transform = 'translateY(1000px)';
                setTimeout(function() {
                    $('.aside-mob-fixed').removeClass('active');

                    $('.filter-gallery').hide();
                    $('.category-gallery').hide();

                    setTimeout(function() {
                        obj2.style.transition = "0.1s bottom";
                        obj2.style.transform = '';
                    }, 250);
                }, 250);
            } else {
                obj2.style.transform = '';
            }
        }
    }, false);
    $('.search-tooltip').click(function(e) {
        e.stopPropagation();
    })
    $('.search-tooltip a').click(function(e) {

        e.preventDefault();
        $('.filter-gallery__submit button').trigger('click');
    });

    if ($(window).width() <= 768) {
        // $(window).scroll(function(){
        //     $('.add-btn-open-filter').toggleClass('active', $(this).scrollTop() > 300 );
        // });

        var mywindow = $(window);
        var mypos = mywindow.scrollTop();
        var up = false;
        var newscroll;


        mywindow.scroll(function() {
            newscroll = mywindow.scrollTop();
            var footer = $('#footer').offset().top - 800;
            console.log(newscroll);
            console.log(footer);
            if (newscroll < 1000) {
                $('.add-btn-open-filter').removeClass('active');
            } else {
                $('.add-btn-open-filter').addClass('active');
            }


            mypos = newscroll;

        });
        $('.popup-open-filter-gallery, .add-btn-open-filter').click(function(e) {
            var pbM = $('#wrapper-btu').height();
            $('.aside-mob-fixed form').css('padding-bottom', pbM);
        });
        $('.block-gallery-hidden').appendTo('.block-gallery__right-column-mobile');




    }

});