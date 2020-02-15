<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

$id=$_POST["id"];
// CREAMOS LA CONECCION CON LA BASE DE DATOS COLOCANDO NUESTRO SERVER,USER,PASSWORD,BASE DE DATOS.
$conn = mysqli_connect( 'localhost', 
                        'root', 
                        '', 
                        'tienda_de_cosmetica');
// CREAMOS EL SELECT QUE BUSQUE LOS DATOS DE NUESTRO MUEBLE CUANDO COINCIDA EL ID.
$sql =  "SELECT `id`, `Nombre`, `Precio`, `Animal`,`Tipo`,`Descripcion` FROM `maquillaje` WHERE id=$id";
$maquillaje=array();

$result=mysqli_query($conn,$sql);
while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $maquillaje[]=$row;
}


echo json_encode($maquillaje);
?>