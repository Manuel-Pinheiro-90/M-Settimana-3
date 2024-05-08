// Funzione per aggiornare
function updateTimer() {
  // Controllo se esiste un valore salvato nella sessione
  if (sessionStorage.startTime) {
    var currentTime = Math.floor(Date.now() / 1000);
    var startTime = parseInt(sessionStorage.startTime);
    var elapsedTime = currentTime - startTime;

    // Aggiorna il contenuto del div con il tempo trascorso
    document.getElementById("timer").textContent = elapsedTime + " secondi";
  }
}
//aiuto

window.onload = function () {
  // Controlla se il tempo di inizio è già salvato nella sessione
  if (!sessionStorage.startTime) {
    // Se non è presente, imposta il tempo di inizio attuale
    sessionStorage.startTime = Math.floor(Date.now() / 1000);
  }

  // Avvia l'aggiornamento del contatore ogni secondo
  setInterval(updateTimer, 1000);
};
//questa roba mi ucciderà
