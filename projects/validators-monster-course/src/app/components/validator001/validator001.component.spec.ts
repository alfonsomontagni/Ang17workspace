import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validator001Component } from './validator001.component';

describe('Validator001Component', () => {
  let component: Validator001Component;
  let fixture: ComponentFixture<Validator001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Validator001Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Validator001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
