<?php

function validarNombre($nombre){
    $errores = array();
    if($nombre === "") {
    $errores[] = "El nombre no puede estar vacio";

    }else{
        if (!preg_match("/[A-ZÑa-zñ ]{2,}$/",$nombre)) {
            $errores[] = "El nombre debe de tener mas de 2 letras y solo letras";
        }
    }
    return $errores;
}

function validarPrecio($precio){
    $errores = array();
    if($precio === "") {
    $errores[] = "El precio esta vacio";
    }else{
        
    }
    return $errores;
}

function validartipo($tipo){
    $errores = array();
    if($tipo === "") {
    $errores[] = "El tipo esta vacio";
    }
    return $errores;
}

function validarDescripcion($descripcion){
    $errores = array();
    if($descripcion === "") {
    $errores[] = "La descripcion esta vacia";
    }
    return $errores;
}

function validarAnimal($animal){
    $errores = array();
    
    return $errores;
}