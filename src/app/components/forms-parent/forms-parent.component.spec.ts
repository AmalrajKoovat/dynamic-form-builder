import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsParentComponent } from './forms-parent.component';

describe('FormsParentComponent', () => {
  let component: FormsParentComponent;
  let fixture: ComponentFixture<FormsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
