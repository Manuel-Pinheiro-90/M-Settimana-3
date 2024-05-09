const getKnights = function () {
  const row = document.getElementById("new-col");
  // Rimuovi tutti i figli dell'elemento "new-col"
  while (row.firstChild) {
    row.removeChild(row.firstChild);
  }

  fetch("https://api.pexels.com/v1/search?query=knights", {
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
      const arrayOfKnights = data.photos;
      arrayOfKnights.forEach((knight) => {
        const newCol = document.createElement("div");
        newCol.classList.add("col");
        newCol.innerHTML = `
              <div class="card h-100 d-flex flex-column">
                <img src="${knight.src.medium}" alt="${knight.photographer}">
                <div class="card-body d-flex flex-column justify-content-around">
                  <h5 class="card-title">${knight.id}</h5>
                  <p class="card-text">${knight.photographer}</p>
                  <div class="d-flex justify-content-between">
                    <button class="btn btn-primary">Hide</button>
                    <a href="${knight.url}" class="btn btn-info">INFO</a>
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

document
  .getElementById("getKnightsButton")
  .addEventListener("click", getKnights);

///////////////////////////////////////////////////////////////////////////////////////////////////

const getstar = function () {
  const row = document.getElementById("new-col");
  // Rimuovi tutti i figli dell'elemento "new-col"
  while (row.firstChild) {
    row.removeChild(row.firstChild);
  }

  fetch("https://api.pexels.com/v1/search?query=stars", {
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
      const arrayOfstars = data.photos;
      arrayOfstars.forEach((star) => {
        const newCol = document.createElement("div");
        newCol.classList.add("col");
        newCol.innerHTML = `
                <div class="card h-100 d-flex flex-column">
                  <img src="${star.src.medium}" alt="${star.photographer}">
                  <div class="card-body d-flex flex-column justify-content-around">
                    <h5 class="card-title">${star.id}</h5>
                    <p class="card-text">${star.photographer}</p>
                    <div class="d-flex justify-content-between">
                      <button class="btn btn-primary">Hide</button>
                      <a href="${star.url}" class="btn btn-info">INFO</a>
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

document.getElementById("getstar").addEventListener("click", getstar);
