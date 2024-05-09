import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChessboardComponent } from './components/chessboard.component';
import { Chessboard0Component } from './components/chessboard0.component';
import { Chessboardcdk01Component } from './components/chessboardcdk01.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChessboardComponent,Chessboard0Component,Chessboardcdk01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chess';
}
