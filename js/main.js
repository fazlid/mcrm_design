$('.register-main-item-input input').focus(function(){
$(this).parents('.register-main-item').addClass('focused');
});
    
$('.register-main-item-input input').blur(function(){
var inputValue = $(this).val();
if ( inputValue == "" ) {
$(this).parents('.register-main-item').removeClass('focused');
}
})

$(document).ready(function(){
    

var $slider = $('.mcrm__register-main-slider');

$slider.on('afterChange', function() {

if ($('.register-item-slider1').hasClass('slick-current')) {
$(".register-progress-widht").css("width", "20%");
$(".register-main-btn").html('OK');
$(window).trigger('resize');
window.dispatchEvent(new Event('resize'));
}

if ($('.register-item-slider2').hasClass('slick-current')) {
$(".register-progress-widht").css("width", "40%");
$(".register-main-btn").html('OK');
}

if ($('.register-item-slider3').hasClass('slick-current')) {
$(".register-progress-widht").css("width", "60%");
$(".register-main-btn").html('OK');
}

if ($('.register-item-slider4').hasClass('slick-current')) {
$(".register-progress-widht").css("width", "80%");
$(".register-main-btn").html('OK');
}

if ($('.register-item-slider5').hasClass('slick-current')) {
$(".register-progress-widht").css("width", "100%");
$(".register-main-btn").html('Регистрация');
}


});

 $(".mcrm__register-main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    prevArrow:"<button type='button' class='register-main-prev slick-prev pull-left'><i class='bi bi-chevron-left' aria-hidden='true'></i>Назад</button>",
    nextArrow:"<button type='button' class='register-main-btn slick-next pull-right'>OK</button>"
});
  
})
$('.tab-item1').click(function () {
$(window).trigger('resize');
window.dispatchEvent(new Event('resize'));
})
$('.tab-item2').click(function () {
$(window).trigger('resize');
window.dispatchEvent(new Event('resize'));
})
$(document).ready(function () {
$('.tab-item1').click(function () {
$('.tab-item1').addClass('tab-item-active');
$('.tab-item2').removeClass('tab-item-active');
$('.mcrm__register-blog-content1').addClass('d-block');
$('.mcrm__register-blog-content2').removeClass('d-block');
$(window).trigger('resize');
window.dispatchEvent(new Event('resize'));
})
$('.tab-item2').click(function () {
$('.tab-item1').removeClass('tab-item-active');
$('.tab-item2').addClass('tab-item-active');
$('.mcrm__register-blog-content1').removeClass('d-block');
$('.mcrm__register-blog-content2').addClass('d-block');
$(window).trigger('resize');
window.dispatchEvent(new Event('resize'));
})
})

$(document).on('click', '.home-sidebar-item', function () {
$(this).addClass('sidebar-active').siblings().removeClass('sidebar-active')
})

$(document).on('click', '.kassa-kor-col', function () {
$(this).toggleClass('kor-col-active').siblings().removeClass('kor-col-active')
})

$(document).on('click', '.procent-modal-otchet-col', function () {
$(this).toggleClass('otchet-col-active').siblings().removeClass('otchet-col-active')
})

$(document).ready(function(){
var structureLink = $(".home-sidebar-item");
for (let i = 0; i < structureLink.length; i++) {
 structureLink.eq(i).click(function() {
});
}
structureLink.click(function () {
$(".home-sidebar-item").removeClass("sidebar-active").eq(
$(this).index()).addClass("sidebar-active");
$(".mcrm__home-info-blog").hide().eq(
$(this).index()).show();
});

/* defold */
$(".mcrm__home-info-blog").eq(1).show();
$(".home-sidebar-item").eq(1).addClass("sidebar-active");
/* defold */
})

$('.blog-shop-setting').click(function () {
$(".home-blog-shop-funsion").toggleClass("shop-funsion-avtive")
$('.blog-shop-setting').toggleClass("shop-setting-active")
})

$(document).ready(function(){
var structureLink = $(".home-sidebar-item-2");
for (let i = 0; i < structureLink.length; i++) {
 structureLink.eq(i).click(function() {
});
}
structureLink.click(function () {
$(".home-sidebar-item-2").removeClass("sidebar-active-2").eq(
$(this).index()).addClass("sidebar-active-2");
$(".mcrm__home-info-blog-2").hide().eq(
$(this).index()).show();
});

/* defold */
$(".mcrm__home-info-blog-2").eq(0).show();
$(".home-sidebar-item-2").eq(0).addClass("sidebar-active-2");
/* defold */
})

$(document).ready(function(){
var structureLink = $(".mcrm__сabinet-tabs-item");
for (let i = 0; i < structureLink.length; i++) {
 structureLink.eq(i).click(function() {
});
}
structureLink.click(function () {
$(".mcrm__сabinet-tabs-item").removeClass("сabinet-tabs-active").eq(
$(this).index()).addClass("сabinet-tabs-active");
$(".сabinet-dropdown-item").hide().eq(
$(this).index()).show();
});

/* defold */
$(".сabinet-dropdown-item").eq(1).show();
$(".mcrm__сabinet-tabs-item").eq(1).addClass("сabinet-tabs-active");
/* defold */
})

$('.blog2-scaner-barcode-btn').click(function () {
$(".info-blog2-scaner-barcode").addClass("d-none")
$(".info-blog2-scaner-barcode2").addClass("d-block")
$(".click-done").addClass("d-none")
$(".click-done2").addClass("d-block")
})



/*  */

$('.scaner-checbox-click1').click(function () {
$(".checbox-click1-content").addClass("d-block")
$(".checbox-click2-content").removeClass("d-block")
$(".scaner-barcode2-tabs-title").addClass("d-none")
$(".optom-chevron-dNone").removeClass("d-none")
})

$('.scaner-checbox-click2').click(function () {
$(".checbox-click1-content").removeClass("d-block")
$(".checbox-click2-content").addClass("d-block")
$(".scaner-barcode2-tabs-title").addClass("d-none")
$(".optom-chevron-dNone").addClass("d-none")
})

$('.chevron2').click(function () {
$(".checbox-click2-blog1").removeClass("d-block")
$(".checbox-click2-blog2").addClass("d-block")
$(".checbox-click1-blog").addClass("d-none")
$(".checbox-click2-blog").addClass("d-block")
$(".blog2-scaner-quarcode").addClass("d-none")
$(".quarCode-item").addClass("d-block")

})

$('.checbox-click1-item-chec').click(function () {
$(".item-input2-NoActive").toggleClass("item-input2-Active")

})

$('.chevron-optom2').click(function () {
$(".checbox-click2-blog1").removeClass("d-block")
$(".checbox-click2-blog2").addClass("d-block")
$(".optom-dnone").addClass("d-block")
$(".click-content-optom1").addClass("d-block")
})


$('.chevron-optom1-2').click(function () {


$(".checbox-click2-blog1").addClass("d-block")
$(".checbox-click2-blog2").removeClass("d-block")

})

$('.chevron-optom2-2').click(function () {
$(".click-content-optom1").removeClass("d-block")
$(".click-content-optom2").addClass("d-block")

})

$('.chevron-optom1-3').click(function () {

$(".click-content-optom1").addClass("d-block")
$(".click-content-optom2").removeClass("d-block")

})


$('.chevron-optom2-3').click(function () {

})


$('.optom_chexbox').click(function () {
$(".checbox-click1-content").removeClass("d-block")
$(".checbox-click2-content").addClass("d-block")
$(".checbox-click2-blog2").removeClass("d-block")
})

/*   */





$('.checbox-click2-item').click(function () {
$(".checbox-click2-info").addClass("d-none")
$(".scaner-barcode2-tabs").addClass("d-none")
$(".checbox-click2-blog1").addClass("d-block")
})

$(document).on('click', '.scaner-barcode2-tabs-link', function () {
$(this).addClass('barcode2-tabs-link-avtive').siblings().removeClass('barcode2-tabs-link-avtive')
})

$(document).on('click', '.click1-item-procent-blog', function () {
$(this).addClass('item-procent-active').siblings().removeClass('item-procent-active')
})

$(document).on('click', '.checbox-click2-item', function () {
$(this).addClass('click2-item-active').siblings().removeClass('click2-item-active')
})

$(document).on('click', '.ADDshop_izmer-checbox-item', function () {
$(this).addClass('click2-item-active').siblings().removeClass('click2-item-active')
})

$(document).on('click', '.kassa_modal-setting-col', function () {
$(this).addClass('setting-col-active').siblings().removeClass('setting-col-active')
})

$(document).on('click', '.report-modal-tbody2-tr', function () {
$(this).toggleClass('report-tr-active').siblings().removeClass('report-tr-active')
})


$('.blog2-col2-main-table-tbody tr').click(function () {
$(".blog2__ADDshop-Dblock").addClass("d-block")
$(".blog2__ADDshop-addName").addClass("d-block")
$(".blog2__ADDshop-tabble").addClass("d-none")
$(".AddShop-search").addClass("d-none")
})

$('.ADDshop-chevron2').click(function () {
$(".blog2__ADDshop_NameBlog").addClass("d-none")
$(".blog2__ADDshop_izmer").addClass("d-block")
$(".blog2__ADDshop_izmer-item").addClass("d-block")

$(".blog2-scaner-quarcode").addClass("d-none")
$(".quarCode-item").addClass("d-block")
})

$('.ADDshop_izmer-checbox-item').click(function () {
$(".blog2__ADDshop_izmer").addClass("d-none")
$(".blog2__ADDshop_NameBlog").addClass("d-none")
$(".blog2__ADDshop_izmer-item2").addClass("d-block")
$(".blog2__ADDshop_izmerBIG").addClass("d-block")
})

$('.add_shop-modal').click(function () {
$(".header-addShop-item:nth-child(4)").addClass("d-block")

})

$('.kassa-kor-col').click(function () {
$(".mcrm__kassa-buarcode-icon").toggleClass("buarcode-icon")

})

$('.сabinet-dropdown-item-header').click((e) => {
$('.сabinet-dropdown-item-header').not(e.target).next().slideUp();
$(e.target).next().slideToggle();
$(e.target).toggleClass('сabinet-item-active');
$('.сabinet-dropdown-item-header').not(e.target).removeClass('сabinet-item-active');
})


$('.payment-blog2-btn22').click(function () {
$(".payment-blog2-inputs").val("2.250")

})

$('.сabinet-heaader-btn1').click(function () {
$(".mcrm__сabinet-header-title").toggleClass("d-block")
$(".сabinet-heaader-btn1").html('Подвердить');
// $(".mcrm__сabinet-email-i i").toggleClass("d-none")
})

$('.сabinet_Password-btn').click(function () {
$(".сabinet_Password_y").toggleClass("d-block")


})

$('.mcrm__сabinet-inn-btn').click(function () {
$(".mcrm__сabinet-inn").toggleClass("d-block")
$(".mcrm__сabinet-inn-i i").toggleClass("d-none")
})

$('.product-prise-btn').click(function () {
$(".settong__product-prise-content").addClass("d-block")
$(".product-prise-btn").addClass("d-none")
})

$(document).ready(function () {
$(".settong__product_option").click(function () {
$(this).parent().toggleClass("product-active-creation");
})

$(".settong__product-li").click(function () {
var currentele = $(this).html();
$(".settong__product_option li").html(currentele);
$(this).parents(".settong__product-dropdown").removeClass("product-active-creation");
})
});

$('.product-chevron1').click(function () {
$(".settong__product-sliderItem2").addClass("d-block")
$(".settong__product-sliderItem1").addClass("d-none")
})

$('.product-chevron2').click(function () {
$(".settong__product-sliderItem2").removeClass("d-block")
$(".settong__product-sliderItem1").removeClass("d-none")

})

$('.kassa_modal_return-checkbox1').click(function () {
$(".kassa_modal_return-checkbox-i-1").toggleClass("return-checkbox-active")

})

$(".report-modal-tbody-tr").on("dblclick", function() {
$("#report_modal_tbody_tr").modal("show");
})

$('#checkbox_quarcode').click(function () {
$(".scaner-quarcode-input").toggleClass("d-block")

})