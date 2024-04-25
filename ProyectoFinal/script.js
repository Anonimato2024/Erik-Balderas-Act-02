$(document).ready(function(){
    // Llama a la función para redimensionar la imagen de bienvenida cuando el documento esté listo
    resizeWelcomeImage();

    // Inicializa un temporizador para optimizar el rendimiento
    var resizeTimer;
    
    // Escucha el evento de redimensionamiento de la ventana
    $(window).on('resize', function(){
        // Limpia el temporizador existente si existe
        clearTimeout(resizeTimer);
        
        // Inicia un nuevo temporizador para retrasar la ejecución de la función
        resizeTimer = setTimeout(function() {
            // Llama a la función para redimensionar la imagen de bienvenida después de que se detenga el redimensionamiento de la ventana
            resizeWelcomeImage();
        }, 250); // 250 milisegundos de retraso
    });
});

// Función para redimensionar la imagen de bienvenida
function resizeWelcomeImage(){
    // Obtiene la altura de la ventana del navegador
    var windowHeight = $(window).height();
    // Establece la altura de la imagen de bienvenida igual a la altura de la ventana
    $('#welcome-image').css('height', windowHeight + 'px');
}
