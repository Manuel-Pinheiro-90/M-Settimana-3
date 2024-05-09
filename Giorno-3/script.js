const generateCard = function (arrayOfBook) {
  const ncolonne = document.getElementById("contcols");
  arrayOfBook.forEach((book) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col", "d-flex", "justify-content-center");

    console.log("book");
    newDiv.innerHTML = `
    <div class="card  mx4 my-4  "  style="width: 20rem ;">
    <img src="${book.img}" class="card-img-top " alt="...">
    <div class="card-body  d-flex flex-column align-items-center justify-content-between">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text"> £ ${book.price}</p>
      <div>
      <button class="btn btn-primary buy-btn">Compra</button>
      <button class="btn mt-auto btn-danger delete-btn ">Cancella</button>
      </div>
      </div>
  </div>
    `;
    const deleteButton = newDiv.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      newDiv.remove(); // Rimuove l'elemento genitore della carta
    });

    const buyButton = newDiv.querySelector(".buy-btn");
    buyButton.addEventListener("click", addToCart);

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


// Funzione per aggiungere un libro al carrello
const addToCart = function (event) {
  // Trova il titolo del libro dalla carta
  const card = event.target.closest(".card");
  if (!card) return; // Se non trova la carta genitore, esce dalla funzione

  const titleElement = card.querySelector(".card-title");
  if (!titleElement) return; // Se non trova l'elemento con la classe card-title, esce dalla funzione

  const title = titleElement.innerText;

  // Crea un nuovo elemento li per il carrello
  const coltitle = document.createElement("li");
  coltitle.innerText = title;

  // Aggiungi l'elemento al carrello
  const rowCart = document.getElementById("carrello");
  if (rowCart) {
    rowCart.appendChild(coltitle);

    // Aggiorna il localStorage con il nuovo libro nel carrello
    let shopbook = localStorage.getItem("shopbook")
      ? JSON.parse(localStorage.getItem("shopbook"))
      : [];
    shopbook.push(title);
    localStorage.setItem("shopbook", JSON.stringify(shopbook));
  }
};
