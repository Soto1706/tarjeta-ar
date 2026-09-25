document.addEventListener('DOMContentLoaded', () => {
  const marker = document.querySelector('#hiro-marker');
  const btnPortfolio = document.querySelector('#btn-portfolio');

  marker.addEventListener('markerFound', () => {
    console.log('Marcador Hiro detectado correctamente.');
  });

  marker.addEventListener('markerLost', () => {
    console.log('Marcador fuera del área de visión.');
  });

  // Abrir tu portafolio al hacer clic en el botón 3D
  if (btnPortfolio) {
    btnPortfolio.addEventListener('click', () => {
      window.open('https://github.com/Soto1706', '_blank');
    });
  }
});