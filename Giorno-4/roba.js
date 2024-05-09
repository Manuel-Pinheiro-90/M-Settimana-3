const loadInitialImages = function (searchKeyword) {
  const row = document.getElementById("new-col");
  row.innerHTML = "";
  getimg(searchKeyword);
};

const getimg = function (searchKeyword) {
  const row = document.getElementById("new-col");
  row.innerHTML = "";
  fetch("https://api.pexels.com/v1/search?query=" + searchKeyword, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 67mbMRFEUxGRNdtE1VabPtNSD9BUJ5hax1x7R38UAM4kjocYqD7IHd2o",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella risposta del server");
      }
    })
    .then((data) => {
      console.log("ARRAY!", data);
      const arrayOfPhoto = data.photos;

      arrayOfPhoto.forEach((img) => {
        const newCol = document.createElement("div");
        newCol.classList.add("col");
        newCol.innerHTML = `
            <div class="card h-100 d-flex flex-column">
              <img src="${img.src.medium}" alt="${img.photographer}">
              <div class="card-body d-flex flex-column justify-content-around">
                <h5 class="card-title">${img.id}</h5>
                <p class="card-text flex-grow-1 ">${img.photographer}</p>
                <div class="d-flex justify-content-between">
                <button class="btn btn-warning" onclick="remove(event)">Hide</button>
                  <a href="${img.url}" class="btn btn-info">INFO</a>
                </div>
              </div>
            </div>
          `;
        row.appendChild(newCol);
      });
    })
    .catch((err) => {
      console.log("ERRORE!", err);
    });
};

loadInitialImages("cats");

// Aggiungi gli event listener per i pulsanti
document.getElementById("getBtnOne").addEventListener("click", function () {
  loadInitialImages("knights");
});

document.getElementById("getBtnTwo").addEventListener("click", function () {
  loadInitialImages("stars");
});

const remove = function (e) {
  console.log(e.target.closest(".col"));
  console.log("RIMUOVO CARD");
  e.target.closest(".col").remove();
};
