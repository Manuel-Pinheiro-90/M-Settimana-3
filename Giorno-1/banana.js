class Banana {
  constructor(_nome, _classe, _armamento, _fede) {
    this.nome = _nome;
    this.classe = _classe;
    this.armamento = _armamento;
    this.fede = _fede;
  }

  confrontadede() {
    if (this.fede === "Ecclesia") {
      return `${this.nome} è un vero fedele, e merita l'assoluzione dell'alto sacerdote`;
    } else {
      return `${this.nome} verrà bruciato sulla pira.`;
    }
  }
}

const utente1 = new Banana("Armillo", "paladino", "Alabarda", "Ecclesia");
const utente2 = new Banana("Luigi", "ladro", "coltello", "culto di Valagos");

console.log(utente1.confrontadede());
console.log(utente2.confrontadede());
