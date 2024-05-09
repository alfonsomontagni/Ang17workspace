import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-validator001',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './validator001.component.html',
  styleUrl: './validator001.component.css'
})
export class Validator001Component {
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    firstName: this.fb.control('',
      {
        validators:[
          Validators.required,
          Validators.minLength(5),
          forbiddenNameValidator,
          forbiddenName_1_Validator(['food'])
        ],
    //    asyncValidators:[]
      }
    ),
    role: this.fb.control('', {asyncValidators: [asyncRoleValidator]})
  });

  onSubmit(){
    console.log(this.form.getRawValue(),this.form.controls.role.errors)
  }

}

export const forbiddenNameValidator = (
  control: AbstractControl,
): ValidationErrors | null => {
  const names = ['foo'];
  return names.includes(control.value)
  ?{forbiddenName: 'Name is not allowed'}
  : null;
}

export const forbiddenName_1_Validator =
(names: string[])=>{ return (
  control: AbstractControl,
): ValidationErrors | null => {
 // const names = ['foo'];
  return names.includes(control.value)
  ?{forbiddenName: 'this Name is not allowed'}
  : null;
}

};

export const asyncRoleValidator = (
  control: AbstractControl
): Observable<ValidationErrors | null> => {
  const allowedRoles =['admin','dev']
  return of(control.value).pipe(
    map((value)=>{
      return allowedRoles.includes(value) 
      ? null
      : {forbiddenRole: 'Role is not allowed'};
    })
  )
}