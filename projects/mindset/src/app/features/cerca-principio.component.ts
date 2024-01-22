import { Component } from '@angular/core';
import { PARAMETRI, Parametro } from '../model/parametri';
import { PRINCIPI, Principio } from '../model/principi';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MATRIX } from '../model/matrice';

@Component({
  selector: 'app-cerca-principio',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <div class="flex flex-col">
      <label for="principio">Principio:</label>
      <select id="principio" formControlName="principio" class="border rounded p-2 mb-4">
        <option *ngFor="let p of principi" [value]="p.id">{{ '0' + p.id | slice:-2 }} - {{ p.name }} ::::: {{p.nameEng}}</option>
      </select>
      <button type="submit" class="bg-blue-500 text-white rounded p-2">Invia</button>
    </div>
    <ul>
      
  <li *ngFor="let coppia of parametriCorrelati">
  {{ '0' + coppia[0] | slice:-2 }} - {{ '0' + coppia[1] | slice:-2 }}

  <span>..... </span>
<span>{{parametri[coppia[0]-1].name}} </span>
<span> * * </span>
<span>{{parametri[coppia[1]-1].name}} </span>
</li>
</ul>
  </form>
  `,
  styles: ``
})
export default class CercaPrincipioComponent {
  parametri: Parametro[] = PARAMETRI;
  principi: Principio[] = PRINCIPI;
  form!: FormGroup;
  parametriSelezionati: Parametro[] = [];
  parametriCorrelati: [number, number][] | null = null;
  //const parametriCorrelati = this.trovaParametriCorrelati(idPrincipioSelezionato);


  ngOnInit() {
    this.form = new FormGroup({
      principio: new FormControl(''),
    });
  }

  onSubmit() {
    const idPrincipioSelezionato = this.form.get('principio')?.value
    console.log(idPrincipioSelezionato)

    if (idPrincipioSelezionato) {
      this.parametriCorrelati = this.trovaParametriCorrelati(idPrincipioSelezionato);
      /* const matrice = MATRIX.filter((row) => row.id === Number(p1));
       if (matrice.length === 1) {
         const res = matrice[0][p2]
        // console.log("***", res)
         this.principiSelezionati = res ? this.principi.filter(principio => res.includes(principio.id)) : [];
 
       }*/
    }
  }

  trovaParametriCorrelati(idPrincipio: number): [number, number][] {
    const risultati: [number, number][] = [];

    // Itera su ciascun oggetto nella matrice MATRIX
    for (const matrixObj of MATRIX) {
      // Itera su ogni proprietà dell'oggetto corrente
      for (const [parametro, principi] of Object.entries(matrixObj)) {
        // Salta le chiavi che non sono numeriche o sono 'id' o 'name'
        if (parametro === 'id' || parametro === 'name' || isNaN(+parametro)) {
          continue;
        }


        // Controlla se 'principi' è un array e contiene 'idPrincipio'
        if (Array.isArray(principi)) {
          principi.forEach((n) => {

            if ((n - idPrincipio) === 0) {
              risultati.push([matrixObj.id, +parametro]);
            }
          })


        }
      }
    }

    //console.log("Risultati finali:", risultati);
    return risultati;
  }

 
}
