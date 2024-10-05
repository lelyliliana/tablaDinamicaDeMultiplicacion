// Función para generar la tabla de multiplicación
function generarTabla() {
    // Obtenemos el valor del número ingresado por el usuario
    let numero = parseInt(document.getElementById('numero').value);
    let tablaResultado = document.getElementById('tablaResultado');

    // Limpiamos cualquier tabla previa
    tablaResultado.innerHTML = '';

    // Verificamos que el número sea válido
    if (isNaN(numero) || numero < 1) {
        tablaResultado.innerHTML = 'Por favor, introduce un número válido.';
        return;
    }

    // Creamos la tabla de multiplicación en formato HTML
    let tabla = '<table>';
    for (let i = 1; i <= 10; i++) {
        tabla += `<tr><td>${numero} x ${i}</td><td>= ${numero * i}</td></tr>`;
    }
    tabla += '</table>';

    // Mostramos la tabla generada en el contenedor
    tablaResultado.innerHTML = tabla;
}

// Función para reiniciar la tabla
function reiniciarTabla() {
    // Limpiamos el campo de entrada y el contenedor de la tabla
    document.getElementById('numero').value = '';
    document.getElementById('tablaResultado').innerHTML = '';
}

