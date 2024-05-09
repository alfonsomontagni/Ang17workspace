import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Board } from '../../model/board';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule,SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  private _board: Board;

  constructor() {
    this._board = new Board();
   }

  ngOnInit() {

  }

  get board(): Board {
    return this._board;
  }
}
