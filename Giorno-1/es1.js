class Utente {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  confrontaEta(altroUtente) {
    if (this.age > altroUtente.age) {
      return `${this.firstName} è più vecchio di ${altroUtente.firstName}.`;
    } else if (this.age < altroUtente.age) {
      return `${altroUtente.firstName} è più vecchio di ${this.firstName}.`;
    } else {
      return `${this.firstName} e ${altroUtente.firstName} hanno la stessa età.`;
    }
  }
}

const utente1 = new Utente("Mario", "Rossi", 30, "Roma");
const utente2 = new Utente("Luigi", "Verdi", 25, "Milano");

console.log(utente1.confrontaEta(utente2)); // Stampa: "Mario è più vecchio di Luigi."
