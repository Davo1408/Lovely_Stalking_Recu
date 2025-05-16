const textoAviso = "¡Atención! Este proyecto contiene contenidos perturbadores y provocativos que generan conciencia sobre la invasión de la privacidad y el uso comercial de la información personal en las redes sociales. Al interactuar con esta experiencia multimedia, te enfrentarás a elementos visuales y auditivos diseñados para generar emociones incómodas e inquietantes. Sugerimos discreción...";
let i = 0;
const velocidad = 35;

const backgroundAudio = document.getElementById('backgroundAudio');

backgroundAudio.volume = 0.5;

window.onload = function() {
  backgroundAudio.muted = false;  
  backgroundAudio.play();  

  escribirTexto();
};

function escribirTexto() {
  if (i < textoAviso.length) {
    document.getElementById("textoAviso").innerHTML += textoAviso.charAt(i);
    i++;

    setTimeout(escribirTexto, velocidad);
  } else {
    backgroundAudio.pause();
  }
}
