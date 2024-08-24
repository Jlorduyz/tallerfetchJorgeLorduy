export function crear_tarjetas(a) {
  let contenedor = document.getElementById("padre");
  contenedor.innerHTML = ``;
  for (let i = 0; i < a.length; i++) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjetas");
    tarjeta.innerHTML = `<img class="img_tarjeta" src="./assets/img/${a[i].name}.jpg" alt="" />
            <p class="dep">Departamento de :</p>
            <p class="nombre_dep">${a[i].name}</p>
            <a href="#" class="boton_detalles">Detalles</a>`;
    contenedor.appendChild(tarjeta);
  }
}
