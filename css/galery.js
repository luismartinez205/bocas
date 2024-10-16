

const galleryItems = document.querySelectorAll('.aside div');
const overlay = document.querySelector('.overlay');
const largeImage = document.getElementById('largeImage');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const bgImage = item.style.backgroundImage;
    // Extraemos la URL de la imagen de fondo (sin comillas)
    const imageUrl = bgImage.slice(5, -2);
    largeImage.src = imageUrl;
    overlay.classList.add('show');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
});

//traductor de google api
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'en,es,fr,de,it,ru,zh-CN,pt,ja',}, 'google_translate_element');
  }  
  function triggerTranslate() {
    // Asegura que el iframe del menú de idiomas esté cargado
    var frame = document.querySelector('.goog-te-menu-frame');
    if (frame) {
      // Espera a que el contenido del iframe esté disponible
      frame.onload = function() {
        // Encuentra el botón de traducción al inglés dentro del iframe
        var englishOption = frame.contentWindow.document.querySelector('span[lang="en"]');
        if (englishOption) {
          englishOption.click();  // Activa la traducción al inglés
        }
      };
    } else {
      // Si el iframe no está cargado aún, espera 500ms y reintenta
      setTimeout(triggerTranslate, 500);
    }
  }

  //fin traductor de google

  
  






