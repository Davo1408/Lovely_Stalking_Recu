// Acceder a la webcam del dispositivo
const webcam = document.getElementById('webcam');

// Función para acceder a la cámara
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    // Asignar el stream de la cámara al elemento de video
    webcam.srcObject = stream;
  })
  .catch(function(error) {
    console.log("No se pudo acceder a la cámara: ", error);
  });
