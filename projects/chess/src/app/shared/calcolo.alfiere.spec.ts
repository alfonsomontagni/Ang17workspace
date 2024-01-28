import { Casella, isWhiteSquare } from "./calcolo.torre.spec";

// Mappatura delle colonne a numeri, definita prima per evitare errori
const columnMap = {
  'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8
};

// Definizione del tipo per le chiavi valide di columnMap
type ColumnKey = keyof typeof columnMap;

function calcolaCaselleControllateAlfiere(posizioneAlfiere: Casella): Casella[] {
  const caselleControllate: Casella[] = [];

  const columnNumber = columnMap[posizioneAlfiere.column as ColumnKey];

  // Calcola le caselle in tutte e quattro le direzioni diagonalmente
  for (let direction of ['up-left', 'up-right', 'down-left', 'down-right']) {
    for (let step = 1; step < 8; step++) {
      let newColumnNumber: number | null = null, newRow: number | null = null;

      switch (direction) {
        case 'up-left':
          newColumnNumber = columnNumber - step;
          newRow = posizioneAlfiere.row + step;
          break;
        case 'up-right':
          newColumnNumber = columnNumber + step;
          newRow = posizioneAlfiere.row + step;
          break;
        case 'down-left':
          newColumnNumber = columnNumber - step;
          newRow = posizioneAlfiere.row - step;
          break;
        case 'down-right':
          newColumnNumber = columnNumber + step;
          newRow = posizioneAlfiere.row - step;
          break;
      }

      if (newColumnNumber && newColumnNumber >= 1 && newColumnNumber <= 8 && newRow && newRow >= 1 && newRow <= 8) {
        const newColumn = Object.keys(columnMap).find(key => columnMap[key as ColumnKey] === newColumnNumber) as ColumnKey | undefined;
        if (newColumn !== undefined) { // Gestione del caso 'undefined'
          const isSquareWhite = (newColumnNumber + newRow) % 2 !== 0;
          caselleControllate.push({
            column: newColumn,
            row: newRow,
            color: isSquareWhite ? 'bianco' : 'nero',
            isWhite: isSquareWhite,
            isBlack: !isSquareWhite,
          });
        }
      } else {
        break;
      }
    }
  }

  return caselleControllate;
}
describe("calcolaCaselleControllateAlfiere function", function () {
  it("dovrebbe calcolare correttamente tutte le caselle controllate da un Alfiere in una data posizione", function () {
    // Definisci la posizione dell'Alfiere per il test
  //  const posizioneAlfiere = { column: 'c', row: 4, color: 'bianco', isWhite: true, isBlack: false };
  // Genera una colonna casuale ('a'-'h')
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const randomColumn = columns[Math.floor(Math.random() * columns.length)];

  // Genera una riga casuale (1-8)
  const randomRow = Math.floor(Math.random() * 8) + 1;
console.log("*******alfiere è in",`${randomColumn}${randomRow}` )
// Determina il colore della casella casuale
const isSquareWhite = isWhiteSquare(randomColumn + randomRow);
const posizioneAlfiere = {
  column: randomColumn,
  row: randomRow,
  color: isSquareWhite ? 'bianco' : 'nero',
  isWhite: isSquareWhite,
  isBlack: !isSquareWhite,
};
console.log("posizione casuale alfiere ",posizioneAlfiere)
    // Calcola le caselle controllate dall'Alfiere
    const caselleControllate = calcolaCaselleControllateAlfiere(posizioneAlfiere);

    // Log delle caselle controllate per verifica manuale
  /*  caselleControllate.forEach(casella => {
      console.log(`${casella.column}_${casella.row}-${casella.color}`);
    });*/
    const caselleLog = caselleControllate.map(casella => `${casella.column}${casella.row}-${casella.color}-W:${casella.isWhite}-N:${casella.isBlack}-`);
    console.log("***", caselleLog);
  });
});
