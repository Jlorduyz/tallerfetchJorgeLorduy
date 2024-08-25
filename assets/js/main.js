import * as funcol from "../modulos/modulos.js";

let URL = "https://api-colombia.com/";

let URLdescripcion = URL + "/api/v1/Country/Colombia";

let URLdepartamentos = URL + "/api/v1/Department";

fetch(URLdescripcion)
  .then((response) => response.json())
  .then(
    (res) =>
      (document.getElementById(
        "descripcion"
      ).innerHTML = `<p class="text_description">${res.description}</p>`)
  );

fetch(URLdepartamentos)
  .then((response) => response.json())
  .then((response) => {
    funcol.crear_tarjetas(response);
  });
