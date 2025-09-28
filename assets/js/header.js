// assets/js/header.js
(function () {
  const header = document.querySelector("header");
  if (!header) return;

  const SCROLL_THRESHOLD = 20; // píxeles antes de encoger

  // Ajusta el padding-top del body para que el contenido no quede oculto bajo el header
  function updateBodyPadding() {
    // Usamos offsetHeight para incluir padding/height real
    document.body.style.paddingTop = header.offsetHeight + "px";
  }

  // Inicializamos el estado
  updateBodyPadding();

  // Escucha el scroll para alternar la clase .scrolled; y actualizar padding si cambia la altura
  let ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > SCROLL_THRESHOLD) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
          // Asegura que el padding siga la altura actualizada del header
          updateBodyPadding();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  // Actualizamos el padding si se redimensiona la ventana o cuando carga contenido dinámico
  window.addEventListener("resize", updateBodyPadding);
  window.addEventListener("load", updateBodyPadding);
})();
