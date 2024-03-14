// Variable para almacenar el índice de la imagen actual
var indiceImagenActual = 0;

// Función para cambiar la imagen con una transición suave
function cambiarImagen() {
  // Obtener todas las imágenes con la clase 'transicion-imagen'
  var imagenes = document.querySelectorAll('.transicion-imagen');

  // Ocultar la imagen actual
  imagenes[indiceImagenActual].classList.add('oculto');

  // Incrementar el índice de la imagen y asegurarse de que esté dentro de los límites
  indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;

  // Mostrar la nueva imagen con una transición
  imagenes[indiceImagenActual].classList.remove('oculto');
}
