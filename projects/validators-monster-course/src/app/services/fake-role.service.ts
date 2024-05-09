import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeRoleService {
  // Simulazione di una chiamata HTTP che ritorna un array di ruoli validi
  getValidRoles(): Observable<string[]> {
    return of(['admin', 'dev']).pipe(
      delay(1000)  // Simula un delay di 1 secondo
    );
  }
}
