function Spinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}

function filtro() {

    let input = $("#id").val();
    $.ajax({
        url: "conexion.php",
        data: { id: input },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
    })
        .done(escribirResultado)
        .fail(function () {
       
            alert("ERROR");
            $("#resultado").html("NO SE HA PODIDO REALIZAR LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });

}

function escribirResultado(respuesta) {
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados = respuesta;
    //CREAMOS LA TABLA QUE IMPRIMIRA LOS DATOS DE NUESTRO MUEBLE.
    let salida = "<table border='1'><tr><th>ID</th><th>NOMBRE</th><th>TIPO</th><th>TAMAÑO</th></tr>";

    for (let i = 0; i < resultados.length; i++) {
        let objetos = resultados[i];
        salida += "<tr><td>" + objetos.id + "</td><td>" +
            objetos.Nombre + "</td><td>" + objetos.Precio + "</td><td>" +
            objetos.Animal + "</td><td>" + objetos.Tipo + "</td><td>" + objetos.Descripcion + "</td></tr>";
    }

    salida += "</table>";

    divResultado.innerHTML = salida;
}