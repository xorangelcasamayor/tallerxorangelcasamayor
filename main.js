//ejercicio # 01
let numero1 = 400
let numero2 = 300
if(numero1>numero2){
    console.log("el primer numero es mayor");
}


//ejercicio # 02
let numero1 = 400
let numero2 = 300
if (numero1 == numero2) {
    console.log("ambos numeros son iguales");
    
}else{
    console.log("son numeros diferentes");
}


//ejercicio # 03
let numero1 = 400
let numero2 = 300
if( numero1 >= numero2){
    console.log( "el primer numero es el mas grande");
}else{
    console.log("el segundo numero es el mas grande");
}
 

//ejercicio # 04
let numero1 = 400
let numero2 = 300
let numero3 = 850
if (numero1 < numero2 && numero1< numero3){
    alert(" el menor es "+numero1)

}else if( numero2 && numero1< numero2< numero3){
    alert("el menor es " +numero2);

}else{ alert("el menor es "+numero3);}

//ejercicio # 05

let persona1 = {
    nombre: "miguel",
    edad: 20,
    altura: 1.65

}
    
let persona2= {
    nombre: "juan",
    edad: 23,
    altura: 1.75}

 if (persona1.altura > persona2.altura) {
    alert("tiene mayor altura " + persona2.nombre)
    
 }else{
 alert("tiene menor altura " + persona1.nombre)
}

//ejercicio # 06

let nombre = prompt ("ingresar nombre") 
let edad = prompt( "ingresar edad")
let altura = prompt ("ingresar altura")
let vision = prompt ("ingresar vision")

if (edad>18 && altura>150 && vision>10) {
    alert("cumple con los requisitos")

    
}else{
    alert("no cumple con los requisitos")
}

//ejercicio # 07

let nombre = prompt("ingresar nombre")
let otroNombre = "xorangel"
let pase = prompt(" tiene entrada vip o normal ")
let entrada = prompt(" cuenta con entrada? si o no")

if (nombre == otroNombre || pase == "vip") {
    console.log(" bienvenido");
} else if (entrada === "si") {
    let entrada2 = prompt("desea usar la entrada?")

    if (entrada2 == "si") {
        console.log("bienvenido");
    } else { console.log("puede retirarse"); }


} else {
    let uso = prompt("desea comprar una entrada? si o no")
    if (uso == "si") {
        let dinero = prompt("cuanto dinero tiene?")
        if (dinero >= 1000 ) {
            console.log("bienvenido, puede ingresar");

        }else{ console.log("no cuenta con el dinero para la entrada");}
    } else {
        console.log("puede retirarse");
    }

}

//ejercicio # 08
const numeroIncognita = 3
alert("esto es un juego de adivinanza, tienes 3 intentos a para aceptar")
let numeroIngresado = prompt(" ingrese un numero del 1 al 10")


if (numeroIngresado == numeroIncognita){ 
    alert("te ganaste un iphone") 
}else{
 if (numeroIncognita < numeroIngresado) {
    alert("el numero ingresado es mayor, tienes 2 intentos");  
}else{ alert("el numero ingresado es menor");
}
numeroIngresado = prompt(" ingrese un numero del 1 al 10")
if (numeroIngresado == numeroIncognita){ 
    alert("te ganaste un iphone") 
}else{
    if (numeroIncognita < numeroIngresado) {
       alert("el numero ingresado es mayor, tienes 1 intento");  
   }else{ alert("el numero ingresado es menor");
   }}
   numeroIngresado = prompt(" ingrese un numero del 1 al 10")
   if (numeroIngresado == numeroIncognita){ 
    alert("te ganaste un iphone") 
}else{
 if (numeroIncognita < numeroIngresado) {
    alert("el numero ingresado es mayor, ya no te quedan intentos");  
}else{ alert(" no te ganaste un iphone");
}
 

 }
}

//ejercicio # 09

let tuEdad = prompt("cual es tu edad?")

if (tuEdad <= "12") { console.log("eres un infante"); }
else if (tuEdad <= "18") {
    console.log("eres un adolescente");
} else if (tuEdad <= "45") {
    console.log("eres un mayor jover");
}else if (tuEdad>=100) {console.log("en realidad esa es tu edad?");
    
}

//ejercicio # 10

alert ("Felices Juegos del Hambre... y que la suerte, siempre esté de su lado ")
let tributo1 = prompt ("priedra, papel o tijera tributo1")
let tributo2 = prompt ("priedra, papel o tijera tributo2")

if ((tributo1 === "piedra" && tributo2 === "tijera" || tributo1 === "tijera" && tributo2 === "papel"|| tributo1 === "papel" && tributo2 === "piedra" )) {
    alert ("Felicidades tributo1, eres el ganador")
}else if ((tributo2 === "piedra" && tributo1 === "tijera" || tributo2 === "tijera" && tributo1 === "papel"|| tributo2 === "papel" && tributo1 === "piedra" )){
    alert ("Felicidades tributo2, eres el ganador")
}else if (tributo1 === tributo2) {
    alert("ha habido empate players")
    
}else{ alert("uno de los jugadores hizo trampa")}

//ejercicio # 11

let color = prompt("ingrese un color")

switch (color) {
    case "negro":
        alert("falta de color")
        break;

        case "blanco":
            alert("falta de color")
            break;

            case "verde":
                alert("color de la naturaleza")
                break;

                case "azul":
                    alert("color del agua")
                    break;

                    case "amarillo":
                        alert("color del sol")
                        break;

                        case "rojo":
                            alert("color del fuego")
                            break;
                            case "marron":
                                alert("color de la tierra")
                                break;

    default:("Excelente elección, no lo teníamos pensado.")
    break;
}

//ejercicio # 12

let operacion = prompt("desea hacer una operacion de suma, resta, multiplicacion o division?")
let valor1
let valor2

switch (operacion) {
    case ("suma"):
        valor1 = parseInt(prompt("ingrese el valor 1"))
        valor2 = parseInt(prompt("ingrese el valor 2"))
        alert ("resultado="+(valor1 + valor2))
        break;

        case ("resta"):
            valor1 = parseInt(prompt("ingrese el valor 1"))
            valor2 = parseInt(prompt("ingrese el valor 2"))
            alert ("resultado="+(valor1 - valor2))
            break;

            case ("multiplicacion"):
                valor1 = parseInt(prompt("ingrese el valor 1"))
                valor2 = parseInt(prompt("ingrese el valor 2"))
                alert ("resultado="+(valor1 * valor2))
                break;

                case ("division"):
                    valor1 = parseInt(prompt("ingrese el valor 1"))
                    valor2 = parseInt(prompt("ingrese el valor 2"))
                    alert ("resultado="+(valor1 / valor2))
                    if (valor2===0) {alert("ERROR el valor2 mo puede ser igual a 0, vuelva a intentarlo")
                        
                    }
                    break;


    default:
        break;
}


//ejercicio #13

alert("por favor ingrese los datos de su documento de identificacion")

let nombre= prompt("ingrese su nombre")
let apellido = prompt ("ingrese su apellido")
let di = prompt("ingrese su documento de identificacion ")
let dia = prompt("ingrese su dia de nacimiento")
let mes = prompt("ingrese mes de nacimiento")
let año = prompt("ingrese año de nacimiento")
let mesExpedicion = prompt("ingrese mes de expedicion")
let añoExpedicion= prompt("ingrese año expedicion")
let sexo = prompt("ingrese su sexo")

let verificacion= prompt ("nombre:"+nombre+" apelllido: "+apellido+" documento de identidad "+di+" dia de nacimiento "+dia+" mes de nacimiento "+mes+" año de nacimiento "+año+" mes de expedicion "+mesExpedicion+" año de expedicon "+añoExpedicion+" sexo "+sexo+" los datos ingresados son correctos, si o no?")
    
if ( verificacion=== "si") {
    let dni={
        nombre: "nombre",
        apellido: "apellido",
        di: "documento identifiacion",
        fechaDeNacimiento: ("dia"-"año"-"mes"),
        fechaDeExpedicion : ("dia"-"año"-"mes"),
        sexo: ("sexo")
    }
    console.table(dni)
}else{
    alert("vuelva a intentarlo en un mes")
}
    