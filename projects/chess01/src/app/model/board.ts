import { Square } from './square';
import { King } from './pieces/king';
import { Color } from './color';
import { Rook } from './pieces/rook';
import { Knight } from './pieces/knight';
import { Bishop } from './pieces/bishop';
import { Queen } from './pieces/queen';
import { Pawn } from './pieces/pawn';

export class Board {
  private _board!: Square[][];

  constructor() {
    this.initBoard();
  }

  initBoard(): void {
    this._board = [];
    for (let row = 0; row < 8; row++) {
      this._board[row] = [];

      for (let col = 0; col < 8; col++) {
        this._board[row][col] = new Square(row, col);
      }
    }

    this._board[0][0].piece = new Rook(Color.BLACK, this._board[0][0]);
    this._board[0][1].piece = new Knight(Color.BLACK, this._board[0][1]);
    this._board[0][2].piece = new Bishop(Color.BLACK, this._board[0][2]);
    this._board[0][3].piece = new Queen(Color.BLACK, this._board[0][3]);
    this._board[0][4].piece = new King(Color.BLACK, this._board[0][4]);
    this._board[0][5].piece = new Bishop(Color.BLACK, this._board[0][5]);
    this._board[0][6].piece = new Knight(Color.BLACK, this._board[0][6]);
    this._board[0][7].piece = new Rook(Color.BLACK, this._board[0][7]);

    for (let col = 0; col < 8; col++) {
      this._board[1][col].piece = new Pawn(Color.BLACK, this._board[1][col]);
    }

    for (let col = 0; col < 8; col++) {
      this._board[6][col].piece = new Pawn(Color.WHITE, this._board[1][col]);
    }

    this._board[7][0].piece = new Rook(Color.WHITE, this._board[7][0]);
    this._board[7][1].piece = new Knight(Color.WHITE, this._board[7][1]);
    this._board[7][2].piece = new Bishop(Color.WHITE, this._board[7][2]);
    this._board[7][3].piece = new Queen(Color.WHITE, this._board[7][3]);
    this._board[7][4].piece = new King(Color.WHITE, this._board[7][4]);
    this._board[7][5].piece = new Bishop(Color.WHITE, this._board[7][5]);
    this._board[7][6].piece = new Knight(Color.WHITE, this._board[7][6]);
    this._board[7][7].piece = new Rook(Color.WHITE, this._board[7][7]);

  }

  get board(): Square[][] {
    return this._board;
  }

}
