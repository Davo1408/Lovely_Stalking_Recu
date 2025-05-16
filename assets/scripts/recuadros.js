const thumbs = document.querySelectorAll('.video-thumb');
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('vimeoPlayer');
const closeBtn = document.querySelector('.close');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const videoURL = thumb.getAttribute('data-video') + '?autoplay=1';
    iframe.src = videoURL;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  iframe.src = '';
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    iframe.src = '';
    modal.style.display = 'none';
  }
});

// Controlar el volumen del audio de fondo
const backgroundAudio = document.getElementById('backgroundAudio');
backgroundAudio.volume = 0.5; // Cambia este valor para hacer el audio más bajo (0.1 es muy bajo)
