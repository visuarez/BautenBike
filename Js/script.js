$(document).ready(function (){
    $window=$(window); //como llama jquery al elemento
    // hace que la 1er pantalla sea del alto del navegador
    $('#intro').height($window.height());
    $window.scroll(function (){
        $('div.background').each(function (index, item){
            var $scroll = $(item);
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            var coords = '50%' + yPos + 'px';
            $scroll.css({backgroundPosition: coords});
        }); // cierra linea 6
    }); //cierra linea 5
}); //cierra linea 1
//each > cada item en este cas tengo 3 img (dive clase background)
//como no sabe cual es el alto / speed (colocado en html)
// eje Y = - genera ese movimiento.
//var coords = X y Y > ya esta fijo es 50% y va a cambiar segun la ventana
//to con jquery puedo colocar css a los elementos (linea 10).css > backgroundPosition: coords