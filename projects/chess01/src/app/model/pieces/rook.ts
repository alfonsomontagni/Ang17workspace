import { Piece } from './piece';
import { Square } from '../square';
import { Color } from '../color';

export class Rook extends Piece {

  constructor(color: Color, square: Square) {
    super(color, square);
  }

  img(): string {
    return this.color === Color.BLACK ? 'assets/bR.png' : 'assets/wR.png';
  }

  validMoves(): Square[] {
    console.log("valid rook")
    return null!;
  }

}
