import { Piece } from './piece';
import { Square } from '../square';
import { Color } from '../color';

export class Bishop extends Piece {

  constructor(color: Color, square: Square) {
    super(color, square);
  }

  img(): string {
    return this.color === Color.BLACK ? 'assets/bB.png' : 'assets/wB.png';
  }

  validMoves(): Square[] {
    return null!;
  }

}
