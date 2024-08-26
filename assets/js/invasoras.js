let URL = "https://api-colombia.com/api/v1/InvasiveSpecie";

fetch(URL)
  .then((response) => response.json())
  .then((response) => {
    let tabContenedor = document.getElementById("tabla");
    for (let i = 0; i < response.length; i++) {
      let especie = document.createElement("tr");
      if (response[i].riskLevel == 1) {
        especie.classList.add("bgblue");
      } else if (response[i].riskLevel) {
        especie.classList.add("bggreen");
      }
      especie.innerHTML = `<td>${response[i].name}</td><td>${response[i].scientificName}</td><td>${response[i].impact}</td><td>${response[i].manage}</td><td>${response[i].riskLevel}</td><td><img src="${response[i].urlImage}" alt=""></td>`;
      tabContenedor.appendChild(especie);
    }
  });
