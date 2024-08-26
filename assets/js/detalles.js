import * as funcol from "../modulos/modulos.js";
let urlObjeto = new URLSearchParams(window.location.search);
let identificador = urlObjeto.get("id");
let nameimg = urlObjeto.get("name");

let URLDep = "https://api-colombia.com/api/v1/Department/" + identificador;

let URLCity = "https://api-colombia.com//api/v1/City";
let URLNature = "https://api-colombia.com/api/v1/NaturalArea";
fetch(URLDep)
  .then((response) => response.json())
  .then((response) => {
    let contenedorTarjeta = document.getElementById("padre1");
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjetaBig");
    tarjeta.innerHTML = `<img class="imgttarjeta" src="../img/${response.name}.jpg" alt="" />
            <div class="textos">
              <p class="ttitulos">${response.name}</p>
              <div class="especs">
                <p class="textos">Ciudad Capital: <span>${response.cityCapital.name}</span></p>
                <p class="textos">Cantidad de municipios: <span>${response.municipalities}</span></p>
                <p class="textos">Poblacion: <span>${response.population}</span></p>
                <p class="textos">Superficie: <span>${response.surface} km²</span></p>
              </div>
            </div>`;
    contenedorTarjeta.appendChild(tarjeta);
  });

fetch(URLCity)
  .then((response) => response.json())
  .then((response) => {
    let ciudades = response.filter(
      (city) => city.departmentId == identificador
    );
    funcol.crear_tarjetasCity(ciudades);
    let buscar = document.getElementById("buscar");
    buscar.addEventListener("input", function () {
      let ABuscar = buscar.value.toLowerCase();
      let encontrado = ciudades.filter((item) =>
        item.name.toLowerCase().includes(ABuscar)
      );
      funcol.crear_tarjetasCity(encontrado);
    });
  });
fetch(URLNature)
  .then((response) => response.json())
  .then((response) => {
    let lugares = response.filter(
      (nature) => nature.departmentId == identificador
    );

    funcol.crear_tarjetasNature(lugares);
    let buscar = document.getElementById("buscar");
    buscar.addEventListener("input", function () {
      let ABuscar = buscar.value.toLowerCase();
      let encontrado = lugares.filter((item) =>
        item.name.toLowerCase().includes(ABuscar)
      );
      funcol.crear_tarjetasNature(encontrado);
    });
  });

let areasSwitch = document.getElementById("ciudadArea");

function areasCitys() {
  let areaSlect = areasSwitch.value;
  let ciudades = document.getElementById("padre2");
  let areas = document.getElementById("padre3");
  if (areaSlect == 0) {
    ciudades.classList.remove("noVisible");
    areas.classList.remove("noVisible");
  } else if (areaSlect == 1) {
    areas.classList.add("noVisible");
    ciudades.classList.remove("noVisible");
  } else if (areaSlect == 2) {
    ciudades.classList.add("noVisible");
    areas.classList.remove("noVisible");
  }
}
areasSwitch.addEventListener("change", areasCitys);
