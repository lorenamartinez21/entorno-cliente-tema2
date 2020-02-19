<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 
 

$nombre=$_POST["nombre"];
$tipo=$_POST["tipo"];
$precio=$_POST["precio"];
$descripcion=$_POST["descripcion"];
$animal=$_POST["animal"];



$conn = mysqli_connect( 'localhost', 
                        'root', 
                        '', 
                        'tienda_de_cosmetica');


$sql =  "INSERT INTO `muebles`(`nombre`, `tipo`, `precio`,`descripcion`, `animal`) VALUES ('$nombre', '$tipo', '$precio', '$descripcion', '$animal')";
$result=mysqli_query($conn,$sql);
?>