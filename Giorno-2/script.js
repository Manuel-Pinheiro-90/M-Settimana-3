document.getElementById("myForm").addEventListener("submit", function (event) {
  // Impedisci il comportamento predefinito del modulo (ricaricamento della pagina)
  event.preventDefault();
});

const testo = document.getElementById("content");
const spazio = document.getElementById("zona");

const salva = function () {
  const contenutoTesto = testo.value;

  localStorage.setItem("contenuto", contenutoTesto);
  testo.value = "";
  mantieni();
};

const mantieni = function () {
  const valoreSalvato = localStorage.getItem("contenuto");
  spazio.value = valoreSalvato;
};
mantieni();

const cancella = function () {
  localStorage.removeItem("contenuto");
  spazio.value = "";
};
