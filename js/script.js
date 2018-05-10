
$(document).ready(function() {
    var header = $('.header-wrapper');
    var h = header.height();
    
    $(window).scroll(function(){
       if($(this).scrollTop()>h){
            header.addClass('sticky')
        } else if ($(this).scrollTop()<h){
            header.removeClass('sticky');
        }
    });
});
