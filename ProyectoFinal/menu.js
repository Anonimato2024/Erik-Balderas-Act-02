$(document).ready(function() {
    // Datos del menú
    var menuData = [
        { 
            imgSrc: 'img/Locro.jpg', 
            title: 'Locro de Gallina Criolla', 
            description: '¡Disfruta de nuestro delicioso Locro de Gallina con descuento especial! ¡Auténtico sabor tradicional sin esperas! ¡No te lo pierdas!' 
        },
        { 
            imgSrc: 'img/Smani.jpg', 
            title: 'Sopa de Mani', 
            description: '¡Disfruta de nuestra nutritiva Sopa de Maní. Hemos mejorado la receta con menos grasa saturada y más nutrientes. ¡No te lo pierdas!' 
        },
        { 
            imgSrc: 'img/Majau.jpg', 
            title: 'Majadito', 
            description: '¡Prueba nuestro delicioso y nutritivo Majadito con carne de res, arroz y plátano maduro! Disfruta de una comida reconfortante y llena de sabor. ¡No te lo pierdas!' 
        },
        { 
            imgSrc: 'img/PiqueM.png', 
            title: 'Pique Macho', 
            description: '¡Saborea nuestro Pique Macho con carne de res, chorizo, cebolla, tomate y papas fritas! ¡Una explosión de sabor en cada bocado! ¡No te lo pierdas!' 
        },
        { 
            imgSrc: 'img/Silpancho.jpg', 
            title: 'Silpancho', 
            description: '¡Descubre nuestro exquisito Silpancho con descuento especial! Sabor auténtico y delicioso que te sorprenderá. ¡Aprovecha esta oferta única!' 
        },
        { 
            imgSrc: 'img/ChiChapo.jpg', 
            title: 'Chicharron de Pollo', 
            description: '¡Disfruta de nuestro crujiente y delicioso Chicharrón de Pollo! Ideal para compartir o como plato principal. ¡No te lo pierdas!' 
        },
        { 
            imgSrc: 'img/Refresco.png', 
            title: 'Refrescos', 
            description: 'Disfruta nuestro riquisimos refrescos, ya sea de maracuya, naranja o frutilla, acompaña bien tus esquisitos platos de comida.' 
        },
        { 
            imgSrc: 'img/Gaseosa.png', 
            title: 'Gaseosas', 
            description: 'Elige lo que mejor te acompañe, Coca-Cola, Fanta o Sprite, las comidas van mejor con el sabor que mas disfrutes, elige ya.' 
        }
    ];

    // Generar las tarjetas del menú con animación al cargar
    var menu = $('#menu');
    menuData.forEach(function(item, index) {
        var card = `
            <div class="col-md-3" style="display:none;">
                <div class="card">
                    <img src="${item.imgSrc}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>
        `;
        menu.append(card);
        // Animación de aparición con retraso para cada tarjeta
        menu.find('.col-md-3').eq(index).delay(index * 100).fadeIn(500);
    });

    // Agregar efecto de hover para resaltar las tarjetas
    menu.on('mouseenter', '.card', function() {
        $(this).addClass('shadow-lg').css('cursor', 'pointer');
    }).on('mouseleave', '.card', function() {
        $(this).removeClass('shadow-lg');
    });

    // Filtrar tarjetas del menú mediante búsqueda
    $('#search').on('input', function() {
        var searchQuery = $(this).val().toLowerCase();
        menu.find('.card').each(function() {
            var title = $(this).find('.card-title').text().toLowerCase();
            var description = $(this).find('.card-text').text().toLowerCase();
            if (title.indexOf(searchQuery) === -1 && description.indexOf(searchQuery) === -1) {
                $(this).fadeOut(300);
            } else {
                $(this).fadeIn(300);
            }
        });
    });
});
