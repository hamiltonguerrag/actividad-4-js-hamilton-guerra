console.log('En linea:actividad 5')


let  tipoHuevo  =  parseInt ( prompt ( `¿Cúal es el tipo de huevos que quieres comprar?: Elije 1 para llevar huevos tipo 'A' o elije 2 para llevar huevos tipo 'AA'` ) )

let  huevosAdquiridos  =  parseInt ( prompt ( 'Ingrese la cantidad de huevos que desea llevar' ) )

if  ( tipoHuevo  =  1  &&  huevosAdquiridos  <  99 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevosAdquiridos ) } ` )
} 
más 
if  ( tipoHuevo  =  1  &&  huevosAdquiridos  >  100  &&  huevosAdquiridos  <  200 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevosAdquiridos )  /  0.05 } ` )
} 
más
if  ( tipoHuevo  =  1  &&  huevosAdquiridos  >  101  &&  huevosAdquiridos  <  201 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevosAdquiridos )  /  0.05 } ` )
}
más
if  ( tipoHuevo  =  1  &&  huevosAdquiridos  >  221  &&  huevosAdquiridos  <  301 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevosAdquiridos )  /  0.08 } ` )
}
más
if  ( tipoHuevo  =  1  &&  huevosAdquiridos  >  301 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevosAdquiridos )  /  0.1 } ` )
}
más
if  ( tipoHuevo  =  2  &&  huevosAdquiridos  <  101 ) {
    alert ( `Usted debe pagar una cantidad de ${ ( 220  *  huevosAdquiridos ) } ` )
}
más 
if ( tipoHuevo  =  2  &&  tipoHuevo  >  100  &&  huevosAdquiridos  <  201 ) {
    alert ( `El total a pagar es ${ ( 250  *  huevosAdquiridos ) /  0.05 } ` )
}
más 
if ( tipoHuevo  =  2  &&  huevosAdquiridos >  201  &&  huevosAdquiridos  <  301 ) {
    alert ( `El total a pagar es ${ ( 250  *  huevosAdquiridos ) /  0.08 } ` )
}
más 
if ( tipoHuevo  =  2  &&  huevosAdquiridos  >=  301 ) {
    alert ( `El total a pagar es ${ ( 250  *  huevosAdquiridos ) /  0.10 } ` )
} 
más 
alert ( `Para validar tu compra, debes elegir 1 o 2 para poder hacer tu compra, de lo contrario no sera realizado`)

