import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chessboard',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="chessboard">
  <div *ngFor="let row of rows; let rowIndex = index" class="row">
    <div *ngFor="let col of cols; let colIndex = index" 
        (drop)="onDrop($event, col, row)"
        (dragover)="allowDrop($event)"
        [ngClass]="{'black-square': isBlackSquare(col, row), 'highlight': isHighlighted(col + row)}"
    

        class="square">
        
      {{col}}{{row}}
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
export class ChessboardComponent {
  rows = [8, 7, 6, 5, 4, 3, 2, 1];
  cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  pieces = ['Torre', 'Alfiere'];
  highlightedSquares = new Set<string>();

  isBlackSquare(col: string, row: number): boolean {
    const colIndex = this.cols.indexOf(col)+1;
    return (colIndex + row) % 2 === 0;
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDragStart(event: DragEvent, piece: string) {
    if(event && event.dataTransfer){
    event.dataTransfer.setData('piece', piece);}
  }

  onDrop(event: DragEvent, col: string, row: number) {
    event.preventDefault();
    if(event && event.dataTransfer){
    const piece = event.dataTransfer.getData('piece');
    this.highlightSquares(piece, col, row);
    }
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

  // Implementa questa funzione in base alla logica specifica di ogni pezzo
  calculateControlledSquares(piece: string, col: string, row: number): string[] {
    // Esempio: restituisce un array di caselle in notazione algebrica (es. ['a3', 'b4'])
    return [];
  }
}
