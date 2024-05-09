import { CdkDragEnter, CdkDragExit, CdkDragSortEvent, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
 import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Piece } from '../../model/pieces/piece';
import { Square } from '../../model/square';
 
@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  @Input() public square!: Square;
  private temp!: Piece;

  constructor() {}

  ngOnInit() {}

  enteredDrop(event: CdkDragEnter<Square, Square>) {
    // La tua logica per quando un elemento entra in una nuova DropList
  }
  exitedDrop(event:   CdkDragExit<Square, Square>) {

  }

  sortedDrop(event:  CdkDragSortEvent<Square, Square>) {

  }

  onDrop(event: CdkDragDrop<Square, Square>) {
    // La tua logica per quando un elemento viene rilasciato
    if (event.isPointerOverContainer) {
      const from: Square = event.previousContainer.data;
      const to: Square = event.container.data;
      if (event.previousContainer !== event.container) {
        to.piece = from.piece!;
      from.piece = undefined!;
      } else {
        to.piece = from.piece!;
      }
    }
  }
}
