import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-chessboard02',
  standalone: true,
  imports: [CommonModule , DragDropModule],
  template: `
   <div class="board" cdkDropListGroup>
  <div
    class="cell"
    *ngFor="let cell of board; let i = index"
    cdkDropList
    (cdkDropListDropped)="drop($event)"
    [cdkDropListData]="i"
    [cdkDropListEnterPredicate]="enterPredicate"
  >
    <img
      cdkDrag
      src="/assets/piece.jpg"
      width="100px"
      height="100px"
      *ngIf="cell === 1"
    />
  </div>
</div>
  `,
  styles: `
  .board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

  width: 800px;
  height: 800px;
}

.cell {
  border: 1px solid black;
}
  `
})
export class Chessboard02Component {
  board: number[] = Array(64).fill(0);

  constructor() {
    this.board[0] = 1;
    this.board[2] = 1;
  }

  drop(event: CdkDragDrop<number>) {
    this.board[event.previousContainer.data] = 0;
    this.board[event.container.data] = 1;
  }

  enterPredicate = (drag: CdkDrag, drop: CdkDropList) =>
    this.board[drop.data] === 0;
}
