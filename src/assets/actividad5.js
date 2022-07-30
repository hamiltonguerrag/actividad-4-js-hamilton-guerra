console.log('En linea:actividad 5')


let  huevo  =  parseInt ( prompt ( `¿Cúal es el tipo de huevos que quieres comprar?: Elije 1 para llevar huevos tipo 'A' o elije 2 para llevar huevos tipo 'AA'` ) )

let  huevoPorAdquirir  =  parseInt ( prompt ( 'Ingrese la cantidad de huevos que desea llevar' ) )

if  ( huevo  =  1  &&  huevoPorAdquirir  <  99 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevoPorAdquirir ) } ` )
} 
más 
if  ( huevo  =  1  &&  huevoPorAdquirir  >  100  &&  huevoPorAdquirir  <  200 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevoPorAdquirir )  /  0.05 } ` )
} 
más
if  ( huevo  =  1  &&  huevoPorAdquirir  >  101  &&  huevoPorAdquirir  <  201 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevoPorAdquirir )  /  0.05 } ` )
}
más
if  ( huevo  =  1  &&  huevoPorAdquirir  >  221  &&  huevoPorAdquirir  <  301 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevoPorAdquirir)  /  0.08 } ` )
}
más
if  ( huevo  =  1  &&  huevoPorAdquirir  >  301 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevoPorAdquirir )  /  0.1 } ` )
}
más
if  ( huevo  =  2  &&  huevoPorAdquirir  <  101 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevoPorAdquirir ) } ` )
}
más 
if ( huevo  =  2  &&  huevoPorAdquirir  >  100  &&  huevoPorAdquirir  <  201 ) {
    alert ( `El total a pagar es ${ ( 250  *  huevoPorAdquirir ) /  0.05 } ` )
}
más 
if ( huevo  =  2  &&  huevoPorAdquirir >  201  &&  huevoPorAdquirir  <  301 ) {
    alert ( `El total a pagar es ${ ( 250  *  huevoPorAdquirir ) /  0.08 } ` )
}
más 
if ( huevo =  2  &&  huevoPorAdquirir  >=  301 ) {
    alert ( `El total a pagar es ${ ( 250  *  huevoPorAdquirir) /  0.10 } ` )
} 
más 
alert ( `Para validar tu compra, debes elegir 1 o 2 para poder hacer tu compra, de lo contrario no sera realizado`)

