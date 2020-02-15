

function validarNombre() {
    let nombreInput = $("#nombre").val();
    let input = $("#nombre");

    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { nombre: nombreInput },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.nombre);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}



function validarDescripcion() {
    let inputdescripcion = $("#descripcion").val();
    let inputnombre = $("#nombre").val();
    let Input = $("#descripcion");
    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { descripcion: inputdescripcion, nombre: inputnombre },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.descripcion);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarTipo() {
    let inputtipo = $("#tipo").val();
    let Input = $("#tipo");
    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { tipo: inputtipo },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.tipo);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarPrecio() {

    let inputprecio= $("#precio").val();
    let Input = $("#precio");
    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { precio: inputprecio },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.precio);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });

}

function validarAnimal() {
    let Input = $("#animal");
    let inputanimal = 0;
    if(Input.is(":checked")){
        inputanimal = Input.val();
    }
    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { animal: inputanimal },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.animal);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}



//En esta funcion validaremos el formulario por completo

function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    let inputnombre = $("#nombre");
    let inputtipo = $("#tipo");
    let inputprecio = $("#precio");
    let inputdescripcion = $("#descripcion");
    let inputanimal = 0;
    
    let Input = $("#terminos");
    if(Input.is(":checked")){
        inputanimal = Input.val();
    }
    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { nombre: inputnombre.val(), descripcion: inputdescripcion.val(), tipo: inputtipo.val(), precio: inputprecio.val(), animal: inputanimal },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(inputnombre, text.nombre);
            gestionarErrores(inputdescripcion, text.descripcion);

            gestionarErrores(inputtipo, text.tipo);
            gestionarErrores(inputprecio, text.precio);

            gestionarErrores(Input, text.animal);

            if (gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputdescripcion, text.descripcion) === false &&
                gestionarErrores(inputtipo, text.tipo) === false && gestionarErrores(inputprecio, text.precio) === false) {
                $.ajax({
                    url: "./servidor/insertarDatos.php",
                    data: { nombre: inputnombre.val(), descripcion: inputtipo.val(), tipo: inputtipo.val(), precio: inputprecio.val(), animal: inputanimal },
                    method: "POST",
                    dataType: "JSON",
                });
                $("#resultado").html("Se ha creado correctamente");
            }

        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}


function gestionarErrores(input, errores) {
    var hayErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (Object.keys(errores).length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        for (let i = 0; Object.keys(errores).length > i; i++) {
            divErrores.append("<div>" + errores[i] + "</div>");
        }
    }
    input.parent().next().remove();
    return hayErrores;
}

function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}