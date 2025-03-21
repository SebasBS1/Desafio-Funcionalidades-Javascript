/* 
Desafío: Aplicaciones Funcionales Utilizando Javascript

Construcción de Software y Toma de Decisiones

Docente: M. C. Ing. Sasha Valdés Jiménez

Equipo:
- Sebastián Blanchet Sánchez (A00227588)
- Jonathan Uziel Medina Rodríguez (A01255048)
- Araceli Ruiz Sánchez (A01255302)

Fecha: 21/03/2025

Descripción: Funcionalidad para enviar información a la API.
*/

const API = "https://67db3dcf1fd9e43fe47408eb.mockapi.io/artistock/v1/producto";

const procesaTodo = (event) => {
    event.preventDefault();
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    postData(datosCompletos);
}

const postData = async (newProduct) => {
    try{
        const response = await fetch (API, {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(newProduct)
        });
        if(response.ok){
            const jsonResponse = await response.json();

            const{nombre} = jsonResponse;
            window.alert(`Producto ${nombre} guardado`)
            //window.location.reload();
            window.location.href = 'misProductos.html';
        }

    }catch(error){
        window.alert("Hubo un error a guardar el producto");
        window.location.reload();
    }

}

document.getElementById("formProducto").addEventListener("submit", procesaTodo);


