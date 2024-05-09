import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-old-validator001',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './old-validator001.component.html',
  styleUrl: './old-validator001.component.css'
})
export class OldValidator001Component implements OnInit{
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(5),
        forbiddenNameValidator,
        forbiddenName_1_Validator(['food'])
      ]],
      role: ['', null, asyncRoleValidator]
    });
  }

  onSubmit() {
    console.log(this.form.getRawValue(), this.form.controls["role"].errors);
  }
}

export const forbiddenNameValidator = (
  control: AbstractControl,
): ValidationErrors | null => {
  const names = ['foo'];
  return names.includes(control.value) ? {forbiddenName: 'Name is not allowed'} : null;
};

export const forbiddenName_1_Validator = (names: string[]) => {
  return (control: AbstractControl): ValidationErrors | null => {
    return names.includes(control.value) ? {forbiddenName: 'this Name is not allowed'} : null;
  };
};

export const asyncRoleValidator = (
  control: AbstractControl
): Observable<ValidationErrors | null> => {
  const allowedRoles = ['admin', 'dev'];
  return of(control.value).pipe(
    map(value => allowedRoles.includes(value) ? null : {forbiddenRole: 'Role is not allowed'})
  );
};