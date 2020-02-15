<?php
require_once "./validacion.php";


$errores = array();
$errores["nombre"] = array();
$errores["descripcion"] = array();
$errores["tipo"] = array();
$errores["precio"] = array();
$errores["animal"] = array();


if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["descripcion"])){
    $errores["descripcion"] = validardescripcion(trim($_POST["descripcion"]));
    
}

if(isset($_POST["tipo"])){
    $errores["tipo"] = validartipo(trim($_POST["tipo"]));
}

if(isset($_POST["precio"])){
    $errores["precio"] = validarPrecio(trim($_POST["precio"]));
}

if(isset($_POST["animal"])){
    $errores["animal"] = validaranimal(trim($_POST["animal"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);