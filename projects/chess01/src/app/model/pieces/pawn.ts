import { Piece } from './piece';
import { Square } from '../square';
import { Color } from '../color';

export class Pawn extends Piece {

  constructor(color: Color, square: Square) {
    super(color, square);
  }

  img(): string {
    return this.color === Color.BLACK ? 'assets/bP.png' : 'assets/wP.png';
  }

  validMoves(): Square[] {
    return null!;
  }

}
