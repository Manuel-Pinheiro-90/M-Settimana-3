class Banana {
  constructor(_nome, _classe, _armamento, _fede) {
    this.nome = _nome;
    this.classe = _classe;
    this.armamento = _armamento;
    this.fede = _fede;
  }

  confrontadede() {
    if (this.fede === Ecclesia) {
      `${this.firstName} è un vero fedele, e merita l'assoluzione dell'alto sacerdote`;
    } else {
      `${this.firstName} verrà bruciato sulla pira.`;
    }
  }
}
