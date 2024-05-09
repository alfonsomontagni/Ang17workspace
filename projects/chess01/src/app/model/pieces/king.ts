import { Piece } from './piece';
import { Square } from '../square';
import { Color } from '../color';

export class King extends Piece {

  constructor(color: Color, square: Square) {
    super(color, square);
  }

  img(): string {
    return this.color === Color.BLACK ? 'assets/bK.png' : 'assets/wK.png';
  }

  validMoves(): Square[] {
    return null!;
  }

}
