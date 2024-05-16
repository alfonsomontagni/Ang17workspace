import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpressionHasChangedAfterItWasCheckedErrorComponent } from './expression-has-changed-after-it-was-checked-error/expression-has-changed-after-it-was-checked-error.component';
import { timeout } from 'rxjs';
import { TimeoutComponent } from './timeout/timeout.component';
import { ObservableErrorComponent } from './observable-error/observable-error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,
    ExpressionHasChangedAfterItWasCheckedErrorComponent,
    TimeoutComponent,
    ObservableErrorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  message = 'loading...';

  ngAfterViewInit(){
    /*
    ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: 
    Expression has changed after it was checked. Previous value: 'all done loading'. 
    Current value: 'all done loadingx'. Expression location: _AppComponent component. 
    */
   // this.message = 'all done loadingx'
  }

  //fix is ngAfterContentChecked()
  ngAfterContentChecked(){
    this.message = 'all done loading'
  }
}


/*

Questo errore è comune in Angular e si verifica quando il valore di un'espressione viene modificato
 dopo che Angular ha già verificato il suo valore durante il ciclo di rilevamento delle modifiche.

Il modo migliore per risolvere questo problema dipende dal contesto della tua applicazione.
 Se la modifica del valore deve avvenire dopo che Angular ha completato 
 il ciclo di controllo del contenuto, utilizzare ngAfterContentChecked() è appropriato.
  Se invece vuoi forzare Angular a verificare di nuovo le modifiche, 
  puoi usare ChangeDetectorRef.

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.message = 'all done loadingx';
    this.cdr.detectChanges();  // Forza il rilevamento delle modifiche
  }
*/