import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Validator001Component } from './components/validator001/validator001.component';
import { OldValidator001Component } from './components/old-validator001/old-validator001.component';
import { OldValidator002Component } from './components/old-validator002/old-validator002.component';
import { HotTableModule } from '@handsontable/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,
    CommonModule,
    Validator001Component,
    OldValidator001Component,
    OldValidator002Component,
    HotTableModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  //title = 'validators-monster-course';
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
    role: this.fb.control('')
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