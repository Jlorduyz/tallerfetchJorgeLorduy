export function crear_tarjetas(a) {
  let contenedor = document.getElementById("padre");
  contenedor.innerHTML = ``;
  for (let i = 0; i < a.length; i++) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjetas");
    tarjeta.innerHTML = `<img class="img_tarjeta" src="./assets/img/${a[i].name}.jpg" alt="" />
            <p class="dep">Departamento de :</p>
            <p class="nombre_dep">${a[i].name}</p>
            <a href="./assets/pages/detalles.html?id=${a[i].id}&name=${a[i].name}" class="boton_detalles">Detalles</a>`;
    contenedor.appendChild(tarjeta);
  }
}
export function crear_tarjetasCity(a) {
  let contenedor = document.getElementById("padre2");
  contenedor.innerHTML = ``;
  for (let i = 0; i < a.length; i++) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjetas");
    tarjeta.innerHTML = `<img class="img_tarjeta" src="../img/ciudadesGeneral.jpg" alt="" />
            <p class="dep">Ciudad de :</p>
            <p class="nombre_dep">${a[i].name}</p>`;
    contenedor.appendChild(tarjeta);
  }
}
export function crear_tarjetasNature(a) {
  let contenedor = document.getElementById("padre3");
  contenedor.innerHTML = ``;
  for (let i = 0; i < a.length; i++) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjetas");
    tarjeta.innerHTML = `<img class="img_tarjeta" src="../img/naturalezaGeneral.jpeg" alt="" />
            <p class="dep">Ciudad de :</p>
            <p class="nombre_dep">${a[i].name}</p>`;
    contenedor.appendChild(tarjeta);
  }
}
