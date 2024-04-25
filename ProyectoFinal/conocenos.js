$(document).ready(function(){
    // Inicializa los carouseles para que cambien automáticamente cada 3 segundos
    $('.carousel').carousel({
        interval: 3000, // Intervalo de cambio en milisegundos (en este caso, 3 segundos)
        pause: 'hover' // Pausa el carrusel al pasar el ratón sobre él
    });

    // Agrega controles de navegación (anterior y siguiente) al carrusel
    $('.carousel-control-prev').click(function(){
        $('.carousel').carousel('prev');
    });

    $('.carousel-control-next').click(function(){
        $('.carousel').carousel('next');
    });

    // Agrega indicadores de diapositivas al carrusel
    $('.carousel').on('slid.bs.carousel', function () {
        var activeSlideIndex = $('.carousel-item.active').index();
        $('.carousel-indicators li').removeClass('active');
        $('.carousel-indicators li[data-slide-to="' + activeSlideIndex + '"]').addClass('active');
    });

    // Activa la navegación táctil en dispositivos móviles
    $('.carousel').on('touchstart', function(event){
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function(event){
            var xMove = event.originalEvent.touches[0].pageX;
            if( Math.floor(xClick - xMove) > 5 ){
                $(this).carousel('next');
            }
            else if( Math.floor(xClick - xMove) < -5 ){
                $(this).carousel('prev');
            }
        });
        $('.carousel').on('touchend', function(){
            $(this).off('touchmove');
        });
    });

    // Activa la navegación con teclado
    $(document).keydown(function(e) {
        if (e.keyCode == 37) {
            $('.carousel').carousel('prev'); // Flecha izquierda
        }
        else if (e.keyCode == 39) {
            $('.carousel').carousel('next'); // Flecha derecha
        }
    });
});
