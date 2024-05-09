import { Piece } from './pieces/piece';

export class Square {

  private _piece?: Piece ;

  constructor(public row: number, public col: number) {

  }

  get piece(): Piece | undefined{
    return this._piece;
  }

  set piece(piece: Piece) {
    this._piece = piece;
  }

}
