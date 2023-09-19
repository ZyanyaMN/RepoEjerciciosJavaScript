alert("Estructuras de control")


//Ejercicio 1 if-else --> ¿Puede votar?
function puedeVotar (edad) {
    if(edad>=18){
        console.log("La persona tiene edad para votar");
    } else{
        console.log("La persona no tiene edad para votar");
    }
}


//Ejercicio 2 if-else --> Promedio calificaciones
function calificacionesAlumno (calificacion1, calificacion2, calificacion3, calificacion4) {
    
    promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4)/4;
    
    if(promedio>=7){
        console.log("Aprobado");
    } else{
        console.log("reprobado");
    }
}


//Ejercicio 3 if-else --> ¿Número primo?








// Ejercicio 4 if-else --> ¿Divisible entre 7 y 8?
function numeroDivisibleUno (numero) {
    division1= numero % 7;
    division2= numero % 8;
    if(division1 == 0 && division2 == 0){
        console.log("Verdadero. El número es divisible entre 7 y entre 8");
    } else{
        console.log("Falso. El número no es divisible entre 7 y entre 8");
    }
}



// Ejercicio 5 if-else --> ¿Divisible entre 4 o 9?
function numeroDivisibleDos (numero) {
    division1= numero % 4;
    division2= numero % 9;
    if(division1 == 0 && division2 == 0){
        console.log("Verdadero. El número es divisible entre 7 y entre 8");
    } else{
        console.log("Falso. El número no es divisible entre 7 y entre 8");
    }
}


// Ejercicio 6 Switch Calculadora Simple
function calculadoraSimple (operacion, numeroUno, numeroDos) {

switch (operacion){
    case 1:  // suma
    resultado = numeroUno + numeroDos; 
    console.log("Resultado de la suma: " + resultado);
    break;
    case 2:  // resta
    resultado1 = numeroUno - numeroDos; 
    resultado2 = numeroDos - numeroUno; 
    console.log("Resultado de la resta: " + resultado1);
    console.log("Resultado de la resta con los números invertidos: " + resultado2);
    break;
    case 3:  // multiplicación
    resultado = numeroUno * numeroDos; 
    console.log("Resultado de la multiplicación: " + resultado);
    break;
    case 4:  // división 1
    resultado1 = numeroUno / numeroDos; 
    resultado2 = numeroDos / numeroUno; 
    console.log("Resultado de la división 1: " + resultado1);
    console.log("Resultado de la división 2 (números invertidos): " + resultado2);
    break;
    default:
    console.log("Opción no disponible pruebe: 1:SUMA, 2: RESTA, 3:MULTIPLICACIÓN, 4:DIVISIÓN"); 
    break;
    }
}








// Ejercicio 7 Switch Categoría películas 
function categoriaPelicula (categoria) {
    categoria=categoria.toLowerCase();

    switch(categoria){
        case "accion": 
            console.log("John Wick. Una gran película de acción");
            break;
        case "acción": 
            console.log("John Wick. Una gran película de acción");
            break;
        case "drama": 
            console.log("Wiplash. Una gran película de drama");
            break;
        case "comedia": 
            console.log("Metal Lords. Una gran película de comedia");
            break;
        case "romance": 
            console.log("La La Land. Una gran película de romance");
            break;
        case "suspenso": 
            console.log("Midsommar. Una gran película de suspenso");
            break;
        case "terror": 
            console.log("Pearl. Una gran película de terror");
            break;
        default: 
            console.log("No hay recomendación de película para esa categoría, intente con: accion, drama, comedia, romance, suspenso o terror");
            break;
    }
}


// Ejercicio 8 if- else --> Cajero ATM

function cajeroATM (accion) {
if(accion === 1){
    console.log("Retirar dinero")
} else if (accion === 2){
     console.log("Realizar transferencia")
} else if ( accion === 3){
    console.log("Realizar depósito")
} else if ( accion === 4){
    console.log("Realizar pago de servicios")
} else {
    console.log("Esta acción no está disponible, prueba con 1, 2 ,3 o 4")
}
}


// Ejercicio 9 switch --> Conversor de divisas 
function conversorDeDivisas (pesos,cambio) {
    switch(cambio){
        case 1:  // Dolares Estadounidenses
            conversion= pesos * 0.059;
            console.log(conversion + " $ Dolares Americanos");
            break;
        case 2: // Euros
            conversion= pesos * 0.055;
            console.log(conversion + " € Euros");
            break;
        case 3: //Yenes japoneses
            conversion= pesos * 8.66;
            console.log(conversion + " ¥ Yenes japoneses");
            break;
        case 4: //libra esterlina
            conversion= pesos * 0.047;
            console.log(conversion + " £ libras esterlinas");
            break;
        case 5: //franco suizo
            conversion= pesos * 0.053;
            console.log(conversion + " Fr. francos suizos");
            break;
        default: 
            console.log("La opción no está disponible. Intente 1:Dolares americanos, 2:Euros, 3:Yenes Japoneses, 4:Libras Esterlinas, 5:Francos suizos");
            break;
    }
}


// Ejercicio 10 If-else --> Descuento de un producto 10% con código
function descuentoProducto (precioProducto, codigoDescuento) {
    codigoReal = "DESCUENTO10"; 
    if(codigoDescuento === codigoReal){
        descuento = .10 * precioProducto;
        precioFinal = precioProducto - descuento;
        console.log("¡Felicidades, se te realizó un descuento del 10%. El precio de tu producto queda en: " + precioFinal + "$");
    } else{
        console.log("Tu código no es válido. No tienes descuento.");
    }
}