
$(document).ready(function() {
    //scroll
    (function(){

        var header = $('.header-wrapper');
        var h = header.height();
        
        $(window).scroll(function(){
        if($(this).scrollTop()>h){
                header.addClass('sticky')
            } else if ($(this).scrollTop()<h){
                header.removeClass('sticky');
            }
        }); 

    })($);

    (function(){

        var form = document.querySelector('#form');

        form.onsubmit = function(e){

            var validate = this.querySelectorAll('.validate');
            var a = 0;

            validate.forEach(function(item, i) {
    
                if(item.value === ""){
    
                    item.parentElement.classList.add('invalid');
                    a++;

                } else {

                    if(item.parentElement.classList.contains('invalid')){
                        item.parentElement.classList.remove('invalid');
                    }

                }

    
            });

            if(a > 0){
                e.preventDefault();
            }

        }

    })()
   
    $('.mobile-show-menu').click(function (){
        $('.collapseing').toggleClass('open');
    });



 
    $('.nav a').on('click',function(){
        var elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top - 70;

        $('html, body').animate({ scrollTop: destination }, 2000);
        return false;
    });

    $('.mobile-menu a').on('click',function(){
        var elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top - 350;

        $('html, body').animate({ scrollTop: destination }, 1500);
        return false;
    });
 

    
});
