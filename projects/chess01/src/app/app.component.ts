import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { CdkDragDropConnectedSortingExampleComponent } from './fromcdk/cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BoardComponent,CdkDragDropConnectedSortingExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chess01';
}
