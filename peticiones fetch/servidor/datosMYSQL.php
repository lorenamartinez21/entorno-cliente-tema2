<?php
require_once "configuracion.php";

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT * FROM maquillaje";
$peliculas = $conexion->query($sql);