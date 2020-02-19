$(function(){
    $("button[data-accion='eliminar']").on("click",function(event){
        let boton = $(event.target);

        mostrarModalEliminar(boton.attr("data-ideliminar"));
    });

    $("button[data-accion='confirmar-eliminar']").on("click",function(event){
        let boton = $(event.target);
        eliminar(boton.attr("data-ideliminar"));
    });
});

function mostrarModalEliminar(idEliminar){
    $("#botonConfirmarEliminar").attr("data-ideliminar",idEliminar);
    $("#modalEliminar").modal("show");
}

function eliminar(idEliminar){
    console.log(idEliminar);
    let form = new FormData();
    form.append("id",idEliminar);
    fetch("servidor/eliminar.php",{
        method:"POST",
        body:form
    }).then(function(){
        $("#modalEliminar").modal("hide");
        $("tr[data-idPelicula='"+idEliminar+"']").remove();
    });
}