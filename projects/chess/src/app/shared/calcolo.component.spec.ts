function isWhiteSquareOld(square: string): boolean {
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
describe("isWhiteSquare function", function () {
    
  // Genera test per tutte le 64 caselle della scacchiera
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8];
  const verifyList: { column: string, row: number, color: string, isWhite:boolean, isBlack:boolean }[] = []

  columns.forEach(column => {
    rows.forEach(row => {
      const square = column + row.toString();
      // Aggiusta l'indice della colonna aggiungendo 1 per allinearlo alla numerazione delle righe
      const expectedResultIsWhite = ((columns.indexOf(column) + 1) + row) % 2 !== 0; // Determina se la casella dovrebbe essere nera
      verifyList.push({ column, row, color: expectedResultIsWhite ? 'bianco' : 'nero',
    isWhite: expectedResultIsWhite,isBlack: !expectedResultIsWhite
    })

      it(`should return ${expectedResultIsWhite} for square ${square}`, function() {
        expect(isWhiteSquareOld(square)).toBe(expectedResultIsWhite);
      });
    });
  });
    console.log("verifyList", verifyList)

});