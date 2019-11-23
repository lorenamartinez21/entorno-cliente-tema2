let listadoUsuarios = [];

document.addEventListener("DOMContentLoaded",function(){


	let boton = document.getElementById("a");//creamos el boton
	boton.addEventListener("submit",crear);
	let input1 = document.getElementById("nombre");//creamos el boton
	input1.addEventListener("keyup",nombre);
	let input2 = document.getElementById("apellidos");//creamos el boton
	input2.addEventListener("keyup",apellidos);
	let input3 = document.getElementById("edad");//creamos el boton
	input3.addEventListener("keyup",edad);
	let input4 = document.getElementById("profesion");//creamos el boton
	input4.addEventListener("change",mostrarProfesiones);
	let input5 = document.getElementById("check");//creamos el boton
	input5.addEventListener("click",aceptarPolitica);


})

function nombre() {

	let Nombre = document.getElementById("nombre");
	let valor = Nombre.value.trim();
	let esCorrecto = true;
	let listaErrores =document.getElementById("erroresNombre");
	listaErrores.innerHTML = "";
	Nombre.classList.remove("inputErroneo");
	Nombre.classList.remove("inputCorrecto");

	if (!/^[a-z/A-Z/ñÑ/ ]+$/.test(valor)) {
        esCorrecto = false;
        Nombre.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "¡SOLO PUEDEN USARSE LETRAS Y ESPACIOS!";
        listaErrores.appendChild(divError);
    }

    if (valor.length<3) {
        esCorrecto = false;
        Nombre.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "!MINIMO 3 LETRAS¡";
        listaErrores.appendChild(divError);
    }


    if (esCorrecto) {
        Nombre.classList.add("inputCorrecto");
    }else{
        Nombre.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function apellidos() {

	let Apellidos = document.getElementById("apellidos");
	let Nombre = document.getElementById("nombre");
	let valor = Nombre.value.trim();
	let valor2 = Apellidos.value.trim();
	let esCorrecto = true;
	let listaErrores =document.getElementById("erroresApellidos");
	listaErrores.innerHTML = "";
	Nombre.classList.remove("inputErroneo");
	Nombre.classList.remove("inputCorrecto");

	if (!/^[a-z/A-Z/ñÑ/ ]+$/.test(valor2)) {
        esCorrecto = false;
        Apellidos.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "¡SOLO PUEDEN USARSE LETRAS Y ESPACIOS!";
        listaErrores.appendChild(divError);
    }

    if (valor === valor2) {
        esCorrecto = false;
        Apellidos.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "¡EL NOMBRE Y EL APELLIDO NO PUEDEN SER IGUALES!";
        listaErrores.appendChild(divError);
    }

    if (valor2.length<3) {
        esCorrecto = false;
        Apellidos.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "¡MINIMO 3 LETRAS!";
        listaErrores.appendChild(divError);
    }


    if (esCorrecto) {
        Apellidos.classList.add("inputCorrecto");
    }else{
        Apellidos.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function edad() {

	let Edad = document.getElementById("edad");
	let valor = Edad.value.trim();
	let esCorrecto = true;
	let listaErrores =document.getElementById("erroresEdad");
	listaErrores.innerHTML = "";
	Edad.classList.remove("inputErroneo");
	Edad.classList.remove("inputCorrecto");

	if (!/^[0-9]+$/.test(valor)) {
        esCorrecto = false;
        Edad.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "¡SOLO SE ACEPTAN NUMEROS!";
        listaErrores.appendChild(divError);
    }
    let valoredad = parseInt(valor);
    if (valoredad<18) {
        esCorrecto = false;
        Edad.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "¡TIENES QUE TENER MÁS DE 18 AÑOS!";
        listaErrores.appendChild(divError);
    }


    if (esCorrecto) {
        Edad.classList.add("inputCorrecto");
    }else{
        Edad.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function mostrarProfesiones(){

	let Profesion = document.getElementById("profesion");
	let valor = Profesion.value;
	let esCorrecto = true;
	let listaErrores =document.getElementById("erroresProfesion");
	listaErrores.innerHTML = "";
	Profesion.classList.remove("inputErroneo");
	Profesion.classList.remove("inputCorrecto");

	if (valor === "ninguno") {
        esCorrecto = false;
        Profesion.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "¡ESTE CAMPO DEBES RELLENARLO!";
        listaErrores.appendChild(divError);
    }



    if (esCorrecto) {
        Profesion.classList.add("inputCorrecto");
    }else{
        Profesion.classList.add("inputErroneo");
    }
    return esCorrecto;

}

function aceptarPolitica() {
	
	let Politica = document.getElementById("check");
	let valor = Politica.checked;
	let esCorrecto = true;
	let listaErrores =document.getElementById("erroresCheck");
	listaErrores.innerHTML = "";
	Politica.classList.remove("inputErroneo");
	Politica.classList.remove("inputCorrecto");

if (valor === false) {
        esCorrecto = false;
        Politica.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "¡DEBES MARCAR LA CASILLA!";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        Politica.classList.add("inputCorrecto");
    }else{
        Politica.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function crear(event) {
	event.preventDefault();

	let validarFormulario = false;
    let valorNombre = nombre();
    let valorApellidos = apellidos();
    let valorEdad = edad();
    let valorProfesion = mostrarProfesiones();
    let valorAceptar = aceptarPolitica();


    if ((valorNombre === true)&&(valorApellidos === true)&&(valorEdad === true)
        &&(valorProfesion === true)&&(valorAceptar === true)) {
        validarFormulario = true;
        alert("El usuario se ha creado correctamente");

    }else{
        alert("Error al crear el usuario");
    }
    if(validarFormulario === true){

        let usuarios = {};
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value;
        let edad = document.getElementById("edad").value.trim();
        let profesion = document.getElementById("profesion").value;
        usuarios.nombre = nombre;
        usuarios.apellidos = apellidos;
        usuarios.profesion = profesion;
        usuarios.edad = edad;

        listadoUsuarios.push(usuarios);
        let divlistaUsuarios = document.getElementById("result");
        divlistaUsuarios.innerHTML = "";
        let ulUsuarios = document.createElement("ul");
        for (let usuarios of listadoUsuarios) {
            let liusuario = document.createElement("li");
            liusuario.innerHTML = "Nombre: "+usuarios.nombre+"; Apellidos: "
            +usuarios.apellidos+"; Edad: "+usuarios.edad+"; Profesion: "+usuarios.profesion;
            ulUsuarios.appendChild(liusuario);
        }
        let h2 = document.createElement("h2");
        h2.innerHTML = "Usuario";
        divlistaUsuarios.appendChild(h2);
        divlistaUsuarios.appendChild(ulUsuarios);
    }
 
}

