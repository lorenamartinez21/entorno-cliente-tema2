//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRITP ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder porbar las demas
function corregirDeclaraciones(){
    var funcion = new Object();
    var ejemplo = "EJEMPLO";
    var prueba123 = 123;
    var pruebaejemplo = "EJERCICIO";
    var prueba = "PRUEBA";
    var prueba = "PRUEBA";

    return true;
}

function declararNumeros(){
    let numA = 12;
    let numB = 10;
    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}

function declararString(){
    let cadena = "PRuEbA";
    return cadena === "PRuEbA"
        && typeof cadena === "string";
}

function noDefinido(){
    var y = null;
    var x = undefined;
    return x === undefined
        && y === null;
}

function declararSymbol(){
   var x=Symbol("hola")
    return typeof x === "symbol";
}

function declararFecha(){
     var hoy= new Date();
    return hoy instanceof Date;

}

function declararExpresionRegular(){
    var expresion= new RegExp(); // var expresion = /Prueba/;
    return expresion instanceof RegExp;
}

function declararFuncion(){
    var funcion=new Function();
    var funcion= declararFecha;
    funcion();
    return funcion instanceof Function;
}



function declararObjeto(){

    class ObjetoPrueba{};
    let objeto = new ObjetoPrueba;
    return objeto instanceof ObjetoPrueba;
}

function declararArray(){
    let lista=[0,0,0,0,"Correcto"]
    //lista.push("")     Para añadir
    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";

}


function declararArrayTipo(){
    let listaEnteros =new Int32Array([0,0,0,0,0,0,0,0,0,0])

    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;

}


function declararVariableGlobal(){
    window.x="SOY gLOBAL"

    return window.x
            && x === "SOY gLOBAL"
        ;

}

function declararPrototipo(){
    function prototipo(nombre){
        this.nombre=nombre;
    }
    var objeto = new prototipo("ejemplo");


    return objeto.__proto__ === prototipo.prototype

}

function declaracionConRetraso(){
    var y = 35;
    var resultado = y === 35;

    return resultado;
}


function declaracionLet(){
    let x = 0;
    let y="bien";
    if(x > 1){
        let y = "bien";
    }
    return y === "bien";
}

function declaracionConst(){
    const valor = 30;
    return valor === 30;
}

