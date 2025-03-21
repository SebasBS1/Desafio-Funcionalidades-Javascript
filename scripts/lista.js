/* 
Desafío: Aplicaciones Funcionales Utilizando Javascript

Construcción de Software y Toma de Decisiones

Docente: M. C. Ing. Sasha Valdés Jiménez

Equipo:
- Sebastián Blanchet Sánchez (A00227588)
- Jonathan Uziel Medina Rodríguez (A01255048)
- Araceli Ruiz Sánchez (A01255302)

Fecha: 21/03/2025

Descripción: Funcionalidad para mostrar el listado de elementos.
*/

// URL del API con los datos de los productos.
const API = "https://67db3dcf1fd9e43fe47408eb.mockapi.io/artistock/v1/producto";

// Cargar elementos en el listado de productos.
function cargarElementos(){
    fetch(API)
        .then(respuesta => respuesta.json()) // Verificar que se reciben datos del archivo JSON.
        .then(datos => {
            const article = document.querySelector("article");
            article.innerHTML = ""; // Resetear listado de productos.
            
            // Crear filas por cada producto.
            datos.forEach((producto) => {
                precioProducto = new Intl.NumberFormat("es-MX", {style: "currency", currency: "MXN"})
                                         .format(producto.precio);
                
                // Nueva sección.
                let seccion = document.createElement("section");
                
                // Clases de la sección.
                clasesSeccion = seccion.classList;

                clasesSeccion.add("producto");
                clasesSeccion.add("d-flex");
                clasesSeccion.add("flex-wrap");
                clasesSeccion.add("mb-4");
                clasesSeccion.add("p-3");
                clasesSeccion.add("rounded");
                
                // La fila contiene las propiedades del producto.
                seccion.innerHTML = `<div>
                                        <img src="${producto.imgSRC}" class="img-fluid" width="500px">
                                     </div>

                                     <div class="flex-grow-1 d-flex flex-column justify-content-between ps-3"> 
                                        <h2 class="mt-3">${producto.nombre}</h2>
                                        <p>${precioProducto} MXN</p>
                                        <p>${producto.desc}</p>
                                        <ul class ="tags list-unstyled d-flex flex-wrap gap-2">
                                            <li class="text-white p-2 rounded">${producto.tag1}</li>
                                            <li class="text-white p-2 rounded">${producto.tag2}</li>
                                            <li class="text-white p-2 rounded">${producto.tag3}</li>
                                        </ul>
                                     </div>

                                     <div class="d-flex flex-column align-items-center">
                                        <button class="btn mb-5 mt-5" onclick="window.location.href = '#';">Modificar</button>
                                        <button class="btn">Eliminar</button>
                                     </div>`;
                
                article.appendChild(seccion);
            });
        })
        // Mostrar errores en consola.
        .catch(error => {
            console.error("ERROR: ", error)
        });
}

// Cargar elementos cuando se cargue el sitio web.
window.onload = () => {
    cargarElementos();
}