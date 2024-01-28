import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chessboardcdk01',
  standalone: true,
  imports: [CommonModule,DragDropModule],
  template: `
    <!-- chessboard.component.html -->
<div class="chessboardx" cdkDropList (cdkDropListDropped)="drop($event)">
  <div *ngFor="let row of rows; let rowIndex = index" class="rowx">
    <div *ngFor="let col of cols; let colIndex = index" class="squarex" cdkDropList>
      <img src="assets/pezzi/Alfiere.png"
           *ngIf="alfierePosition === col + row"
           class="piecex"
           cdkDrag>
    </div>
  </div>
</div>
  `,
  styles: `
  .chessboardx {
  display: flex;
  flex-wrap: wrap;
  width: 320px; /* esempio: 8 caselle * 40px ciascuna */
}
.rowx {
  display: flex;
}
.squarex {
  width: 40px;
  height: 40px;
}
.piecex {
  width: 100%;
  height: auto;
}
.black-squarex {
  background-color: #8f9779; /* esempio di colore per caselle nere */
}
  `
})
export class Chessboardcdk01Component {
  rows = [8, 7, 6, 5, 4, 3, 2, 1];
  cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  alfierePosition = 'd4'; // Posizione iniziale dell'Alfiere

  drop(event: CdkDragDrop<string[]>): void {
    // Logica per aggiornare la posizione dell'Alfiere dopo il drop
    this.alfierePosition = event.container.data[0];
  }
}
