import { Piece } from './piece';
import { Square } from '../square';
import { Color } from '../color';

export class Knight extends Piece {

  constructor(color: Color, square: Square) {
    super(color, square);
  }

  img(): string {
    return this.color === Color.BLACK ? 'assets/bN.png' : 'assets/wN.png';
  }

  validMoves(): Square[]   {
    return null!;
  }

}
