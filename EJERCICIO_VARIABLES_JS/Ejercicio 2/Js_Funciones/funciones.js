alert ("Funciones");

let PI_VALOR=3.1416;

// Perímetro círculo
function perimetroCirculo (diametro) {
    let perimetro = PI_VALOR * diametro;
    return `El perimetro del círculo es de: ${perimetro} unidades`;
}
//FUNCIÓN FLECHA 
const perimetroDeCirculo = (diametro) => perimetro= PI_VALOR * diametro;




//Area rectángulo
function areaRectangulo (largo,ancho) {
    let area = largo*ancho ;
    return `El área del rectángulo es de: ${area} unidades`;
}
//FUNCIÓN FLECHA
const areaDeRectangulo = (largo,ancho) => area= largo*ancho;




//Cuadrado de un número 
function numeroAlCuadrado (numero){
    let cuadrado = numero*numero;
    return `El cuadrado del número es: ${cuadrado}`;
}
//FUNCION FLECHA
const CuadradoDeNumero = (numero) => cuadrado=numero*numero;


//Convertir de celsius a Farentheit 
function convercionCelsiusAFarentheit (temperatura){
    let conversion = (temperatura* (9/5))+32;
    return `La temperatura en Farenheit es: ${conversion}`;
}
//FUNCION FLECHA
const DeCelsiusAFarenheit = (temperatura) => conversion=(temperatura* (9/5))+32;



//Calcular voltaje 
function calculoVoltaje (resistencia, corriente){
    let voltaje = corriente*resistencia;
    return `El voltaje obtenido es: ${voltaje} volts`;
}
//FUNCION FLECHA
const formulaVoltaje = (resistencia, corriente) => voltaje =corriente*resistencia;



//Calcular volumen de una esfera
function volumenEsfera (radio){
    let volumen =(4/3)* PI_VALOR* radio**3;
    return `El volumen de la esfera es: ${volumen} unidades`;
}
//FUNCION FLECHA 
const volumenDeEsfera = (radio) => volumen =(4/3)* PI_VALOR* radio**3;

