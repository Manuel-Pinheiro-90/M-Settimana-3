const generateCard = function (arrayOfBook) {
  const ncolonne = document.getElementById("contcols");
  arrayOfBook.forEach((book) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col", "d-flex", "justify-content-center");

    console.log("book");
    newDiv.innerHTML = `
    <div class="card  m-2 "  style="width: 20rem ;">
    <img src="${book.img}" class="card-img-top " alt="...">
    <div class="card-body  d-flex flex-column align-items-center justify-content-between">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.price}</p>
      <div>
      <a href="#" class="btn btn-primary">Compra</a>
      <button class="btn mt-auto btn-danger delete-btn ">Cancella</button>
      </div>
      </div>
  </div>
    `;
    const deleteButton = newDiv.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      newDiv.remove(); // Rimuove l'elemento genitore della carta
    });

    ncolonne.appendChild(newDiv);
  });
};

const getBook = function () {
  fetch("https://striveschool-api.herokuapp.com/books", {})
    .then((response) => {
      if (response.ok) {
        console.log("tutto nella norma");

        return response.json();
      } else {
        if (response.status === 404) {
          throw new Error("risorsa persa");
        } else if (response.status === 500) {
          throw new Error("no");
        }
      }
    })
    .then((arrayOfBook) => {
      console.log("ho estratto", arrayOfBook);
      generateCard(arrayOfBook);
    })
    .catch((err) => {
      console.log("auto distruzione", err);
    });
};

getBook();
