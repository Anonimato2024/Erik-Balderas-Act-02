// Espera a que el documento esté listo
$(document).ready(function() {
    // Captura el evento de envío del formulario con id 'pedidoForm'
    $('#pedidoForm').submit(function(e) {
        e.preventDefault(); // Evita el envío del formulario por defecto

        // Obtiene los valores de los campos del formulario
        var nombre = $('#nombre').val();
        var sopa = $('#sopas').val();
        var segundo = $('#segundos').val();
        // Obtiene los valores de las gaseosas seleccionadas
        var gaseosas = $('input[type=checkbox]:checked').map(function() {
            return $(this).val();
        }).get();

        // Convierte los valores de las gaseosas en una cadena separada por comas
        var gaseosasStr = gaseosas.slice(0, 2).join(', ');

        // Verifica si todos los campos requeridos están completos
        if (nombre && sopa && segundo && gaseosas.length > 0) {
            // Agrega una fila a la tabla de pedidos con la información del pedido
            $('#pedidosBody').append('<tr><td>' + nombre + '</td><td>' + sopa + '</td><td>' + segundo + '</td><td>' + gaseosasStr + '</td><td><button class="btn btn-secondary editar">Editar</button></td></tr>');

            // Reinicia los valores de los campos del formulario
            $('#nombre').val('');
            $('#sopas').val('');
            $('#segundos').val('');
            $('input[type=checkbox]').prop('checked', false);

            // Muestra un mensaje de agradecimiento al usuario
            alert('¡Gracias por su pedido, ' + nombre + '!');
        } else {
            // Muestra un mensaje de error si algún campo está incompleto
            alert('Por favor, complete todos los campos antes de enviar el pedido.');
        }
    });

    // Captura el evento de clic en el botón 'Editar' dentro de una fila de la tabla
    $(document).on('click', '.editar', function() {
        // Obtiene la fila que contiene el botón 'Editar'
        var row = $(this).closest('tr');
        // Obtiene los valores de la fila seleccionada
        var nombre = row.find('td:eq(0)').text();
        var sopa = row.find('td:eq(1)').text();
        var segundo = row.find('td:eq(2)').text();
        var gaseosas = row.find('td:eq(3)').text().split(', ');

        // Llena los campos del formulario con los valores obtenidos
        $('#nombre').val(nombre);
        $('#sopas').val(sopa);
        $('#segundos').val(segundo);
        $('input[type=checkbox]').prop('checked', false);
        // Marca las gaseosas seleccionadas en el formulario
        gaseosas.forEach(function(gaseosa) {
            $('input[type=checkbox][value="' + gaseosa + '"]').prop('checked', true);
        });

        // Elimina la fila seleccionada de la tabla
        row.remove();
    });
});
