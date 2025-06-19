const preguntas = document.querySelectorAll('.faq-question');

    preguntas.forEach(pregunta => {
      pregunta.addEventListener('click', () => {
        // Alternar visibilidad de la respuesta
        const respuesta = pregunta.nextElementSibling;
        respuesta.classList.toggle('show');

        // Cambiar el icono + / -
        pregunta.classList.toggle('open');
      });
    });
const menuIcon = document.getElementById('openMenuBtn');
  const menu = document.getElementById('menu');

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('abierto');
  });