var isIE = navigator.userAgent.indexOf('Trident') > -1;

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh2 = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh2}px`);
    // if(Math.abs(vh - vh2) > 1){
    //     console.log('here')
    //     document.documentElement.style.setProperty('--vh', `${vh2}px`);
    //
    // }
});
let words = {
    "productFavHint": 'В обране'
}

//smooth scroll
$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

//page navigation nav start
$('.page__navigation a.active').click(function (e) {
    e.preventDefault()
})
//page navigation nav end

//header scripts start----------------------------------------------------------------------------
//for menu start----------------------------------------
function unlockBg() {
    clearMarginInsteadScrollBody();
    $("body").removeClass('locked');
    $(window).scrollTop($('body').attr('data-pos'));
}

function lockBg() {
    makeMarginInsteadScrollBody()
    // when popup opens
    $('body').attr('data-pos', $(window).scrollTop()); // get actual scrollpos
    $('body').addClass('locked'); // add class to body
    $('.layout').scrollTop($('body').attr('data-pos')); // let wrapper scroll to scrollpos

}

function showDarkMenuBg() {
    $('.side-menu__bg').addClass('active')

}

function hideDarkMenuBg() {
    $('.side-menu__bg').removeClass('active')

}

function showMainMenu() {
    $('.menu-main-container').addClass('active')

}

function makeMarginInsteadScrollBody() {
    $('.layout ').css('margin-right', (window.innerWidth - $('body').width()) + 'px');
}

function clearMarginInsteadScrollBody() {
    $('.layout').css('margin-right', 0 + 'px');
}

function hideMainMenu() {
    $('.menu-main-container').removeClass('active')

}

// menu category open/close
$('.unit-toggle-span').click(function (e) {
    $(this).toggleClass('active')
    $(this).parent().find('.submenu-list').toggleClass('active')
})

//main menu.close btn click
$('.menu-main-top .menu-mob').click(function (e) {
    hideMainMenu();
    hideDarkMenuBg();
    unlockBg();
    hideMobileSearchBlock()
})

//main menu.close menu when click in background
$('.side-menu__bg').click(function (e) {
    hideMainMenu();
    hideDarkMenuBg();
    unlockBg();
    hideMobileSearchBlock()
    hidePopup();

})

//main menu.hamburger click
$('.menu').click(function (e) {
    showMainMenu();
    showDarkMenuBg();
    lockBg();
})

//for menu end-----------------------------------------

//auth start
$('.user__name').hover(function (e) {
    showAuthMenu()
    hideProgressPopup()
})
$('.user__photo').hover(function (e) {
    showAuthMenu()
    hideProgressPopup()
})
$('.user__progress_bar_block').hover(function (e) {
    if (!isAuthMenuOpen()) {
        showProgressPopup()
        hideAuthMenu()
    }
})
$('.user__progress_bar_block .icon-close').click(function (e) {
    hideProgressPopup()
})
$('.auth__menu  .icon-close').click(function (e) {
    hideAuthMenu()
})

function isAuthMenuOpen() {
    return $('.auth__menu').hasClass('active')
}

function showAuthMenu() {
    $('.auth__menu').addClass('active')
}

function hideAuthMenu() {
    $('.auth__menu').removeClass('active')
}

function showProgressPopup() {
    $('.user__progress__popup').addClass('active')
}

function hideProgressPopup() {
    $('.user__progress__popup').removeClass('active')
}

if (document.querySelector('.user__status__block')) {
    setProgresBar(+document.querySelector('.user__status__block').dataset.percent)
}

function setProgresBar(percent) {
    let w = 0;
    if (screen.width > 900) {
        w = 200 * +percent / 100;
        $('body').append('<style>.user__progress_bar:after{width: ' + w + 'px;}</style>');

    } else {
        w = +percent;
        $('body').append('<style>.user__progress_bar:after{width: ' + w + '%;}</style>');


    }

}

//auth end


//search start ----------------------------------------

//mobile search block. clear input
$('.search-mobile-form-input-clear').click(function (e) {
    e.preventDefault();
    clearMobileSearchInput()
})

//mobile search block. close btn click
$('.search-mobile-form-close .icon-close').click(function (e) {
    hideMobileSearchBlock()

})

//mobile search block. open btn click (in mobile menu)
$('.mobile-search').click(function (e) {
    e.preventDefault()
    hideMainMenu()
    showMobileSearchBlock()
})
$('.search-btn').click(function (e) {
    e.preventDefault()
    showDarkMenuBg();
    lockBg();
    showMobileSearchBlock()
})
//mobile search block.make search btn click.
$('.search-mobile-form-input-btn').click(function (e) {
    e.preventDefault();
    makeSearchRequest($('#search-mobile').val());
})

//pc. make search btn click
$('.search-btn').click(function (e) {
    e.preventDefault();
    makeSearchRequest($('#search-pc-str').val());

})

function showMobileSearchBlock() {
    $('.search-mobile-form').addClass('active')
}

function hideMobileSearchBlock() {
    $('.search-mobile-form').removeClass('active')
    unlockBg();
    hideDarkMenuBg()
}

function clearMobileSearchInput() {
    $('#search-mobile').val("")
}

//search end ----------------------------------------

//header scripts end -----------------------------------------------------------------------------
if (document.querySelector('.products-slider')) {
    $('.products-slider').slick({
        slidesToShow: 5,
        arrows: true,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: 'calc(100% - 310px)',
                }
            }
        ]
    });
}
if (document.querySelector('.beneficial-offers-slider')) {
    $('.beneficial-offers-slider').slick({
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
if (document.querySelector('.banner-slider-pc')) {
    $('.banner-slider-pc').slick({
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: false,
                    arrows: false
                }
            }]
    });
}
if (document.querySelector('.banner-slider-mobile')) {
    $('.banner-slider-mobile').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        lazyLoad: 'ondemand',
    });
}

if (!isIE) {


    let tippy1 = document.querySelector('.text-templates .productFavHint');
    tippy('.set-favourite a:not(.active)', {
        content: tippy1.innerHTML,
        theme: 'light',

    });
    let tippy2 = document.querySelector('.text-templates .add-to-cartHint');
    tippy('.add-to-cart', {
        content: tippy2.innerHTML,
        theme: 'light',

    });
}

$('.current-language').click(function (e) {
    e.preventDefault()
    if (!$('.language-list').hasClass('active')) {
        $('.language-list').addClass('active')
    } else {
        $('.language-list').removeClass('active')

    }
})
let authCloseTimer;
$('.auth').mouseover(function (e) {
    clearTimeout(authCloseTimer);

})
$('.auth').mouseleave(function (e) {
    clearTimeout(authCloseTimer);
    authCloseTimer = setTimeout(function (e) {
        hideAuthMenu()
        hideProgressPopup()
    }, 200)

})
$(document).ready(function () {


    $(document).click(function (e) {
        //language block when click outside
        let language = $(".language");
        if (!language.is(e.target) && language.has(e.target).length === 0) {
            $('.language-list').removeClass('active')
        }

        //catalog page. sort block when click outside
        let selected__method = $(".selected__method");
        if (!selected__method.is(e.target) && selected__method.has(e.target).length === 0 && screen.width > 576) {
            $('.method__list').removeClass('active')
        }
        //auth block
        let auth__menu = $(".auth__menu");
        let user__data = $(".user__data");
        if (!auth__menu.is(e.target) && auth__menu.has(e.target).length === 0 &&
            !user__data.is(e.target) && user__data.has(e.target).length === 0) {
            hideAuthMenu()
        }
        //auth block
        let progressPopup = $(".user__progress_bar_block");
        if (!progressPopup.is(e.target) && progressPopup.has(e.target).length === 0) {
            hideProgressPopup()
        }
        //draw up order page
        let pay_from_bal_btn = $(".pay_from_bal_btn");
        let pay_from_bal_popup = $("..buttons-row .drop_list");
        if (!pay_from_bal_btn.is(e.target) && pay_from_bal_btn.has(e.target).length === 0 &&
        !pay_from_bal_popup.is(e.target) && pay_from_bal_popup.has(e.target).length === 0) {
            closePayPopup()
        }

        //cabinet. oblik to range popup close
        //
        //  let rangePopup = $(".date_range_popup ");
        //  let rangeTitle = $(".range_title");
        // if (!rangePopup.is(e.target) && rangePopup.has(e.target).length === 0 &&
        //     !rangeTitle.is(e.target) && rangeTitle.has(e.target).length === 0 &&
        //     rangePopup.hasClass('active')) {
        //     closeRangePopup();
        // }


    })
})
$(document).on('click', '.minus', function (e) {
    if (!isAvailableProductItem(e)) return;
    counteReduce(e);
    e.preventDefault()
});

function isAvailableProductItem(e) {
    if ($(e.target).parents('.item').hasClass('not-available')) {
        return false;
    }
    return true;
}

$(document).on('click', '.plus', function (e) {
    if (!isAvailableProductItem(e)) return;
    counterIncrease(e);
    e.preventDefault()
});

//counter in  product item. check if input only number
$('.counter input').keyup(function (e) {
    let text = e.target.value;
    let testText = text;
    let step = +e.target.dataset.step || 1;
    let correctNumber;
    if (testText * 1 + 0 != text) {
        correctNumber = testText.substring(0, testText.length - 1)
        if (isNaN(correctNumber)) {
            correctNumber = step;
        }
        e.target.value = correctNumber;

    }

});

//counter in  product item. checl input with correct step
$('.counter input').change(function (e) {
    let step = +e.target.dataset.step || 1;
    e.target.value = round(e.target.value, step)
})


function round(number, step) {
    let num = Math.ceil(number / step) * step;
    if (num == 0) {
        num = step
    }
    return num;
}

function checkCounterValue(e) {
}

function counterIncrease(e) {
    e.preventDefault()
    let input = e.target.parentNode.querySelector('input');
    let step = +input.dataset.step || 1;
    input.value = +input.value + step;
}

function checkNumber(e) {
    if ((e.which >= 48 && e.which <= 57) // цифры
        ||
        (e.which >= 96 && e.which <= 105) // num lock
        ||
        e.which == 8 // backspace
        ||
        (e.which >= 37 && e.which <= 40) // стрелки
        ||
        e.which == 46) // delete
    {
        return true;
    } else {
        return false;
    }
}

function counteReduce(e) {
    e.preventDefault()
    let input = e.target.parentNode.querySelector('input');
    let step = +input.dataset.step || 1;
    let value = +input.value;
    if (value > step) {
        input.value = value - step;
    }
}

document.querySelectorAll('.rating').forEach(el => {
    setStarInPercent(el, el.dataset.rate)
})

function setStarInPercent(element, percent) {
    let a = percent % 20;
    let b = Math.trunc(percent / 20)
    let i = 0;
    for (i; i < b; i++) {
        element.querySelectorAll('.rateStarPopup')[i].classList.add('active')
    }
    if (a < 10 && a > 0) {
        element.querySelectorAll('.rateStarPopup')[i].classList.add('active25')
    }
    if (a > 10) {
        element.querySelectorAll('.rateStarPopup')[i].classList.add('active75')
    }
    if (a == 10) {
        element.querySelectorAll('.rateStarPopup')[i].classList.add('active50')
    }
}


//catalog page start
function priceSliderInit() {
    let element = document.querySelector('.valueMin').closest('.item')
    let minValue = +document.querySelector('.valueMin').dataset.valuemin;
    let maxValue = +document.querySelector('.valueMax').dataset.valuemax;
    $("#slider-range").slider({
        range: true,
        min: minValue,
        max: maxValue,
        values: [minValue, maxValue],
        slide: function (event, ui) {
            $("#min").val(ui.values[0])
            $("#max").val(ui.values[1])
            changePrice();
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
}

function showFilterBlock() {
    $('.catalog-filters').addClass('active')
    lockBg()
}

function hideFilterBlock() {
    $('.catalog-filters').removeClass('active')
    unlockBg();
}

if (document.querySelector('.catalog')) {
//sort popup
    $('.selected__method').click(function (e) {
        e.preventDefault()
        if (!$('.method__list').hasClass('active')) {
            $('.method__list').addClass('active')
        } else {
            $('.method__list').removeClass('active')

        }
    })
    //filters open
    $('.f-title').click(function (e) {
        e.preventDefault()
        if (!$(this).parent().find('.content').hasClass('active')) {
            $(this).parent().find('.content').addClass('active')
            $(this).addClass('active')
        } else {
            $(this).parent().find('.content').removeClass('active')
            $(this).removeClass('active')

        }
    })

//price slider

    priceSliderInit()

    //filters toggle btn. mobile
    $('.toggle__filter_mobile').click(function (e) {
        e.preventDefault()
        showFilterBlock();
    })
    $('.toggle__filter_sort').click(function (e) {
        e.preventDefault()
        showSortingBlock();
    })
    $('.close__sorting').click(function (e) {
        e.preventDefault()
        hideSortingBlock();
    })
    //close filter. click close btn
    $('.catalog-filters .icon-close').click(function (e) {
        e.preventDefault()
        hideFilterBlock()
    })

}

function hideSortingBlock() {
    $('.method__list').removeClass('active')
    $('.sort__method').removeClass('active')
    unlockBg()
}

function showSortingBlock() {
    $('.method__list').addClass('active')
    $('.sort__method').addClass('active')
    lockBg()
}

//filter start

let timeOutFilterRequest;

function filterRequest() {
    let filterForm = document.querySelector('#turcoffee_product_filter')
    for (var i = 0; i < filterForm.elements.length; i++) {
        if (filterForm.elements[i].checked) {
            var fieldName = filterForm.elements[i].name;
            var fieldValue = filterForm.elements[i].value;

        }
    }
}

function sendWithTimeOut() {
    clearTimeout(timeOutFilterRequest);
    timeOutFilterRequest = setTimeout(() => {
        filterRequest();
    }, 1500)
}

function changePrice() {
    sendWithTimeOut();
}

let filtersContainer = document.querySelector('.catalog-filters');
if (filtersContainer) {
    filtersContainer.addEventListener('click', function (e) {
        let curElement = e.target;
        if (curElement.tagName.toUpperCase() == 'INPUT') {
            sendWithTimeOut()
            return;
        }
    })
}
//filter end


//catalog page end

//product page start

// product img slider start
if (document.querySelector('.product__media-main__img')) {
    $(".product__media-main__img").slick({
        asNavFor: ".product__media-thumbs",
        arrows: false
    });
}
if (document.querySelector('.product__media-thumbs')) {
    $(".product__media-thumbs").slick({
        arrows: true,
        slidesToShow: 2,
        asNavFor: ".product__media-main__img",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
}
if (document.querySelector('.product__media-main__img')) {
    $('.product__media-main__img').slickLightbox({
        src: 'href',
        itemSelector: 'a'
    });
}

//cut description
if (document.querySelector('.product__description__content')) {
    //hide children if more than 2
    let child = $('.product__description__content').children(":not(:nth-child(1)):not(:nth-child(2)):not(.product__show__more)");

    let contentDiv = $('.product__description__content__hidden__text');
    contentDiv.prepend(child);
    $('.product__description__content__hidden__text').slideUp()
}
//show all description
$('.product__show__more').click(function (e) {
    $(this).parents('.product__description').addClass('active')
    $('.product__description__content__hidden__text').slideDown()

})
$('.product__show__less').click(function (e) {
    $(this).parents('.product__description').removeClass('active')
    $('.product__description__content__hidden__text').slideUp()

})

//product page end
//login popup start

if (document.querySelector('.login_popup')) {

    $('.menu-main-top-auth a:first-child').click(function (e) {
        e.preventDefault()
        let popup = document.querySelector('.login_popup')

        if (popup.classList.contains('active')) {
            hideLoginPopup()
        } else {
            showLoginPopup()
        }
    })
    $('.login-event-trigger').click(function (e) {
        e.preventDefault()
        let popup = document.querySelector('.login_popup')
        if (popup.classList.contains('active')) {
            hideLoginPopup()
        } else {
            showLoginPopup()
        }
    })
    $('.auth-block a:first-child').click(function (e) {
        e.preventDefault()
        let popup = document.querySelector('.login_popup')

        if (popup.classList.contains('active')) {
            hideLoginPopup()
        } else {
            showLoginPopup()
        }
    })

}

function showLoginPopup() {
    showDarkMenuBg()
    lockBg()
    document.querySelector('.login_popup').classList.add('active')
}

function hideLoginPopup() {
    hideDarkMenuBg()
    unlockBg()
    document.querySelector('.login_popup').classList.add('active')
}

//login popup end


function makeSearchRequest(dataStr) {
}

//lazy load video from youtube start

function findVideos() {
    let videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('.video__media');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

function initVideo(videoTag) {
    let link = videoTag.querySelector('.video__link').href;
    let video_id = link.split('v=')[1];
    let ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }
    let img_source = videoTag.querySelector('source');
    let img_source_src = "https://i.ytimg.com/vi_webp/" + video_id + "/maxresdefault.webp"
    img_source.setAttribute('srcset', img_source_src)
    let img_prev = videoTag.querySelector('.video__media');
    let img_prev_src = "https://i.ytimg.com/vi/" + video_id + "/maxresdefault.jpg"
    img_prev.setAttribute('src', img_prev_src)
    findVideos();
}

if (document.querySelector('.video')) {
    initVideo(document.querySelector('.video'))

}
//load video from youtube end


//# sourceMappingURL=main.js.map


var doc = document.documentElement;
var w = window;
var prevScroll = w.scrollY || doc.scrollTop;
var curScroll;
var direction = 0;
var prevDirection = 0;

var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;


    if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
    }
    else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
    }
    if (curScroll > 500) {
        showProductAltMenu()
    } else {
        hideProductAltMenu()

    }

    prevScroll = curScroll;
};
window.addEventListener('scroll', checkScroll);

function showProductAltMenu() {
    $('.alt-product-menu').addClass('active')
}

function hideProductAltMenu() {
    $('.alt-product-menu').removeClass('active')
}

//cart page start
$('.repeat_order_btn').click(function (e) {
    e.preventDefault();
    showOrderPopup()
})
$('.pickup_stocks_btn').click(function (e) {
    e.preventDefault();
    toggleStockProduct()
})

function toggleStockProduct() {
    $('.cart_stocks_container ').toggleClass('hidden')
}

function showOrderPopup() {
    $('.order_popup').addClass('active')
    showDarkMenuBg()
    lockBg()
}

function hidePopup() {
    $('.default_popup').removeClass('active')
}

$('.popup_close').click(function () {
    hidePopup();
    unlockBg();
    hideDarkMenuBg()
})

$('.title-line-block-text-text').click(function () {
    $('.cart').toggleClass('new')
})
//cart page end


//cabinet start

//oblik to start

if (document.querySelector('.title_range_block')) {
    $('.title_range_block').click(function () {
        openRangePopup()
    })
    $('.cancel_range').click(function (e) {
        e.preventDefault()
        closeRangePopup();
    })
}

function openRangePopup() {
    document.querySelector('.date_range_popup').classList.add('active')
}

function closeRangePopup() {
    document.querySelector('.date_range_popup').classList.remove('active')
}

//oblik to end


//tabs on cabinet main page
if (document.querySelector('[data-tab-target]')) {
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            tabs.forEach(el => el.classList.remove('active'))
            tabContents.forEach(tabContent => {
                tabContent.style.display = "none";
                tabContent.style.opacity = "0";
            })
            // target.classList.add('active')
            target.style.display = "block";
            tab.classList.add('active')
            setTimeout(() => {
                target.style.opacity = "1";
            }, 100)
        })
    })
    tabs[0].classList.add('active')
    tabContents[0].style.display = "block";
}
//tabs on cabinet main end
if (document.querySelector('.cabinet_cooperation_form')) {
    $('.entrepreneur').find('input[type=text]').prop("disabled", true);

    $('.cabinet_cooperation_form input[type=radio]').click(function (e) {
        $(this).parents('.form__in').find('input[type=text]').prop("disabled", true);
        if ($(this).attr("checked") == "checked") {
            $(this).parents('.part_row').find('input[type=text]').prop("disabled", false);
        }
        ;
    })
}

//history
if (document.querySelector('.history_table')) {
    $('.show_more_history').click(function (e) {
        e.preventDefault()
        $(this).parents('.h_row').toggleClass('active')
        $(this).parents('.h_row').find('.h_add_content').slideToggle()
    })
    $('.h_close').click(function (e) {
        e.preventDefault();
        $(this).parents('.h_row').find('.h_add_content').slideUp()

        $(this).parents('.h_row').removeClass('active')

    })

}

//partners start
if (document.querySelector('.partner_row button')) {
    $('.partner_row button').click(function (e) {
        e.preventDefault();
        // if(!$(this).parents('.structure_table_item').hasClass('active')) {
        //     $(this).parents('.structure_table_item_content').closest('.structure_table_item_more').slideToggle()
        //     $(this).parents('.structure_table_item').toggleClass('active')
        //   $(this).parents('.structure_table_item_content').siblings('.structure_table_item_more').slideToggle();
        // }
        let parentItem = $(this).parent().parent().parent().parent();
        let parentItemContainer = $(this).parent().parent().parent();
        console.log(parentItem)

        parentItem.toggleClass('active')
        parentItemContainer.siblings('.structure_table_item_more').slideToggle();

    })
    $('.structure_table_item_more .h_close').click(function (e) {
        $(this).parent('.structure_table_item_more').slideUp();
        $(this).parents('.structure_table_item').removeClass('active');
    })
}
if (document.querySelector('.icon_more')) {
    $('.icon_more').click(function () {
        $(this).parents('.name').toggleClass('active')
    })
}

//partners end

//cabinet end


//blog start
if (document.querySelector('.slider_blog')) {
    $('.slider_blog').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        lazyLoad: 'ondemand',
    })
}

if (document.querySelector('.blog_archive')) {
    $('.blog_archive_slider').slick({
        arrows: false,
        slidesToShow: 3,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
}
//blog end

//draw up order start
function disableAddressDelivery() {
    $('.address_info').find('input[type=text]').prop("disabled", true);
    $('.address_info').find('select').prop("disabled", true);
    $('.address_info').addClass('disabled')
}

function disableOtherDelivery() {
    let parentDiv = $('.delivery_info:not(disabled)')
    parentDiv.find('input[type=text]').prop("disabled", true);
    parentDiv.find('select').prop("disabled", true);
    parentDiv.addClass('disabled')
}

if (document.querySelector('.draw_up_order')) {
    disableAddressDelivery()

    $('.checkbox.option').click(function (e) {
        let parentDiv = $(this).parents('.delivery_info');
        if (parentDiv.hasClass('disabled')) {
            disableOtherDelivery()
            parentDiv.find('input[type=text]').prop("disabled", false);
            parentDiv.find('select').prop("disabled", false);
            parentDiv.removeClass('disabled')
        }
        // $('.delivery_info:not(.active)').find('select').prop("disabled", true);
        // $('.delivery_info:not(.active)').find('input[type=text]').prop("disabled", true);
    })
    $('.pay_from_bal_btn').click(function (e) {
        e.preventDefault()
        $('.buttons-row .drop_list').addClass('active')
    })
}
function  closePayPopup() {
    if(document.querySelector('.draw_up_order')) {
        $('.buttons-row .drop_list').removeClass('active')
    }
}
//draw up order end
let pr = new Promise((resolve,reject )=>{
    setTimeout( ()=>{
        reject('2020')
    },2000)
} )
pr.then(data=>{
    console.log(data);
})
//# sourceMappingURL=main.js.map
