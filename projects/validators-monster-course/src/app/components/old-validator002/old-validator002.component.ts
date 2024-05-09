import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { FakeRoleService } from '../../services/fake-role.service';

@Component({
  selector: 'app-old-validator002',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './old-validator002.component.html',
  styleUrl: './old-validator002.component.css',
})
export class OldValidator002Component implements OnInit {
  form!: FormGroup;
  isLoading = false; // Traccia se la validazione asincrona è in corso

  constructor(
    private fb: FormBuilder,
    private fakeRoleService: FakeRoleService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          forbiddenNameValidator,
          forbiddenName_1_Validator(['food']),
        ],
      ],
      role: [
        '',
        {
          asyncValidators: [
            this.asyncRoleValidatorWithLoading()
           // asyncRoleValidator_fake(this.fakeRoleService)
          ],
          updateOn: 'blur', // Valida asincronamente al blur per migliorare le performance
        },
      ],
    });
  }

  onSubmit() {
    console.log(this.form.getRawValue(), this.form.controls['role'].errors);
  }
   // Modificata per includere il tracking di isLoading
   asyncRoleValidatorWithLoading(): (control: AbstractControl) => Observable<ValidationErrors | null> {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      this.isLoading = true; // Inizia il caricamento
      return this.fakeRoleService.getValidRoles().pipe(
        switchMap((validRoles: string[]) => {
          const isValid = validRoles.includes(control.value);
          return of(isValid ? null : { forbiddenRole: 'Role is not allowed with loading' });
        }),
        // Aggiungi un delay per simulare un tempo di attesa del server
        delay(1000),
        // Assicurati di resettare isLoading quando l'Observable completa
        map(result => {
          this.isLoading = false; // Fine del caricamento
          return result;
        })
      );
    };
  }
}
 

export const forbiddenNameValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const names = ['foo'];
  return names.includes(control.value)
    ? { forbiddenName: 'Name is not allowed' }
    : null;
};

export const forbiddenName_1_Validator = (names: string[]) => {
  return (control: AbstractControl): ValidationErrors | null => {
    return names.includes(control.value)
      ? { forbiddenName: 'this Name is not allowed' }
      : null;
  };
};


export function asyncRoleValidator_fake(
  fakeRoleService: FakeRoleService
): (control: AbstractControl) => Observable<ValidationErrors | null> {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
     return fakeRoleService.getValidRoles().pipe(
      // Utilizza switchMap per cambiare Observable da quello dei ruoli a quello della validazione
      switchMap((validRoles: string[]) => {
        const isValid = validRoles.includes(control.value);
        return of(isValid ? null : { forbiddenRole: 'Role is not qui allowed' });
      })
    );
  };
}
