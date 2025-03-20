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
            window.location.reload();
        }

    }catch(error){
        window.alert("Hubo un error a guardar el producto");
    }

}
document.getElementById("formProducto").addEventListener("submit", procesaTodo);


