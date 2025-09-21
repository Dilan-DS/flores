// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando", time: 18 },
  { text: "Con una flor amarilla", time: 21 },
  { text: "Ella lo estaba soñando", time: 24 },
  { text: "Con la luz en su pupila", time: 27 },
  { text: "Y el amarillo del sol", time: 30 },
  { text: "Iluminaba la esquina", time: 33 },
  { text: "Lo sentía tan cercano", time: 36 },
  { text: "Lo sentía desde niña", time: 39 },
  { text: "Ella sabía que él sabía", time: 42 },
  { text: "Que algún día pasaría", time: 45 },
  { text: "Que vendría a buscarla", time: 48 },
  { text: "Con sus flores amarillas", time: 51 },
  { text: "No te apures, no detengas", time: 54 },
  { text: "El instante del encuentro", time: 57 },
  { text: "Está dicho que es un hecho", time: 60 },
  { text: "No la pierdas, no hay derecho", time: 63 },
  { text: "No te olvides que la vida", time: 66 },
  { text: "Casi nunca está dormida", time: 69 },
  { text: "En ese bar tan desierto", time: 72 },
  { text: "Nos esperaba el encuentro", time: 75 },
  { text: "Ella llegó en limusina", time: 78 },
  { text: "Amarilla por supuesto", time: 81 },
  { text: "Él se acercó de repente", time: 84 },
  { text: "La miró tan de frente", time: 87 },
  { text: "Toda una vida soñada", time: 90 },
  { text: "Y no pudo decir nada", time: 93 },
  { text: "Ella sabía que él sabía", time: 96 },
  { text: "Que algún día pasaría", time: 99 },
  { text: "Que vendría a buscarla", time: 102 },
  { text: "Con sus flores amarillas", time: 105 },
  { text: "No te apures, no detengas", time: 108 },
  { text: "El instante del encuentro", time: 111 },
  { text: "Está dicho que es un hecho", time: 114 },
  { text: "No la pierdas, no hay derecho", time: 117 },
  { text: "No te olvides que la vida", time: 120 },
  { text: "Casi nunca está dormida", time: 123 },
  { text: "Flores amarillas", time: 126 },
  { text: "Ella sabía que él sabía", time: 132 },
  { text: "Que algún día pasaría", time: 135 },
  { text: "Que vendría a buscarla", time: 138 },
  { text: "Con sus flores amarillas", time: 141 },
  { text: "No te apures, no detengas", time: 144 },
  { text: "El instante del encuentro", time: 147 },
  { text: "Está dicho que es un hecho", time: 150 },
  { text: "No la pierdas, no hay derecho", time: 153 },
  { text: "No te olvides que la vida", time: 156 },
  { text: "Casi nunca está dormida", time: 159 },
  { text: "Ella sabía que él sabía", time: 162 },
  { text: "Él sabía, ella sabía", time: 165 },
  { text: "Que él sabía, ella sabía", time: 168 },
  { text: "Y se olvidaron de sus flores amarillas.", time: 171 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

if (audio) {
    setInterval(updateLyrics, 1000);
}