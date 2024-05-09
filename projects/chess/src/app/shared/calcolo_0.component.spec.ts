describe("isWhiteSquareZA function", function () {
    // Funzione per determinare se una casella è bianca


    // Test per ogni casella sulla scacchiera
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    const verifyList: { column: string, row: number, color: string }[] = []
    columns.forEach(column => {
        rows.forEach(row => {
            const square = column + row;
            const isWhite = (column.charCodeAt(0) - 'a'.charCodeAt(0) + 1 + row) % 2 !== 0;
            verifyList.push({ column, row, color: isWhite ? 'bianco' : 'nero' })
            it(`should return ${isWhite} for square ${square}`, function () {
                expect(isWhiteSquareZA(square)).toEqual(isWhite);
            });
        });
    });
   // console.log("verifyList", verifyList)

});


describe("isWhiteSquareZAAscii function", function () {
    // Funzione per determinare se una casella è bianca


    // Test per ogni casella sulla scacchiera
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    const verifyList: { column: string, row: number, color: string }[] = []
    columns.forEach(column => {
        rows.forEach(row => {
            const square = column + row;
            const isWhite = (column.charCodeAt(0) - 'a'.charCodeAt(0) + 1 + row) % 2 !== 0;
            verifyList.push({ column, row, color: isWhite ? 'bianco' : 'nero' })
            xit(`should return ${isWhite} for square ${square}`, function () {
                expect(isWhiteSquareZAAscii(square)).toEqual(isWhite);
            });
        });
    });
    //  console.log("verifyList",verifyList)

});
describe("isWhiteSquareZA function", function () {
    // Funzione isWhiteSquareZA definita qui o importata se definita altrove


    // Genera test per tutte le 64 caselle della scacchiera
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    const verifyList: { column: string, row: number, color: string }[] = []

    columns.forEach(column => {
        rows.forEach(row => {
            const square = column + row.toString();
         //   const expectedResult = (columns.indexOf(column) + row) % 2 !== 0; // Determina se la casella dovrebbe essere dicenera ma è bianca
         const expectedResult = ((columns.indexOf(column) + 1) + row) % 2 !== 0; // Determina se la casella dovrebbe essere nera

            verifyList.push({ column, row, color: expectedResult ? 'bianco' : 'nero' })

            it(`should return ${expectedResult} for square ${square}`, function () {
                expect(isWhiteSquareZA(square)).toBe(expectedResult);
            });
        });
    });
   // console.log("verifyList", verifyList)
});



function isWhiteSquareZAAscii(square: any) {
    const letterToNumber = square.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const number = parseInt(square[1], 10);
    // Casella bianca se la somma è dispari
    return (letterToNumber + number) % 2 !== 0;
}
/*
function isWhiteSquareZA(square) {
  // Mappatura delle colonne a numeri
  const columnMap = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8 };
  
  // Estrai la colonna e la riga dalla notazione della casella
  const column = square[0];
  const row = parseInt(square[1], 10);
 
  // Converti la colonna in un numero usando la mappatura
  const columnNumber  = columnMap[column];
 
  // Determina il colore controllando se la somma di colonna e riga è pari (bianco) o dispari (nero)
  return (columnNumber + row) % 2 !== 0;
}
*/

function isWhiteSquareZA(square: string): boolean {
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

function isWhiteSquareZA2(square: string) {
    type ColumnMapType = { [key: string]: number };
    const columnMap: ColumnMapType = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8 };
    const column = square[0];
    const row = parseInt(square[1], 10);
    const columnNumber = columnMap[column as keyof ColumnMapType];
    return (columnNumber + row) % 2 !== 0; // True per nero, false per bianco
}

xit('should behave...', () => {
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    const verifyList: { column: string, row: number, color: string }[] = []
});