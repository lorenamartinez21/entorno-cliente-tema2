<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "configurcion.php";
// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "DELETE FROM maquillaje where id='".$_POST["id"]."'";
$conexion->query($sql);
echo json_encode(1);
