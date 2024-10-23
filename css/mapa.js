
  function initMap() {
    // Opciones para el mapa
    var mapOptions = {
      
      fullscreenControl: false, // Desactiva el botón de Ampliar Mapa
    };

  }

  // Seleccionamos todos los botones del acordeón
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtener el contenido del acordeón objetivo
        const targetContent = document.querySelector(button.getAttribute('data-target'));

        // Si el contenido ya está visible, lo ocultamos
        if (targetContent.style.display === 'block') {
            targetContent.style.display = 'none';
        } else {
            // Primero cerramos todos los demás elementos
            document.querySelectorAll('.accordion-collapse').forEach(content => {
                content.style.display = 'none';
            });

            // Mostramos el contenido actual
            targetContent.style.display = 'block';
        }
    });
});


