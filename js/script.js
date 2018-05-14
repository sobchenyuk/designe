
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

    
});
