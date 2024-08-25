import * as funcol from "../modulos/modulos.js";
let urlObjeto = new URLSearchParams(window.location.search);
let identificador = urlObjeto.get("id");

let URLDep = "https://api-colombia.com/api/v1/Department/" + identificador;

let URLCity = "https://api-colombia.com//api/v1/City";
let URLNature = "https://api-colombia.com/api/v1/NaturalArea";
fetch(URLDep)
  .then((response) => response.json())
  .then((response) => console.log(response));

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
