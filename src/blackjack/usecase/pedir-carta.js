
/**
 * Esta funcion permite obtener una carta
 * @param {Array<String></String>} deck
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = (deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}