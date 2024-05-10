import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsonProva001Component } from './handson-prova001.component';

describe('HandsonProva001Component', () => {
  let component: HandsonProva001Component;
  let fixture: ComponentFixture<HandsonProva001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandsonProva001Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandsonProva001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
