
import { pedirCarta, valorCarta, crearCartaHTML } from "./index.js";

/**
 * Turno de la computadora
 * @param {number} puntosMinimos Puntos minimos para que la computadora gane
 * @param {HTMLElement} puntosHTML Elementos HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora ,deck = [] ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('Puntos HTML son necesarios');

    let puntosComputadora = 0;

    console.log('Computadora Turno'+ puntosHTML);  

    do {
        const carta = pedirCarta( deck ); 

        //console.log( puntosComputadora );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 400 );
}

