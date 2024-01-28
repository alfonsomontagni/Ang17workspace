import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chessboard01',
  standalone: true,
  imports: [CommonModule],
  template: `

<div class="chessboard">
  <div *ngFor="let row of rows; let rowIndex = index" class="row">
  <div class="square" *ngFor="let col of cols; let colIndex = index" 
     [ngClass]="{'black-square': isBlackSquare(col, row), 'highlight': isHighlighted(col + row)}"
     (dragover)="allowDrop($event)"
     (drop)="onDrop($event, col, row)">
  <img *ngIf="getPieceImage(col, row)" 
       [src]="getPieceImage(col, row)" 
       class="piece" 
       draggable="true" 
       (dragstart)="onPieceDragStart($event, col, row)">
</div>
  </div>
</div>
<!-- div class="pieces-box">
  <div class="piece" *ngFor="let piece of pieces" draggable="true" (dragstart)="onDragStart($event, piece)">
    {{piece}}
  </div>
  
</div -->
<div class="pieces-box">
  <img src="assets/pezzi/Alfiere.png" class="piece" draggable="true" (dragstart)="onDragStart($event, 'Alfiere')">
  <img src="assets/pezzi/Torre.png" class="piece" draggable="true" (dragstart)="onDragStart($event, 'Torre')">
</div>

  `,
  styles: `
  
  `
})
export class Chessboard01Component {
  rows = [8, 7, 6, 5, 4, 3, 2, 1];
  cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  pieces: {[key: string]: string} = {}; // Chiave: notazione casella, Valore: immagine del pezzo
  highlightedSquares = new Set<string>();

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDragStart(event: DragEvent, piece: string) {
    event && event.dataTransfer && event.dataTransfer.setData('piece', piece);
  }

  onDropold(event: DragEvent, col: string, row: number) {
    event.preventDefault();
     
    const piece =event && event.dataTransfer && event.dataTransfer.getData('piece');
    const square = col + row;
    console.log(piece)
    this.pieces[square] = `assets/pezzi/${piece}.png`; // Assumi che le immagini siano denominate come i pezzi
  }

  getPieceImage(col: string, row: number): string | undefined {
    return this.pieces[col + row];
  }
// chessboard.component.ts
onPieceDragStart(event: DragEvent, col: string, row: number) {
  const square = col + row;
  event && event.dataTransfer && event.dataTransfer.setData('square', square); // Passa la posizione originale del pezzo
  event && event.dataTransfer && event.dataTransfer.setData('piece', this.pieces[square]); // Passa l'immagine/identificatore del pezzo
}

onDrop(event: DragEvent, col: string, row: number) {
  event.preventDefault();
    const square = col + row;
  const sourceSquare =event && event.dataTransfer &&  event.dataTransfer.getData('square');
  const piece =event && event.dataTransfer &&  event.dataTransfer.getData('piece');

  if (sourceSquare) {
    delete this.pieces[sourceSquare]; // Rimuovi il pezzo dalla sua posizione originale
  }

 // const targetSquare = col! + row!;
  const tempSquare = col + row; // `tempSquare` potrebbe essere 'string | null'
const targetSquare: string = tempSquare!; // Asserzione di tipo per garantire che `tempSquare` non sia `null`
console.log("targetSquare",event)
   //this.pieces[targetSquare] = piece; // Posiziona il pezzo nella nuova casella
 
}

  calculateControlledSquares(piece: string, col: string, row: number): string[] {
    // Esempio: restituisce un array di caselle in notazione algebrica (es. ['a3', 'b4'])
    return [];
  }
  highlightSquares(piece: string, col: string, row: number) {
    // Qui dovresti calcolare e aggiungere le caselle controllate al set highlightedSquares
    // Questo esempio presuppone una funzione fittizia calculateControlledSquares
    // che dovresti implementare in base alla logica specifica di ogni pezzo
    const controlledSquares = this.calculateControlledSquares(piece, col, row);
    this.highlightedSquares = new Set(controlledSquares);
  }

  isHighlighted(square: string): boolean {
    return this.highlightedSquares.has(square);
  }

  isBlackSquare(col: string, row: number): boolean {
    const colIndex = this.cols.indexOf(col)+1;
    return (colIndex + row) % 2 === 0;
  }
}
