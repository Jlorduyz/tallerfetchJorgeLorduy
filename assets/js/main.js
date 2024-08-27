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
    let buscar = document.getElementById("buscar");
    let regiones = document.getElementById("regionesSelect");

    function aplicarFiltros() {
      let ABuscar = buscar.value.toLowerCase();
      let regionSeleccionada = regiones.value;

      let encontrado = response.filter((iterado) => {
        let coincideNombre = iterado.name.toLowerCase().includes(ABuscar);
        let coincideRegion =
          regionSeleccionada == 0 || iterado.regionId == regionSeleccionada;
        return coincideNombre && coincideRegion;
      });

      funcol.crear_tarjetas(encontrado);
      let padd = document.getElementById("padre");
      if (padd.innerHTML.trim() === "") {
        let mensaje = document.createElement("div");
        mensaje.innerHTML = `<p class="mensajess">No se encontraron resultados</p>`;
        padd.appendChild(mensaje);
      }
    }

    buscar.addEventListener("input", aplicarFiltros);

    regiones.addEventListener("change", aplicarFiltros);

    funcol.crear_tarjetas(response);
  });
