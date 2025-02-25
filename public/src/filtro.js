// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "/public/src/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "/public/src/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "/public/src/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "/public/src/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "/public/src/zapato-rojo.jpg" }
]

 //Cambie el nombre de las variables para que fueran mas descriptivas

const listaDeProductos = document.getElementById("listaDeProductos"); // cambie Name por Id y agrege un Id en HTML
const inputFiltro = document.querySelector("input"); 

// Función para mostrar productos

const mostrarProductos = (productos) => { // agregué la funcion para llamarla despues 
  for (let i = 0; i < productos.length; i++) {
    const divProducto = document.createElement("div"); // cambie de var a const 
    divProducto.classList.add("producto");

    const tituloProducto = document.createElement("p"); // cambie var a const 
    tituloProducto.classList.add("titulo");
    tituloProducto.textContent = productos[i].nombre;

    const imagenProducto = document.createElement("img");
    imagenProducto.setAttribute('src', productos[i].img);

    divProducto.appendChild(tituloProducto);
    divProducto.appendChild(imagenProducto);
    listaDeProductos.appendChild(divProducto);
  }
}

// Llama a la función para mostrar los productos
mostrarProductos(productos); // la funcion  displayProducts no estaba definida 

const botonDeFiltro = document.querySelector("button");

// Utilicé addEventListener en lugar de onclick
botonDeFiltro.addEventListener('click', () => {
  // Agrege elimina los productos existentes antes de mostrar los filtrados
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }

  const textoFiltro = inputFiltro.value;
  console.log(textoFiltro);
  const productosFiltrados = filtrarProductos(productos, textoFiltro);

  // Agregué un mensaje si no se encuentran productos
  if (productosFiltrados.length === 0) {
    const mensajeNoEncontrado = document.createElement("p");
    mensajeNoEncontrado.textContent = "Productos no encontrados.";
    listaDeProductos.appendChild(mensajeNoEncontrado);
  } else {
    for (let i = 0; i < productosFiltrados.length; i++) {
      const divProducto = document.createElement("div");
      divProducto.classList.add("producto");

      const tituloProducto = document.createElement("p");
      tituloProducto.classList.add("titulo");
      tituloProducto.textContent = productosFiltrados[i].nombre;

      const imagenProducto = document.createElement("img");
      imagenProducto.setAttribute('src', productosFiltrados[i].img);

      divProducto.appendChild(tituloProducto);
      divProducto.appendChild(imagenProducto);
      listaDeProductos.appendChild(divProducto);
    }
  }
});

// Función de filtrado
const filtrarProductos = (productos = [], textoFiltro) => {
  return productos.filter(item => item.tipo.includes(textoFiltro) || item.color.includes(textoFiltro));
}