import { Component } from '@angular/core';
import { PARAMETRI, Parametro } from '../model/parametri';
import { PRINCIPI, Principio } from '../model/principi';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MATRIX } from '../model/matrice';

@Component({
  selector: 'app-contradiction-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: 'matrix.html',
  styles: ``
})
export default class ContradictionTableComponent {
  parametri: Parametro[] = PARAMETRI;
  principi: Principio[] = PRINCIPI;
  form!: FormGroup;
  principiSelezionati: Principio[] = [];


  ngOnInit() {
    this.form = new FormGroup({
      parametro1: new FormControl(''),
      parametro2: new FormControl('')
    });
  }

  onSubmit() {
    const p1 = this.form.get('parametro1')?.value
    const p2 = this.form.get('parametro2')?.value
   // console.log(p1)
   // console.log(p2)
    if (p1 && p2) {
      const matrice = MATRIX.filter((row) => row.id === Number(p1));
      if (matrice.length === 1) {
        const res = matrice[0][p2]
        console.log("***", res)
        this.principiSelezionati = res ? this.principi.filter(principio => res.includes(principio.id)) : [];

      }
    }
  }

}