<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="peticiones fetch.js" type="text/javascript"></script>
    <meta charset="UTF-8">
    <title>Ejemplo Fetch</title>
<!-- Incluimos librería Bootstrap css-->
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
          integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy"
          crossorigin="anonymous">


    <!-- Incluimos las librerís JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"
        ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous">

    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
            integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
            crossorigin="anonymous">
    </script>
    <script src="js/validacion.js" defer></script>
    <script src="js/eliminar.js" type="text/javascript"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
	<div class="row">
  
    <div>
        <select name="select" id="select" onchange="funcionAjaxAsincronaJSON();">
            <option value="">Elige un campo</option>
            <option value="id">id</option>
            <option value="nombre">nombre</option>
            <option value="tipo">tipo</option>
            <option value="animal">animal</option>
            <option value="precio">precio</option>
            <option value="descripcion">descripcion</option>
        </select>

    </div>
   

</div>


    <div class="row">
        <form id="formulario" onsubmit ="validarFormulario()">
        <div id="spinner" class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
        </div>
            
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" onchange="validarNombre()">
                <div class="error bg-danger"></div>
              
                <label for="descripcion">Descripcion</label>
                <input type="text" class="form-control" id="descripcion" onchange="validarDescripcion()">
                <div class="error bg-danger"></div>
                <label for="tipo">Tipo</label>
                <select id="tipo" class="form-control" onchange="validarTipo()">
                    <option value=""> </option>
                    <option value="labial">Labios</option>
                    <option value="piel">Piel</option>
                    <option value="ojos">Ojos</option>
                </select>
                <div class="error bg-danger"></div>
            
                <label for="precio">precio</label>
                <input id="precio" class="form-control" onchange="validarPrecio()">
                   
              
                <div class="error bg-danger"></div>
            
                <label class="form-check-label">Cruelty Free</label>
                <input  type="checkbox" id="animal" value="1"  onchange="validarAnimal()">
                <div class="error bg-danger"></div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          
            
            <div id="resultado"></div>
            
        </form>
    </div>
    <div>
        <?php
   require_once 'servidor/datosMYSQL.php';
?>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Tipo</th>
      <th scope="col">Descripción</th>
      <th scope="col">Cruelty Free</th>
      <th scope='col'>Acción</th>
    </tr>
    </thead>
  <tbody>
    <?php
        while($pelicula = $peliculas->fetch_assoc()) {
            ?>
            <tr data-idPelicula="<?php echo $pelicula["id"]; ?>">
                <td><?php echo $pelicula["id"]; ?></td>
                <td><?php echo $pelicula["Nombre"]; ?></td>
                <td><?php echo $pelicula["Precio"]; ?></td>
                <td><?php echo $pelicula["Tipo"]; ?></td>
                <td><?php echo $pelicula["Descripcion"]; ?></td>
                <td><?php echo $pelicula["Animal"]; ?></td>
                <td><button data-idEliminar="<?php echo $pelicula["id"]; ?>" data-accion="eliminar">Eliminar</button></td>
            </tr>
            <?php
        }
    ?>
</tbody>
</table>
<div id="modalEliminar" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Eliminar Pelicula</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>¿Estás seguro de eliminar esta pelicula?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button id="botonConfirmarEliminar" type="button"  class="btn btn-primary" data-accion="confirmar-eliminar" data-ideliminar="">Confirmar</button>
      </div>
    </div>
  </div>
</div>
    </div>
</body>
</html>
