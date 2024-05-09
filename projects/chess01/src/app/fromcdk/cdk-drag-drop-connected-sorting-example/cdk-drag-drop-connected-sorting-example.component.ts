import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cdk-drag-drop-connected-sorting-example',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './cdk-drag-drop-connected-sorting-example.component.html',
  styleUrl: './cdk-drag-drop-connected-sorting-example.component.scss'
})
export class CdkDragDropConnectedSortingExampleComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
