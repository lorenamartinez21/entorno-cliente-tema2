function hola(response){
    if (!response.ok) {
        throw Error("SE HA PRODUCIDO UN ERROR AL REALIZAR LA PETICIÓN FETCH:"+response.statusText);
    }
    return response;
}


function funcionAjaxAsincronaJSON(){
    alert("SE VA A EJECUTAR LA PETICIÓN");
    fetch("servidor/datosJSON.php", {
        method: 'get'
    })
    .then(hola)
    .then(function(response){ return response.json()})
        .then(tratarResultadoJSON)
        .catch(function(err) {
            console.log(err);
            alert("SE HA PRODUCIDO UN ERROR AL PARSEAR LOS DATOS");
        });
}


function tratarResultadoJSON(respuesta){
   var select = document.getElementById("select").value;
    
    var resultados= respuesta;
    let salida="<h1 id='h1'></h1><select name='select2' id='select2'>";
    salida+="<option>"+select+":</option>";
    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        console.log(select);
        switch (select) {
            case "id":
                salida+="<option>"+objeto.id+"</option>";
                break;

            case "nombre":
                salida+="<option>"+objeto.Nombre+"</option>";
                break;

            case "tipo":
                salida+="<option>"+objeto.Tipo+"</option>";
                break;

            case "animal":
                salida+="<option>"+objeto.Animal+"</option>";
                break;

            case "precio":
                salida+="<option>"+objeto.Precio+"</option>";
                break;

            case "descripcion":
                salida+="<option>"+objeto.Descripcion+"</option>";
                break;

            default:
                break;
            }
                salida+="</select>";

    document.getElementById("resultado").innerHTML=salida;
    document.getElementById("h1").innerHTML=select;
        }


}