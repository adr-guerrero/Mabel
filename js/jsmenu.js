$(document).ready(main);

var contador =1;

function main(){
    $('.menu_bar').click(function(){
        if (contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        }else{
            contador =1;
             $('nav').animate({
                left: '-100%'
             });
        }
    });
    //mostar y ocultar sub menus
 $('.menu_bar').click(function(){
     $('.submenu').children('.children').slideToggle();
 });
}