/*
let numeroSECRETO = 5;
//alert('Hola mundo');
let numeroUSUARIO = prompt('Me indicas un numero por favor:');
console.log(numeroUSUARIO);

if (numeroUSUARIO == numeroSECRETO){
    alert('acertaste el numero')

}else {
    alert('El número secreto era ' + numeroSECRETO + ', pero elegiste ' + numeroUSUARIO)
}
*/

let porcentajeDescuento = 0;
let cantidadMillas = prompt("Ingrese la cantidad de millas");
/*if (cantidadMillas > 30000) {
    alert(`Tu descuento es de ${porcentajeDescuento + 20}`);
} else if ( cantidadMillas < 30000 && cantidad millas > 5000 ) {
    alert (`Tu descuento es de ${porcentajeDescuento + 10}`);
} else (cantidadMillas < 5000){
    porcentajeDescuento = 0;
}
*/

if (cantidadMillas > 5000 && cantidadMillas < 30000){
    (porcentajeDescuento=10)
} else if (cantidadMillas > 30000){
    (porcentajeDescuento=20)
}else{
    (porcentajeDescuento=0)
}