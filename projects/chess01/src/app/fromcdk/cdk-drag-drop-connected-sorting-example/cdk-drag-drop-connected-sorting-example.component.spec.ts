import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDropConnectedSortingExampleComponent } from './cdk-drag-drop-connected-sorting-example.component';

describe('CdkDragDropConnectedSortingExampleComponent', () => {
  let component: CdkDragDropConnectedSortingExampleComponent;
  let fixture: ComponentFixture<CdkDragDropConnectedSortingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkDragDropConnectedSortingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CdkDragDropConnectedSortingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
