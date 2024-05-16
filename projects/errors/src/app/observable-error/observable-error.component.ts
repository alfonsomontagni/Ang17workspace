import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-observable-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-error.component.html',
  styleUrl: './observable-error.component.scss',
})
export class ObservableErrorComponent {
  loading$ = new BehaviorSubject(true);

  response$ = of('response').pipe(
    //per ovviare inserire delay poiché la catena è altrimenti sincrona
    delay(0),
    tap(() => this.loading$.next(false)));

  /* 
  main.ts:5 ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: 
  Expression has changed after
   it was checked. Previous value: 'true'. Current value: 'false'. 
   Expression location: _ObservableErrorComponent component.
  */
}
