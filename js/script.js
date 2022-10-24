var mySwiper = undefined;
function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 992 && mySwiper == undefined) {            
        mySwiper = new Swiper('.image-slider', {            
            spaceBetween: 0,
            freeMode: true,
            pagination {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (screenWidth > 991 && mySwiper != undefined) {
        mySwiper.destroy();
        mySwiper = undefined;
        Swiper('.swiper-wrapper').removeAttr('style');
        Swiper('.swiper-slide').removeAttr('style');            
    }        
}
initSwiper();
$(window).on('resize', function(){
    initSwiper();        
});