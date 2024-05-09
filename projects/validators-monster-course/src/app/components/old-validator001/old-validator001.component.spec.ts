import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldValidator001Component } from './old-validator001.component';

describe('OldValidator001Component', () => {
  let component: OldValidator001Component;
  let fixture: ComponentFixture<OldValidator001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldValidator001Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldValidator001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
