import { Piece } from './piece';
import { Square } from '../square';
import { Color } from '../color';

export class Queen extends Piece {

  constructor(color: Color, square: Square) {
    super(color, square);
  }

  img(): string {
    return this.color === Color.BLACK ? 'assets/bQ.png' : 'assets/wQ.png';
  }

  validMoves(): Square[] {
    return null!;
  }

}
