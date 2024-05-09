import { Color } from '../color';
import { Square } from '../square';

// http://massivetechinterview.blogspot.com/2015/07/design-chess-game-using-oo-principles.html

// https://chessboardjs.com/examples#1001

export abstract class Piece {

  constructor(protected color: Color, protected square: Square) {

  }

  abstract validMoves(): Square[];
  abstract img(): string;

}
