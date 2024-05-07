const inputName = document.getElementById("petName");
const inputOwnerName = document.getElementById("ownerName");
const inputSpecies = document.getElementById("species");
const inputBreed = document.getElementById("breed");
const formTag = document.getElementsByTagName("form")[0];

const petarr = []; // Array per memorizzare i contatti

class Pets {
  constructor(_petName, _ownerName, _species, _breed, _isSameOwner) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
    this.isSameOwner = _isSameOwner; // Proprietà che indica se il padrone è lo stesso del contatto precedente
  }
}

const updateContacts = function () {
  const contactsRow = document.getElementById("contacts-row");

  contactsRow.innerHTML = "";

  petarr.forEach((pet) => {
    const newDiv = document.createElement("div");

    newDiv.classList.add("col");

    newDiv.innerHTML = `
      <div class="card${
        pet.isSameOwner ? " border border-danger border-4" : ""
      }">
        <div class="card-body">
          <h5 class="card-title">${pet.petName}</h5>
          <h5 class="card-title">${pet.ownerName}</h5>
          <h5 class="card-title">${pet.species}</h5>
          <h5 class="card-title">${pet.breed}</h5>
        </div>
      </div>
    `;

    contactsRow.appendChild(newDiv);
  });
};

formTag.addEventListener("submit", function (e) {
  e.preventDefault();

  // Verifica se il padrone è lo stesso del contatto precedente
  const sameOwner =
    petarr.length > 0 &&
    inputOwnerName.value === petarr[petarr.length - 1].ownerName;
//prendi il riferimento dal form
  const contactFromFormValues = new Pets(
    inputName.value,
    inputOwnerName.value,
    inputSpecies.value,
    inputBreed.value,
    sameOwner // Passa true se il padrone è lo stesso del contatto precedente, altrimenti false
  );

  petarr.push(contactFromFormValues);

  inputName.value = "";
  inputOwnerName.value = "";
  inputSpecies.value = "";
  inputBreed.value = "";

  updateContacts();
});
