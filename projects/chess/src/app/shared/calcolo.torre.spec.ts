export interface Casella {
    column: string;
    row: number;
    color: string; // "bianco" o "nero"
    isWhite: boolean;
    isBlack: boolean;
}

export interface PosizioneTorre {
    pezzo: 'Torre';
    casella: Casella;
    caselleControllate: Casella[];
}

function calcolaCaselleControllateTorre(posizioneTorre: Casella): Casella[] {
    const caselleControllate: Casella[] = [];

    // Controllo verticale (stessa colonna, tutte le righe)
    for (let r = 1; r <= 8; r++) {
        if (r !== posizioneTorre.row) { // Escludi la casella corrente della Torre
            caselleControllate.push({
                column: posizioneTorre.column,
                row: r,
                color: (getColumnNumber(posizioneTorre.column) + r) % 2 !== 0 ? 'bianco' : 'nero',
                isWhite: (getColumnNumber(posizioneTorre.column) + r) % 2 !== 0,
                isBlack: (getColumnNumber(posizioneTorre.column) + r) % 2 === 0,
            });
        }
    }

    // Controllo orizzontale (stessa riga, tutte le colonne)
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach(c => {
        if (c !== posizioneTorre.column) { // Escludi la casella corrente della Torre
            const ss = getColumnNumber(c) + posizioneTorre.row;
           // const caz = (getColumnNumber(c) + posizioneTorre.row)) % 2;
           const t = (getColumnNumber(c) + posizioneTorre.row) % 2
            console.log(c+posizioneTorre.row+" orizzontale,"+getColumnNumber(c)+" "+ posizioneTorre.row+" = "+ss+"*** ->"+t+"<--")
            caselleControllate.push({
                column: c,
                row: posizioneTorre.row,
                color: (getColumnNumber(c) + posizioneTorre.row) % 2 !== 0 ? 'bianco' : 'nero',
                isWhite: (getColumnNumber(c) + posizioneTorre.row) % 2 !== 0,
                isBlack: (getColumnNumber(c) + posizioneTorre.row) % 2 === 0,
            });
        }
       
    });

    return caselleControllate;
}

// Funzione ausiliaria per convertire la colonna da lettera a numero
function getColumnNumber(column: string): number {
   // console.log("column++++")
    return column.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}


describe("calcolaCaselleControllateTorre function", function () {
    xit("should correctly calculate all controlled squares for a Rook at a given position", function () {
        // Posizione della Torre per il test
        const posizioneTorre: Casella = { column: 'd', row: 4, color: 'bianco', isWhite: true, isBlack: false };

        // Calcola le caselle controllate dalla Torre
        const caselleControllate = calcolaCaselleControllateTorre(posizioneTorre);

        // Verifica che il numero di caselle controllate sia corretto (7 orizzontali + 7 verticali = 14)
        expect(caselleControllate.length).toBe(14);
        // Prepara e fai il console.log delle caselle controllate in formato "colonna_riga-colore"
        const caselleLog = caselleControllate.map(casella => `${casella.column}${casella.row}-${casella.color}`);
        console.log("***", caselleLog);

        // Aggiungi altri controlli specifici se necessario, ad esempio verificare alcune caselle specifiche
         // Aggiungi altri controlli specifici se necessario, ad esempio verificare alcune caselle specifiche
});
  });
  export function isWhiteSquare(square: string): boolean {
    // Definizione esplicita delle chiavi per columnMap
    type ColumnKey = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
  
    const columnMap: { [key in ColumnKey]: number } = {
      'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8
    };
  
    const column = square[0] as ColumnKey; // Asserzione di tipo per garantire che column sia una chiave valida
    const row = parseInt(square[1], 10);
    const columnNumber = columnMap[column]; // TypeScript è ora sicuro che column è una chiave valida
 // console.log(square+"  " +column)
 // console.log(square+"  " +row)
    return (columnNumber + row) % 2 !== 0;
  }
  
  /*
  function isWhiteSquare(square: string): boolean {
    const columnMap = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8 };
    const column = square[0];
    const row = parseInt(square[1], 10);
    const columnNumber = columnMap[column];
    return (columnNumber + row) % 2 !== 0;
  }*/
  function isWhiteSquarexx(square: string): boolean {
    // Definizione del tipo per la mappatura delle colonne
    type ColumnMapType = { [key: string]: number };

    // Mappatura delle colonne a numeri con il tipo definito
    const columnMap: ColumnMapType = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8 };

    // Estrai la colonna e la riga dalla notazione della casella
    const column = square[0];
    const row = parseInt(square[1], 10);

    // Converti la colonna in un numero usando la mappatura
    // Controllo aggiuntivo per TypeScript
    const columnNumber = columnMap[column as keyof ColumnMapType];

    // Determina il colore controllando se la somma di colonna e riga è pari (nero) o dispari (bianco)
    return (columnNumber + row) % 2 !== 0;
}
  describe("Torre controllo caselle", function () {
    it("dovrebbe calcolare correttamente tutte le caselle controllate da una Torre in una posizione casuale", function() {
      // Genera una colonna casuale ('a'-'h')
      const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const randomColumn = columns[Math.floor(Math.random() * columns.length)];
  
      // Genera una riga casuale (1-8)
      const randomRow = Math.floor(Math.random() * 8) + 1;
  console.log("*******la torre è in",`${randomColumn}${randomRow}` )
      // Determina il colore della casella casuale
      const isSquareWhite = isWhiteSquare(randomColumn + randomRow);
      const posizioneCasualeTorre = {
        column: randomColumn,
        row: randomRow,
        color: isSquareWhite ? 'bianco' : 'nero',
        isWhite: isSquareWhite,
        isBlack: !isSquareWhite,
      };
  console.log("posizione casuale",posizioneCasualeTorre)
      // Calcola le caselle controllate dalla Torre
      const caselleControllate = calcolaCaselleControllateTorre(posizioneCasualeTorre);
  
      // Log delle caselle controllate in formato "colonna_riga-colore"
     /* caselleControllate.forEach(casella => {
        console.log(`${casella.column}_${casella.row}-${casella.color}`);
      });*/ 
      const caselleLog = caselleControllate.map(casella => `${casella.column}${casella.row}-${casella.color}-W:${casella.isWhite}-N:${casella.isBlack}-`);
      console.log("***", caselleLog);
      // Verifica che il numero di caselle controllate sia corretto
      // La Torre controlla tutte le caselle nella sua colonna e riga escludendo la sua posizione
      const expectedControlledSquares = 14; // 7 caselle per colonna + 7 caselle per riga
      expect(caselleControllate.length).toBe(expectedControlledSquares);
    });
  });
  